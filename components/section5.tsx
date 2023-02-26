import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";

const Section5 = () => {
return (
<Box bg="gray.100" py="10">
<Box bg="gray.700" w="50%" mx="auto" p="8" borderRadius="md" boxShadow="md">
<Heading as="h2" fontSize="xl" mb="4" textAlign="center" color="white">
Subscribe to our Newsletter
</Heading>
<Text fontSize="md" mb="8" textAlign="center" color="white">
Don't miss your favorite concert again. We deliver best of the city happenings and handpicked content for you every week. Subscribe weekly email newsletter for Pakistan.
Get the latest news and updates delivered to your inbox.
</Text>
<Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center">
<Input
  type="email"
  placeholder="Enter your email"
  mr={{ base: "0", md: "4" }}
  mb={{ base: "4", md: "0" }}
  size="sm"
  variant="filled"
  borderRadius="md"
/>

<Button size="md" colorScheme="blue">
Subscribe
</Button>
</Box>
</Box>
</Box>
);
};

export default Section5;