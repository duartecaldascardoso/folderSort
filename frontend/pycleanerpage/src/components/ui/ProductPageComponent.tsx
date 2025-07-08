'use client'

import {
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  Box,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Badge,
  Link,
} from '@chakra-ui/react'
import {
  FaRobot,
  FaTerminal,
  FaGithub,
  FaCog,
  FaBolt,
  FaCode,
  FaHeart,
  FaLinkedin,
} from 'react-icons/fa'
import { useColorModeValue, ColorModeButton } from './color-mode';
import TerminalBox from './terminalBox';

interface FeatureCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Box
    p={6}
    shadow="lg"
    borderWidth="1px"
    borderRadius="xl"
    bg={useColorModeValue('white', '#1a1a1a')}
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
    transition="all 0.3s"
  >
    <VStack gap={4}>
      <Icon as={icon} w={12} h={12} color={useColorModeValue('purple.600', 'purple.400')} />
      <Heading size="md" textAlign="center" color={useColorModeValue('gray.800', 'white')}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')} textAlign="center">
        {description}
      </Text>
    </VStack>
  </Box>
)

export default function ProductPageComponent() {
  return (
    <>
      <Flex direction="column" minH="100vh" bg={useColorModeValue('gray.50', '#0a0a0a')}>
        {/* Background Gradient */}
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
          bgGradient={useColorModeValue(
            'radial(circle at 20% 50%, purple.100 0%, transparent 50%), radial(circle at 80% 20%, purple.200 0%, transparent 50%), radial(circle at 40% 80%, purple.100 0%, transparent 50%)',
            'radial(circle at 20% 50%, purple.900 0%, transparent 50%), radial(circle at 80% 20%, purple.800 0%, transparent 50%), radial(circle at 40% 80%, purple.900 0%, transparent 50%)'
          )}
        />

        <Box
          position="fixed"
          top={6}
          right={6}
          zIndex="1000"
          p={2}
        >
          <ColorModeButton />
        </Box>

        <Box
          minH="100vh"
          position="relative"
          overflow="hidden"
        >

          <Flex
            minH="100vh"
            align="center"
            justify="center"
            px={4}
            position="relative"
            zIndex="1"
          >
            <Container maxW="6xl" py={{ base: 20, md: 36 }}>
              <Stack textAlign="center" gap={{ base: 8, md: 14 }}>
                <VStack gap={4}>
                  <Heading
                    as="h1"
                    fontWeight="bold"
                    fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
                    lineHeight="110%"
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    Organize your folders <br />
                    <Text as="span" color={useColorModeValue('purple.600', 'purple.400')} textDecorationLine={'underline'}>
                      with intelligence
                    </Text>
                  </Heading>
                  <Badge
                    colorScheme="purple"
                    px={4}
                    py={2}
                    borderRadius="full"
                    bg={useColorModeValue('purple.100', 'purple.900')}
                    color={useColorModeValue('purple.800', 'purple.200')}
                    border="1px solid"
                    borderColor={useColorModeValue('purple.200', 'purple.700')}
                  >
                    Open Source • AI-Powered • CLI Tool
                  </Badge>
                </VStack>

                <Text fontSize="l" maxW="2xl" mx="auto" color={useColorModeValue('gray.600', 'gray.200')}>
                  <b>FolderSort</b> is an open-source CLI tool that uses AI agents to organize your files and folders,
                  adapting to your workflow and usage patterns. Customizable and built for developers.
                </Text>

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  gap={4}
                  justify="center"
                  align="center">
                  <Link
                      href="https://github.com/duartecaldascardoso/folderSort"
                      target="_blank"
                      rel="noopener noreferrer"
                      _hover={{ textDecoration: 'none' }}
                  ></Link>  
                  <Button
                    colorScheme="purple"
                    rounded="full"
                    px={8}
                    size="lg"
                    bg={useColorModeValue('white.600', 'black.500')}
                    color={useColorModeValue('black.600', 'white.500')}
                    _hover={{ bg: useColorModeValue('white.600', 'black.500'), transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    boxShadow={useColorModeValue(
                      '0 5px 25px rgba(128, 90, 213, 0.4)',
                      '0 5px 25px rgba(147, 107, 216, 0.3)'
                    )}
                  >
                    <Icon as={FaGithub} mr={2} />
                    Contribute
                  </Button>
                </Stack>

                <TerminalBox />
              </Stack>
            </Container>
          </Flex>
        </Box>

        <Container maxW="6xl" py={1}>
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading size="xl" color={useColorModeValue('gray.800', 'white')}>
                Why FolderSort?
              </Heading>
              <Text fontSize="l" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
                Built by developers, for developers. FolderSort combines AI intelligence with
                command-line efficiency to revolutionize how you manage your workspace.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              <FeatureCard
                icon={FaRobot}
                title="AI-Powered Organization"
                description="Advanced AI agents analyze your files and create intelligent folder structures based on content, type, and usage patterns."
              />
              <FeatureCard
                icon={FaTerminal}
                title="CLI-First Design"
                description="Built for the command line with powerful flags, batch operations, and scriptable automation for your workflow."
              />
              <FeatureCard
                icon={FaCog}
                title="Fully Customizable"
                description="Configure rules, patterns, and behaviors. Chain multiple commands together with flags for complex workflows."
              />
              <FeatureCard
                icon={FaBolt}
                title="Lightning Fast"
                description="Optimized algorithms and LLM calls process thousands of files in seconds, with optimized resource usage."
              />
              <FeatureCard
                icon={FaCode}
                title="Open Source"
                description="Transparent, community-driven development. Contribute, extend, and customize the tool within the community."
              />
              <FeatureCard
                icon={FaHeart}
                title="Developer Friendly"
                description="Built with care and following good practices. Easy to start developing, testing, and contributing to the project."
              />
            </SimpleGrid>
          </VStack>
        </Container>

        <Box py={20}>
          <Container maxW="6xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color={useColorModeValue('gray.800', 'white')}>
                  See It In Action
                </Heading>
                <Text fontSize="l" color={useColorModeValue('gray.600', 'gray.300')}>
                  Watch FolderSort organize a messy Downloads folder in seconds
                </Text>
              </VStack>

              <Box
                bg={useColorModeValue('gray.100', '#000000')}
                color={useColorModeValue('green.600', 'green.400')}
                p={8}
                borderRadius="lg"
                fontFamily="mono"
                fontSize="sm"
                width="100%"
                maxW="4xl"
                border="1px solid"
                borderColor={useColorModeValue('gray.300', 'gray.700')}
              >
                <Text color={useColorModeValue('gray.500', 'gray.500')}># Before: 247 files scattered in Downloads</Text>
                <Text mt={2}>$ folder-sort --ai Please sort my files according to their types (Documents, Images and Code)</Text>
                <Text mt={4} color={useColorModeValue('orange.500', 'yellow.400')}>🤖 Analyzing file patterns...</Text>
                <Text color={useColorModeValue('orange.500', 'yellow.400')}>📁 Creating intelligent folder structure...</Text>
                <Text color={useColorModeValue('green.600', 'green.400')}>✅ Organized 247 files into 12 categories (2.3s)</Text>
                <Text mt={4} color={useColorModeValue('gray.500', 'gray.500')}># After: Documents/PDFs, Images/Screenshots, Code/Projects, etc.</Text>
              </Box>
            </VStack>
          </Container>
        </Box>

        <Box bg={useColorModeValue('gray.900', '#000000')} color="white" py={8} position="relative">
          <Container maxW="6xl">
            <VStack gap={3} textAlign="center">
              <Heading size="lg" color="white">Ready to get organized?</Heading>
              <Text fontSize="l" color={useColorModeValue('gray.300', 'gray.400')}>
                Install FolderSort today and join thousands of developers who've revolutionized their workflow.
              </Text>
              <HStack gap={6} wrap="wrap" justify="center">
                <Link
                  href="https://github.com/duartecaldascardoso/folderSort"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    size="lg"
                    variant="ghost"
                    color={useColorModeValue('gray.600', 'gray.300')}
                    _hover={{ color: useColorModeValue('gray.800', 'white') }}
                    transition="all 0.3s"
                  >
                    <Icon as={FaGithub} />
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/duartecardoso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    size="lg"
                    variant="ghost"
                    color={useColorModeValue('gray.600', 'gray.300')}
                    _hover={{ color: useColorModeValue('gray.800', 'white') }}
                    transition="all 0.3s"
                  >
                    <Icon as={FaLinkedin} />
                  </Button>
                </Link>

                <Link
                  href="https://buymeacoffee.com/caldasdcarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    size="lg"
                    variant="ghost"
                    color={useColorModeValue('gray.600', 'gray.300')}
                    _hover={{ color: useColorModeValue('gray.800', 'white') }}
                    transition="all 0.3s"
                  >
                    ☕
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </Container>
        </Box>
        <Box
          position="absolute"
          bottom={4}
          right={4}
          bg={useColorModeValue('whiteAlpha.100', 'blackAlpha.400')}
          px={3}
          py={2}
          borderRadius="md"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={useColorModeValue('whiteAlpha.200', 'whiteAlpha.100')}
        >
          <Text fontSize="sm" color={useColorModeValue('gray.300', 'gray.400')}>
            Founded by{' '}
            <Link
              href="https://www.linkedin.com/in/duartecardoso/"
              target="_blank"
              rel="noopener noreferrer"
              color={useColorModeValue('purple.300', 'purple.200')}
              _hover={{ textDecoration: 'underline' }}
            >
              Duarte Cardoso
            </Link>
          </Text>
        </Box>
      </Flex>

      <style>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}