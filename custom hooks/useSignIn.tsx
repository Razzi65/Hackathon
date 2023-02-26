import { useState } from "react"
import { useDispatch } from "react-redux"
import { useToast } from '@chakra-ui/react'
import { signInUser } from "@/store/authSlice"
import { useRouter } from "next/router"


const UseSignIn = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isChecked, setIsCheck] = useState("")
    const dispatch = useDispatch()
    const toast = useToast()
    const router = useRouter()

    const SignInHandler = async () => {
        try {
            if (!userEmail || !userPassword) {
                throw new Error("Please provide both email and password.");
              }
          
            await dispatch(signInUser({ isChecked, userEmail, userPassword }))
            toast({
                title: "Signin Successfully",
                description: "Signin Successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            router.push("/")
            console.log("selector>>>", selector);




        } catch (error) {
            console.log("signIn errorrrr",error);
            toast({
                title: "write correct email/password.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });

        }
    }


        return {
            setUserEmail, setUserPassword, setIsCheck, SignInHandler
        }
    }


export default UseSignIn