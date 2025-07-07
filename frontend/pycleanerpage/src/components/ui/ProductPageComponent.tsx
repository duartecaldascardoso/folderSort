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

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <VStack>
    <Text fontSize="3xl" fontWeight="bold" color={useColorModeValue('purple.600', 'purple.400')}>{number}</Text>
    <Text color={useColorModeValue('gray.600', 'gray.300')}>{label}</Text>
  </VStack>
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
                  FolderSort is an open-source CLI tool that uses AI agents to organize your files and folders, 
                  adapting to your workflow and usage patterns. Customizable and built for developers.
                </Text>

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  gap={4}
                  justify="center"
                  align="center">
                  <Button
                    colorScheme="purple"
                    rounded="full"
                    px={8}
                    size="lg"
                    bg={useColorModeValue('purple.600', 'purple.500')}
                    color="white"
                    _hover={{ bg: useColorModeValue('purple.700', 'purple.400'), transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    boxShadow={useColorModeValue(
                      '0 10px 25px rgba(128, 90, 213, 0.4)',
                      '0 10px 25px rgba(147, 107, 216, 0.3)'
                    )}
                  >
                    <Icon as={FaGithub} mr={2} />
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    rounded="full"
                    px={8}
                    size="lg"
                    borderColor={useColorModeValue('purple.500', 'purple.400')}
                    color={useColorModeValue('purple.600', 'purple.300')}
                    _hover={{ 
                      bg: useColorModeValue('purple.50', 'purple.900'), 
                      borderColor: useColorModeValue('purple.600', 'purple.300'),
                      transform: 'translateY(-2px)'
                    }}
                    transition="all 0.3s"
                    backdropFilter="blur(10px)"
                  >
                    <Icon as={FaTerminal} mr={2} />
                    Quick Install
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
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
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
                description="Configure rules, patterns, and behaviors. Create custom organization strategies that match your unique needs."
              />
              <FeatureCard
                icon={FaBolt}
                title="Lightning Fast"
                description="Optimized algorithms process thousands of files in seconds, with minimal resource usage and maximum efficiency."
              />
              <FeatureCard
                icon={FaCode}
                title="Open Source"
                description="Transparent, community-driven development. Contribute, extend, and customize the tool to fit your exact requirements."
              />
              <FeatureCard
                icon={FaHeart}
                title="Developer Friendly"
                description="Extensive documentation, plugin system, and API for integration with your existing tools and workflows."
              />
            </SimpleGrid>
          </VStack>
        </Container>

        <Box  py={20}>
          <Container maxW="6xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color={useColorModeValue('gray.800', 'white')}>
                  See It In Action
                </Heading>
                <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
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
                <Text mt={2}>$ folder-organizer organize ~/Downloads --ai-mode</Text>
                <Text mt={4} color={useColorModeValue('orange.500', 'yellow.400')}>🤖 Analyzing file patterns...</Text>
                <Text color={useColorModeValue('orange.500', 'yellow.400')}>📁 Creating intelligent folder structure...</Text>
                <Text color={useColorModeValue('green.600', 'green.400')}>✅ Organized 247 files into 12 categories (2.3s)</Text>
                <Text mt={4} color={useColorModeValue('gray.500', 'gray.500')}># After: Documents/PDFs, Images/Screenshots, Code/Projects, etc.</Text>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Stats Section */}
        <Container maxW="6xl" py={20}>
          <VStack gap={12}>
            <VStack gap={4} textAlign="center">
              <Heading size="xl" color={useColorModeValue('gray.800', 'white')}>
                Join the Community
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                FolderSort is growing fast with developers who believe in better file organization
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} width="100%">
              <StatCard number="2.5K+" label="GitHub Stars" />
              <StatCard number="150+" label="Contributors" />
              <StatCard number="50K+" label="Files Organized" />
              <StatCard number="15+" label="Languages Supported" />
            </SimpleGrid>
          </VStack>
        </Container>

        <Box bg={useColorModeValue('gray.900', '#000000')} color="white" py={16}>
          <Container maxW="6xl">
            <VStack gap={8} textAlign="center">
              <Heading size="lg" color="white">Ready to get organized?</Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.300', 'gray.400')}>
                Install FolderSort today and join thousands of developers who've revolutionized their workflow.
              </Text>
              <HStack gap={6}>
                <Link 
                  href="https://github.com/yourusername/folder-organizer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button 
                    size="lg" 
                    colorScheme="purple"
                    bg={useColorModeValue('purple.600', 'purple.500')}
                    _hover={{ transform: 'translateY(-2px)', bg: useColorModeValue('purple.700', 'purple.400') }}
                    transition="all 0.3s"
                  >
                    <Icon as={FaGithub} mr={2} />
                    Star on GitHub
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  colorScheme="purple"
                  borderColor={useColorModeValue('purple.500', 'purple.400')}
                  color={useColorModeValue('purple.600', 'purple.300')}
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    bg: useColorModeValue('purple.50', 'purple.900'),
                    borderColor: useColorModeValue('purple.600', 'purple.300')
                  }}
                  transition="all 0.3s"
                >
                  View Documentation
                </Button>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Flex>

      <style>{`
        @keyframes float1 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes float2 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(20px) rotate(-180deg); 
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  ) 
}