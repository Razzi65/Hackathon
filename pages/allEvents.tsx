
import { useSelector } from "react-redux"


const AllEvents = () => {
    const selector = useSelector((store)=>store.eventSlice.eventsData)

            const test = () =>{
                console.log(selector)
                
            }

    return (
        <>

        <button onClick={()=>test()}>test</button>
        
        </>

    )
}


export default AllEvents