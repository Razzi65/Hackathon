
import { useState,useEffect } from "react";
import EventType from "@/Types/eventType";
import { db } from "@/config/firebase";
import { useDispatch } from "react-redux";
import { sendEventsToFirebase } from "@/store/eventSlice";
const UseEventApp = () => {

    const [ title, setTitle] = useState("")
    const [ date, setDate] = useState("")
    const [ time, setTime] = useState("")
    const [location , setLocation] = useState("")
    const [Creator , setCreator] = useState("")
    const [description , setDescription] = useState("")
    const [ allEvents, setAllEvents] = useState<EventType[]>([])
    const dispatch = useDispatch()


    const submitEventHandler = async () => {
        try {
              dispatch(sendEventsToFirebase({title,date,time,location,Creator,description}))
            
            
        } catch (error) {
            console.log("error in adding", error);
            
            
        }
    }


   



    return {
        setTitle, setDate,setTime, setLocation,
        setCreator, setDescription, setAllEvents,submitEventHandler, title,
        date, time, location, Creator, description

    }
}

export default UseEventApp