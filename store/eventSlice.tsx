import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from '@/config/firebase';




const sendEventsToFirebase = createAsyncThunk('events/sendevents', async (eventsData) => {
    const docRef = await addDoc(collection(db, "events"), {
        etitle: eventsData.title, edate: eventsData.date, etime: eventsData.time, elocation: eventsData.location, eCreator: eventsData.Creator, edescription: eventsData.description
    });
    console.log(eventsData.Creator);
    console.log(docRef.id);
    return eventsData


})

export const eventSlice = createSlice({
    name: 'events',
    initialState: {
        eventsData: {},
        allData: []
    },
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(sendEventsToFirebase.fulfilled, (state, action) => {
            console.log(action.payload);
            let newAllData = [...state.allData, action.payload]
            let newstate: any = {
                ...state,
                eventsData: action.payload,
                allData:newAllData 
            }

            return newstate

        })
    }
})


export default eventSlice.reducer

export { sendEventsToFirebase }

