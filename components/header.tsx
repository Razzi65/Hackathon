import {
    Flex,
    Box,
    Button,
    Heading,
    IconButton,
    useColorMode,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import { SunIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
  
  const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={3}
        bgGradient="linear(to-r, blue.500, teal.300)"
        color="white"
      >
        <Flex align="center">
          <Heading as="h1" size="md" letterSpacing={"tighter"}>
            Event Planner
          </Heading>
        </Flex>
  
        <Flex align="center">
          <Box mr={4} rounded={"md"} overflow={"hidden"}>
            <InputGroup size="sm">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input type="text" placeholder="Search" rounded={"md"} />
            </InputGroup>
          </Box>
  
          <Button
            bg="transparent"
            color="white"
            borderWidth={1}
            borderColor="white"
            rounded={"md"}
            size="sm"
            mr={2}
            _hover={{ bg: "blue.500" }}
          >
            Sign In
          </Button>
  
          <Button
            bg="transparent"
            color="white"
            borderWidth={1}
            borderColor="white"
            rounded={"md"}
            size="sm"
            _hover={{ bg: "blue.500" }}
          >
            Sign Up
          </Button>
  
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <MoonIcon color="gray.500" />
              ) : (
                <SunIcon color="gray.500" />
              )
            }
            onClick={toggleColorMode}
            size="md"
            ml={4}
            _hover={{ bg: "blue.500" }}
          />
        </Flex>
      </Flex>
    );
  };
  
  export default Header;
  