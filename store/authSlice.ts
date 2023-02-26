import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import UserType from '@/Types/usertype';

const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (user) => {
    console.log(auth, user.newEmail, user.newPassword);
    await createUserWithEmailAndPassword(auth, user.newEmail, user.newPassword)

    return user
})

const signInUser = createAsyncThunk('users/signinuser', async (user) => {

    try {
        await signInWithEmailAndPassword(auth, user.userEmail, user.userPassword)

        return user

    } catch (error) {
        throw new Error("Invalid email or password.");

    }
}
)



export const AuthSlice = createSlice({
    name: 'auth',
    initialState: { user: {} as UserType, },
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            let newstate: any = {
                ...state,
                name: action.payload.name,
                email: action.payload.newEmail
            }

            return newstate
        });


        builder.addCase(signInUser.fulfilled, (state, action) => {
            let newstate: any = {
                ...state,
                email: action.payload.userEmail
            }

            return newstate
        });

        builder.addCase(signInUser.rejected, (state, action) => {
            console.log(action.error.message)
            throw new Error(action.error.message);
        })
    }


    }


)

export default AuthSlice.reducer
export { fetchUserById, signInUser }