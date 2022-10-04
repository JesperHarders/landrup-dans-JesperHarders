import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../componenter/Menu";

const Detailpage = () => {

    const {id} = useParams()

    const [activityData, setActivityData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/activities/${id}`).then(response => {
            setActivityData(response.data)
            setIsLoaded(true)
        })
    }, [id])
    return (
        <div className="bg-purple h-[100vh]">
            <div>
                {isLoaded && <img src={activityData.asset.url} className='h-[60vh] w-[100vw] object-cover' alt=''/>}
            </div>
            <div className="p-[30px] text-white">
                {isLoaded && <p className="text-24">{activityData.name}</p>}
                {isLoaded && <p className="text-18">{activityData.minAge}-{activityData.maxAge} år</p>}
                {isLoaded && <p className="text-18">{activityData.description}</p>}
            </div>
            <Menu/>
        </div>
    );
}
 
export default Detailpage;