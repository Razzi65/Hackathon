import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import UseEventApp from "@/custom hooks/useEventApp";


const CreateEventApp = () => {

    const {
     title, date, time, location, Creator, description,  setTitle, setDate,setTime, setLocation,
        setCreator, setDescription, submitEventHandler

    } = UseEventApp()
 

  return (
    <Box py="10">
      <Box
        w="80%"
        mx="auto"
        p="8"
        borderRadius="md"
        boxShadow="md"
        width="45%"
        bg="gray.400"
      >
        <Heading as="h2" fontSize="xl" mb="4" textAlign="center" color="white">
          Submit an event
        </Heading>
        <Text fontSize="md" mb="8" textAlign="center" color="white">
          Join the community and get access to millions of attendees!
        </Text>
        <form>
          <FormControl id="Title" mb="4">
            <FormLabel color="white">Event Title</FormLabel>
            <Input
              type="text"
              size="sm"
              bg="white"
              placeholder="Write an Event Title"
              name="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="Date" mb="4">
            <FormLabel color="white">Event Date</FormLabel>
            <Input
              type="date"
              size="sm"
              bg="lightgray"
              placeholder="Date of event"
              name="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="time" mb="4">
            <FormLabel color="white">Time of event</FormLabel>
            <Input
              type="time"
              size="sm"
              bg="lightgray"
              placeholder="When event will start?"
              name="time"
              value={time}
              onChange={(e)=>setTime(e.target.value)}
            />
          </FormControl>

          <FormControl id="Location" mb="4">
            <FormLabel color="white">Location</FormLabel>
            <Input
              type="text"
              size="sm"
              bg="white"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
            />
          </FormControl>

          <FormControl id="Description" mb="4">
            <FormLabel color="white">Description</FormLabel>
            <Input
              type="text"
              size="sm"
              bg="white"
              placeholder="Write the details of event"
              name="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl id="Creator's Name" mb="4">
            <FormLabel color="white">Your Name</FormLabel>
            <Input
              type="text"
              size="sm"
              bg="white"
              placeholder="Write your name"
              name="creator"
              value={Creator}
              onChange={(e)=>setCreator(e.target.value)}
            />
          </FormControl>
        </form>

        <Button size="md" colorScheme="blue" w="100%" onClick={()=>submitEventHandler()}>
          Submit Event
        </Button>
      </Box>
    </Box>
  );
};

export default CreateEventApp;
