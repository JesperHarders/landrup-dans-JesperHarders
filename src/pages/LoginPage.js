import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baggroundImage from '../assets/baggroundImage.jpg'
import PageHeading from '../componenter/PageHeading';
import { TokenContext } from '../context/TokenContext';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LoginPage = ({setLoggedInState}) => {

    const schema = yup.object({
        username: yup.string().required('Username is required').min(2, 'Username is too short').matches(/^[a-zA-Z0-9]*$/, 'Username must only contain letters'),
        password: yup.string().min(3, 'Password must be more than 6 charectors long').max(12, 'Password must less than 12 charectors long')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const {setToken} = useContext(TokenContext)

    const getToken = () => {
        axios.post('http://localhost:4000/auth/token', {
            username: username,
            password: password
        }).then(response => {
            setLoggedInState(true)
            setToken(response.data)
            navigate('/aktiviter', 500)
        })
    }

    return (
        <div className='relative overflow-hidden'>
            <img src={baggroundImage} className='w-[100vw] h-[100vh] object-cover' alt=''/>
            <div className='shape absolute top-[-50px] left-[-250px]'></div>
            <form className='absolute top-[30vh] left-[10vw] w-[80vw]' onSubmit={handleSubmit(getToken)}>
                <PageHeading text='Log ind'/>
                {errors.username && <span className='text-white'>{errors.username?.message}</span>}
                <input placeholder='Brugernavn' type='text' className='w-[100%] py-[5px] px-[10px] mb-[20px]' {...register('username', {onChange: (e) => setUsername(e.target.value)})}/>
                {errors.password && <span className='text-white'>{errors.password.message}</span>}
                <input placeholder='Adgangskode' type='password' className='w-[100%] py-[5px] px-[10px]' {...register('password', {onChange: (e) => setPassword(e.target.value)})}/>
                <div className='w-[200px] h-[50px] bg-purple rounded-[10px] absolute left-[20%] top-[120%]'>
                    <button type='submit' className='w-[100%] text-center leading-[50px] text-white font-ubuntu'>Log ind</button>
                </div>
            </form>
        </div>
    );
}
 
export default LoginPage;