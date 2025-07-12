from pydantic import Field
from datetime import datetime
from pathlib import Path
import shutil

from .base_sorter import BaseSorterStrategy


class TimeBasedSorter(BaseSorterStrategy):
    time_measure: str = Field(..., description="Granularity of time-based sorting")

    def _sort_logic(self, folder_path: Path) -> None:
        print(f"📁 Sorting folder: {folder_path}")
        files = [f for f in folder_path.iterdir() if f.is_file()]
        if not files:
            print("No files to sort.")
            return

        for file in files:
            ctime = datetime.fromtimestamp(file.stat().st_ctime)

            if self.time_measure == "day":
                folder_name = ctime.strftime("%Y-%m-%d")
            elif self.time_measure == "week":
                folder_name = f"{ctime.year}-W{ctime.isocalendar().week:02d}"
            elif self.time_measure == "month":
                folder_name = ctime.strftime("%Y-%m")
            elif self.time_measure == "year":
                folder_name = ctime.strftime("%Y")
            else:
                raise ValueError(f"Invalid time measure: {self.time_measure}")

            target_dir = folder_path / folder_name
            target_dir.mkdir(exist_ok=True)
            dest = target_dir / file.name

            if self.careful:
                dest.touch()
            else:
                shutil.move(str(file), dest)
