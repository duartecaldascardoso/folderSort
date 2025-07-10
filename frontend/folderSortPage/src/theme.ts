import {createSystem, defaultConfig} from "@chakra-ui/react";
import { textStyles } from "./themeStyles/textStyles";
import { semanticTokens } from "./themeStyles/semanticToken";

export const system = createSystem(defaultConfig, {
    theme: {
        textStyles,
        tokens: {
            fonts: {
                heading: {value: "Poppins, sans-serif"},
                body: {value: "DMSans, sans-serif"},
            },
            colors: {
                blue: {
                    10: {value: "#f8fcfe"},
                    50: {value: "#E9F5FE"},
                    100: {value: "#c9e7fe"},
                    200: {value: "#A3D1FE"},
                    300: {value: "#7BB9FE"},
                    400: {value: "#2a00ff"},
                    500: {value: "#0800F9"},
                    600: {value: "#0700D9"},
                    700: {value: "#0600B9"},
                    800: {value: "#05009A"},
                    900: {value: "#04007A"},
                },
            },
        },
        semanticTokens: semanticTokens,
    },
});