import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";

const Section3 = () => {
  const categories = [
    {
      name: "Music",
      image: "music.png",
    },
    {
      name: "Sports",
      image: "sports.png",
    },
    {
      name: "Food & Drink",
      image: "food.png",
    },
    {
      name: "Arts & Theater",
      image: "arts.png",
    },
  ];

  return (
    <Box bg="white" py="10">
      <Heading textAlign="center" mb="10">
        Categories
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        justifyContent="center"
        alignItems="center"
      >
        {categories.map((category, index) => (
          <GridItem key={index}>
            <Box
              bg="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
            >
              <Image src={category.image} alt={category.name} h="250px" objectFit="cover" />
              <Box p="6">
                <Text fontWeight="bold" fontSize="lg" mb="2">
                  {category.name}
                </Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Section3;
