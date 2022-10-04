import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ActivityCards = () => {

    const [activityData, setActivityData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/activities').then(response => {
            setActivityData(response.data)
            setIsLoaded(true)
        })
    }, [])

    return (
        <section>
            {isLoaded && activityData.map((activity) => (
                <Link to={`/activity/${activity.id}`} key={activity.id}>
                    <div className='relative w-[100%] h-[50vh] mb-[30px]'>
                        <img src={activity.asset.url} className='w-[100%] h-[100%] object-cover rounded-bl-[50px] rounded-tr-[50px] rounded-tl-[50px]' alt='Activity'/>
                        <div className="w-[100%] h-[25%] bg-pink bottom-[0px] absolute rounded-bl-[50px] rounded-tr-[50px] opacity-90 py-[10px] px-[20px]">
                            <p className="text-18">{activity.name}</p>
                            <p className="text-18">{activity.minAge}-{activity.maxAge} år</p>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
}
 
export default ActivityCards;