import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import baggroundImage from '../assets/baggroundImage.jpg'
const WelcomePage = () => {
    return (
        <div className='relative'>
            <img src={baggroundImage} className='w-[100vw] h-[100vh] object-cover' alt=''/>
            <div className='absolute top-[50vh]'>
                <div className='ml-[15%]'>
                    <p className='font-headingOne text-36 font-bold leading-none textBorder'>LANDRUP</p>
                    <p className='font-headingTwo text-[72pt] text-[#E856EB] leading-none textBorderThin'>DANS</p>
                </div>
                <div className='h-[15px] w-[80vw] bg-[#913693]'></div>
            </div>
            <motion.div initial={{y: 500}} animate={{y: 0}} transition={{duration: 1.5}} className='w-[200px] h-[50px] bg-purple absolute bottom-[50px] left-[25%] rounded-[10px]'>
                <Link to='/aktiviter'>
                    <p className='text-center leading-[50px] text-white'>Kom i gang</p>
                </Link>
            </motion.div>
        </div>
    );
}
 
export default WelcomePage;