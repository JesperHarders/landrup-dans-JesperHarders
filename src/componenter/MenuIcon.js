import { Link } from "react-router-dom";

const MenuIcon = (props) => {
    return (
        <Link to={`${props.url}`} className='text-24 mt-[5%] border-[1px] border-solid border-black rounded-full h-fit p-[7px]'>
            {props.icon}
        </Link>
    );
}
 
export default MenuIcon;