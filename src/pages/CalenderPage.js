import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../componenter/Menu";
import PageHeading from "../componenter/PageHeading";
import { TokenContext } from "../context/TokenContext";

const CalenderPage = () => {

    const {token} = useContext(TokenContext)

    const [isIntructor, setIsInstructor] = useState(false)
    const [activityData, setActivityData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/users/${token.userId}`, {
            'headers': {
                'Authorization': `Bearer ${token.token}`
            }
        }).then(response => {
            setActivityData(response.data.activities)
            setIsLoaded(true)
            if(response.data.role === 'instructor'){
                setIsInstructor(true)
            }
        })
    }, [token])

    return (
        <div className="p-[30px]">
            <PageHeading text='Kalender'/>
                {isLoaded && activityData.map((item) => (
                    <Link to={isIntructor ? `/calenderDetails/${item.id}` : `/activity/${item.id}`} key={item.id}>
                        <div className="w-[100%] h-[10%] bg-white pl-[30px] py-[15px] rounded-[25px] mt-[20px]">
                            <p className="text-36">{item.name.slice(0, 10) + '...'}</p>
                            <p className="text-18">{item.weekday} {item.time}</p>
                        </div>
                    </Link>
                ))}
            <Menu/>
        </div>
    );
}
 
export default CalenderPage;