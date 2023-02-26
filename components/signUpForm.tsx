import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import UseSignUp from "@/custom hooks/useSignUp";

const SignUpForm = () => {

    const {setNewEmail, setnewPassword, setName, UserSubmitHandler} = UseSignUp()

  return (
    <Box py="10">
      <Box w="80%" mx="auto" p="8" borderRadius="md" boxShadow="md" width="35%" bg="gray.500">
        <Heading as="h2" fontSize="xl" mb="4" textAlign="center" color="white">
          Create an Account
        </Heading>
        <Text fontSize="md" mb="8" textAlign="center" color="white">
          Join our community and get access to exclusive features!
        </Text>
        <form>
          <FormControl id="name" mb="4">
            <FormLabel color="white">Display Name</FormLabel>
            <Input type="text" size="sm" bg="white" placeholder="John Doe" onChange={(e)=>setName(e.target.value)}/>
          </FormControl>
          <FormControl id="email" mb="4">
            <FormLabel color="white">Email address</FormLabel>
            <Input type="email" size="sm" bg="white" placeholder="example@example.com" onChange={(e)=>setNewEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mb="4">
            <FormLabel color="white">Password</FormLabel>
            <Input type="password" size="sm" bg="white" placeholder="********" onChange={(e)=>setnewPassword(e.target.value)}/>
          </FormControl>
          <FormControl id="confirm-password" mb="4">
            
          </FormControl>
          <Button  size="md" colorScheme="blue" w="100%" onClick={()=>UserSubmitHandler()}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;
