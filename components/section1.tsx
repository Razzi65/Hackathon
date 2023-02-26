import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bannerImage from "./banner.png";

const Section1 = () => {
return (
<Box
backgroundImage={"banner.png"}
backgroundSize="cover"
backgroundPosition="center"
height="500px"
display="flex"
alignItems="center"
justifyContent="start"
textAlign="left"
paddingStart={"5"}
paddingTop={"5"}
>
<Box bg="gray.200" color="grey" maxWidth="600px" padding="50px" borderRadius="10px">
<Heading as="h2" size="xl" mb="4" color={"blue.300"}>
Find Favorite Events
</Heading>
<Text fontSize="lg">
Get ready to be a part of some amazing events happening in your city! From concerts to sports events, cultural festivals to food fairs, there's something for everyone. Experience the excitement of being a part of the action and create unforgettable memories with your friends and family.
</Text>
<Box marginTop={"5"}>
<Button colorScheme="blue" size="md" marginRight={"5"} _hover={{ bg: "blue.400" }}>
Browse Events
</Button>
<Button colorScheme="gray" size="md" _hover={{ bg: "gray.400" }}>
Create Event
</Button>
</Box>
</Box>
</Box>
);
};

export default Section1;