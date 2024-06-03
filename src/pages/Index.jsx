import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Movie Reviews
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the latest reviews of your favorite movies.
        </Text>
        <Box w="full" py={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster1.jpg" alt="Movie 1" />
              <Box p={6}>
                <Heading as="h3" size="md">Movie Title 1</Heading>
                <Text mt={4}>A brief description of Movie 1.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster2.jpg" alt="Movie 2" />
              <Box p={6}>
                <Heading as="h3" size="md">Movie Title 2</Heading>
                <Text mt={4}>A brief description of Movie 2.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/path/to/movie-poster3.jpg" alt="Movie 3" />
              <Box p={6}>
                <Heading as="h3" size="md">Movie Title 3</Heading>
                <Text mt={4}>A brief description of Movie 3.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;