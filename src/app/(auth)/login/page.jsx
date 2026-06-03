"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {

    const [isShowPassword, setisShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        // console.log(data, "data")
        const { data: res, error } = await authClient.signIn.email({

            email: data.email,
            password: data.password,
            callbackURL: '/',
        })
        // console.log(res, error, "res and error")

        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("Login Successful")
        }
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden my-5'>
            <div className='w-full space-y-4 max-w-md mx-auto rounded-md bg-white p-9'>

                <h1 className='text-center text-3xl font-semibold text-amber-800'>Study-Nook</h1>
                <p className='text-center text-base text-gray-800'>Login to your account</p>
                <div className='flex items-center justify-center'>
                    <Button onClick={handleGoogleSignIn} className='btn text-amber-800'>Continue With Google</Button>
                </div>
                <hr className='text-gray-300' />
                <div>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" className="input w-full" placeholder="Enter Your Email" {...register("email", { required: "Email is required" })} />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend">Password</legend>
                            <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Enter Your Password" {...register("password", { required: "Must put your password" })} />
                            <span className='absolute right-1 top-4 mr-2 cursor-pointer' onClick={() => setisShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </fieldset>
                        <button className='btn w-full mt-3.5 bg-white text-amber-800 font-semibold'>SignIn</button>
                    </form>
                    <ToastContainer></ToastContainer>
                    <p className='mt-3.5 text-center'>dont have an account <Link className='text-red-700' href={'/register'}>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;