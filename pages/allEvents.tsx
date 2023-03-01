import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const selector = useSelector((store) => store.eventSlice.allData);

  useEffect(() => {
    setAllEvents(selector);
  }, [selector]);

  const onclickHandler = async () => {
    let events = [];
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
      events.push({
        title: doc.data().etitle,
        date: doc.data().edate,
        time: doc.data().etime,
        location: doc.data().elocation,
        Creator: doc.data().eCreator,
        description: doc.data().edescription,
      });
    });
    setAllEvents(events);
    console.log(selector);
    
  };

  useEffect(() => {
    onclickHandler();
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {allEvents.map((item, index) => (
          <GridItem key={index} colSpan={1}>
            <Text fontWeight="bold">{item.title}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Creator: {item.Creator}</Text>
            <Text>Description: {item.description}</Text>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default AllEvents;
