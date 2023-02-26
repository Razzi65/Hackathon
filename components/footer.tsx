import { Box, Flex, Link, Text, IconButton, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.200" color="gray.700" py="10">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        maxW="1200px"
        mx="auto"
        px={{ base: "4", md: "8" }}
      >
        <Box mb={{ base: "6", md: "0" }} mr={{ md: "16" }}>
          <Text fontWeight="bold" fontSize="xl" mb="2">
            Event Planner
          </Text>
          <Text fontSize="md" mb="4" width={"60"}>
          The app provides a platform for users to create and join interest-based communities, where they can engage in discussions, share ideas, and network with like-minded individuals.  </Text>
          <Link href="#">Privacy Policy</Link>
        </Box>
        <Box mb={{ base: "6", md: "0" }} mr={{ md: "16" }}>
          <Text fontWeight="bold" fontSize="xl" mb="2">
            Contact Us
          </Text>
          <Text fontSize="md" mb="4">
            Email: contact@appname.com
          </Text>
          <Text fontSize="md" mb="4">
            Phone: +92 321 111 1111
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="xl" mb="2">
            Follow Us
          </Text>
          <Flex alignItems="center">
            <Link href="#" mr="4">
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="lg"
                variant="ghost"
              />
            </Link>
            <Link href="#" mr="4">
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="lg"
                variant="ghost"
              />
            </Link>
            <Link href="#">
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="lg"
                variant="ghost"
              />
            </Link>
          </Flex>
        </Box>
        <Box>
          <Stack spacing="4">
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaSearch />} />
              <Input type="text" placeholder="Search..." />
            </InputGroup>
            
          </Stack>
        </Box>
      </Flex>
      <Box textAlign="center" borderTop="1px solid" mt="10" pt="8">
        <Text fontSize="md" mb="2">
          © {new Date().getFullYear()} Event Planner. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
