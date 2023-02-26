import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchUserById } from "@/store/authSlice";
import { useSelector } from "react-redux";

const UseSignUp = () => {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setnewPassword] = useState("")
    const [name, setName] = useState("")
    const toast = useToast()
    const router = useRouter()
    const dispatch = useDispatch()
    const selector = useSelector((store)=>store.authSlice.user)

    const UserSubmitHandler = async () => {
        try {
          await  dispatch(fetchUserById({name,newEmail,newPassword}) )
            toast({
                title: "Account created.",
                description: "Your account has been successfully created.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            router.push("/signin")
            console.log("selector>>>",selector);

            


        } catch (error) {
            console.log(error);
            toast({
                title: "An error occurred.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });

        }


    }

    return {
        setNewEmail, setnewPassword, setName, UserSubmitHandler
    }

}


export default UseSignUp