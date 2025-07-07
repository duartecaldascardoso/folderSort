import { Box} from "@chakra-ui/react";
import { useTypewriter } from "./useTypeWriter";
import { useColorModeValue} from './color-mode';


const TerminalBox = () => {
  const typedText = useTypewriter("$ pip install folder-sort", 50); 

  return (
    <Box
      bg={useColorModeValue("gray.100", "blackAlpha.700")}
      color={useColorModeValue("grey.600", "grey.400")}
      p={4}
      borderRadius="lg"
      fontFamily="mono"
      fontSize="sm"
      maxW="md"
      mx="auto"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
      whiteSpace="pre"
    >
      {typedText}
      <Box as="span" animation="blink 1s step-start infinite">|</Box>
    </Box>
  );
};

export default TerminalBox;