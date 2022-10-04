import Menu from "../componenter/Menu";
import PageHeading from "../componenter/PageHeading";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import ActivityCards from "../componenter/ActivityCards";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchPage = () => {

    const [searchData, setSearchData] = useState('')
    const [activityData, setActivityData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [noResults, setNoResults] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/activities').then(response => {
            setActivityData(response.data)
            setIsLoaded(true)
        })
    }, [])

    const handleSearch = (e) => {
        setSearchData(e.target.value.toLowerCase())
    }

    const filteredData = isLoaded && activityData.filter((val) => {
        if(val === ''){
            return val
        } else {
            return val.name.toLowerCase().includes(searchData)
        }
    })

    // const noSearch = () => {
    //     if(isLoaded === true && searchData === ''){
    //         return <p>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>
    //     } else {
    //         return <ActivityCards/>
    //     }
    // }
    
    // const test = noSearch
    return (
        <div className="bg-purple p-[30px] h-[100%]">
            <PageHeading text='Søg'/>
            <form className="relative mt-[10px] mb-[55px]">
                <input onChange={handleSearch} type='text' className="w-[100%] h-[40px] bg-[#C4C4C4] opacity-50"/>
                <FiSearch className="text-24 text-white absolute right-[10px] bottom-[3px]"/>
            </form>
            {/* {searchData ? filteredData.map((data) => (
                <Link to={`/activity/${data.id}`} key={data.id}>
                <div className='relative w-[100%] h-[50vh] mb-[30px]'>
                    <img src={data.asset.url} className='w-[100%] h-[100%] object-cover rounded-bl-[50px] rounded-tr-[50px] rounded-tl-[50px]' alt='Activity'/>
                    <div className="w-[100%] h-[25%] bg-pink bottom-[0px] absolute rounded-bl-[50px] rounded-tr-[50px] opacity-90 py-[10px] px-[20px]">
                        <p className="text-18">{data.name}</p>
                        <p className="text-18">{data.minAge}-{data.maxAge} år</p>
                    </div>
                </div>
            </Link>
            )) : isLoaded ? <p>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p> : <ActivityCards/>} */}
            {!searchData && <ActivityCards/>}
            {/* {isLoaded && !searchData && <p>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>} */}
            {/* {noResults && <p>Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>} */}
            {searchData && filteredData.map((data) => (
                <Link to={`/activity/${data.id}`} key={data.id}>
                <div className='relative w-[100%] h-[50vh] mb-[30px]'>
                    <img src={data.asset.url} className='w-[100%] h-[100%] object-cover rounded-bl-[50px] rounded-tr-[50px] rounded-tl-[50px]' alt='Activity'/>
                    <div className="w-[100%] h-[25%] bg-pink bottom-[0px] absolute rounded-bl-[50px] rounded-tr-[50px] opacity-90 py-[10px] px-[20px]">
                        <p className="text-18">{data.name}</p>
                        <p className="text-18">{data.minAge}-{data.maxAge} år</p>
                    </div>
                </div>
            </Link>
            ))}
            <Menu/>
        </div>
    );
}
 
export default SearchPage;