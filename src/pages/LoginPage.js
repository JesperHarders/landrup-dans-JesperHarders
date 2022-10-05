import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baggroundImage from '../assets/baggroundImage.jpg'
import PageHeading from '../componenter/PageHeading';
import { TokenContext } from '../context/TokenContext';

const LoginPage = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const {setToken} = useContext(TokenContext)

    const getToken = () => {
        axios.post('http://localhost:4000/auth/token', {
            username: username,
            password: password
        }).then(response => {
            setToken(response.data)
            navigate('/aktiviter', 500)
        })
    }
    return (
        <div className='relative overflow-hidden'>
            <img src={baggroundImage} className='w-[100vw] h-[100vh] object-cover' alt=''/>
            <div className='shape absolute top-[-50px] left-[-250px]'></div>
            <form className='absolute top-[30vh] left-[10vw] w-[80vw]'>
                <PageHeading text='Log ind'/>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='Brugernavn' type='text' className='w-[100%] py-[5px] px-[10px] mb-[20px]'/>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='Adgangskode' type='text' className='w-[100%] py-[5px] px-[10px]'/>
                <div onClick={getToken} className='w-[200px] h-[50px] bg-purple rounded-[10px] absolute left-[20%] top-[120%]'>
                    <p className='text-center leading-[50px] text-white font-ubuntu'>Log ind</p>
                </div>
            </form>
        </div>
    );
}
 
export default LoginPage;