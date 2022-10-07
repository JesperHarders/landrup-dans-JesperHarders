import MenuIcon from "./MenuIcon";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const Menu = () => {

    const {token} = useContext(TokenContext)

    return (
        <div className="w-[100vw] h-[10vh] bg-white fixed bottom-0 left-0 flex justify-around">
            <MenuIcon url='/aktiviter' icon={<FiHome/>}/>
            <MenuIcon url='/search' icon={<FiSearch/>}/>
            <MenuIcon url={token ? '/calender' : '/login'} icon={<AiOutlineCalendar/>}/>
        </div>
    );
}
 
export default Menu;