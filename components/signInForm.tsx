import UseSignIn from "@/custom hooks/useSignIn";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, Checkbox } from "@chakra-ui/react";



const SignInForm = () => {

    const { setUserEmail, setUserPassword, setIsCheck, SignInHandler } = UseSignIn()
    
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        console.log(isChecked);
        setIsCheck(isChecked);
      };
      

    return (
        <Box py="10">
            <Box w="80%" mx="auto" p="8" borderRadius="md" boxShadow="md" width="35%" bg="gray.500">
                <Heading as="h2" fontSize="xl" mb="4" textAlign="center" color="white">
                    Sign In
                </Heading>
                <Text fontSize="md" mb="8" textAlign="center" color="white">
                    Welcome back! Please sign in to continue.
                </Text>
                <form>
                    <FormControl id="email" mb="4">
                        <FormLabel color="white">Email address</FormLabel>
                        <Input type="email" size="sm" bg="white" placeholder="example@example.com" onChange={(e) => setUserEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password" mb="4">
                        <FormLabel color="white">Password</FormLabel>
                        <Input type="password" size="sm" bg="white" placeholder="********" onChange={(e)=> setUserPassword(e.target.value)} />
                    </FormControl>
                    <Checkbox size="sm" colorScheme="white" mb="4" onChange={ handleCheckboxChange}>
                    Remember Me
                </Checkbox>
                <Button size="md" colorScheme="blue" w="100%" onClick={()=>SignInHandler()}>
                    Sign In
                </Button>
            </form>
        </Box>
            </Box >
        );
    };

export default SignInForm