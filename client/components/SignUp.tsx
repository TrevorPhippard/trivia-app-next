import React from 'react'
import { useForm } from 'react-hook-form'

import { RegSchema, regSchema } from '@/app/_schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod';

export default function EditTab() {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegSchema>({
        mode: 'all',
        resolver: zodResolver(regSchema)
    });

    function onSubmit() {
        console.log("submit")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            EditTab
            <label htmlFor='password'></label>
            <textarea
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
