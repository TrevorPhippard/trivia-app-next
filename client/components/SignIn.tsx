import React from 'react'
import { useForm } from 'react-hook-form'

import { SignInSchema, signInSchema } from '@/app/_schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod';

export default function EditTab() {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInSchema>({
        mode: 'all',
        resolver: zodResolver(signInSchema)
    });


    function onSubmit() {
        console.log("submit")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='email'></label>
            <input
                placeholder='email'
                {...register('email', {
                    required: {
                        value: true,
                        message: 'email required'
                    }
                })}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor='password'></label>
            <input
                placeholder='password'
                {...register('password', {
                    required: {
                        value: true,
                        message: 'password required'
                    }
                })}
            />
            <p>{errors.password?.message}</p>
        </form>
    )
}
