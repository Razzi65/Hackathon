import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Section2 = () => {
  const events = [
    {
      name: "Summer Music Festival",
      date: "July 16-18, 2023",
      location: "Central Park, New York",
      image: "event.avif",
    },
    {
      name: "Food & Wine Expo",
      date: "August 6-7, 2023",
      location: "Convention Center, San Francisco",
      image: "event.avif",
    },
    {
      name: "International Film Festival",
      date: "September 22-30, 2023",
      location: "Cinema City, Los Angeles",
      image: "event.avif",
    },
    {
      name: "Fashion Week",
      date: "October 2-8, 2023",
      location: "Bryant Park, New York",
      image: "event.avif",
    },
  ];

  return (

    <Box bg="gray.100" py="10" px="4">
      <Heading textAlign="center" mb="10">
        Top Events
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        justifyContent="center"
        alignItems="center"
      >
        {events.map((event, index) => (
          <GridItem key={index}>
            <Box
              bg="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
              h="300px"
            >
              <Box bgImage={`url(${event.image})`} h="60%" bgSize="cover" />
              <Box p="4" h="40%">
                <Text fontWeight="bold" fontSize="lg" mb="2">
                  {event.name}
                </Text>
                <Text fontSize="sm" color="gray.500" mb="2">
                  {event.date}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {event.location}
                </Text>
              </Box>
            </Box>

            <Box
              bg="white"
              boxShadow="md"
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
              h="300px"
            >
              <Box bgImage={`url(${event.image})`} h="60%" bgSize="cover" />
              <Box p="4" h="40%">
                <Text fontWeight="bold" fontSize="lg" mb="2">
                  {event.name}
                </Text>
                <Text fontSize="sm" color="gray.500" mb="2">
                  {event.date}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {event.location}
                </Text>
              </Box>
            </Box>

            
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Section2;
