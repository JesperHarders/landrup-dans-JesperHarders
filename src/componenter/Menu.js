import MenuIcon from "./MenuIcon";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

const Menu = () => {
    return (
        <div className="w-[100vw] h-[10vh] bg-white fixed bottom-0 left-0 flex justify-around">
            <MenuIcon url='/aktiviter' icon={<FiHome/>}/>
            <MenuIcon url='/search' icon={<FiSearch/>}/>
            <MenuIcon url='/login' icon={<AiOutlineCalendar/>}/>
        </div>
    );
}
 
export default Menu;