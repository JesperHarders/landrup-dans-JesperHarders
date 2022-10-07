import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../componenter/Menu";
import PageHeading from "../componenter/PageHeading";

const CalenderDetails = () => {

    const {id} = useParams()

    const [isLoaded, setIsLoaded] = useState(false)
    const [activityData, setActivityData] = useState()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/activities/${id}`).then(response => {
            setActivityData(response.data)
            setIsLoaded(true)
        })
    }, [id])

    return (
        <div className="p-[30px] text-white">
            {isLoaded && <PageHeading text={activityData.name}/>}
            {isLoaded && activityData.users.map((item) => (
                <p key={item.id}>{item.firstname} {item.lastname}</p>
            ))}
            <Menu/>
        </div>
    );
}
 
export default CalenderDetails;