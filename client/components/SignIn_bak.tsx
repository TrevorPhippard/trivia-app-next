import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signInAction } from "@/app/_actions/auth";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default function SignIn() {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (formData) => {

        try {
            const { email, password } = formData
            const user = await signInAction(email, password);
            console.log('user created:', user);

        } catch {
            setError("root", {
                message: "This error belongs to the 'root' aka form as a whole",
            });
        }
    };

    return (
        <>
            <header>
                <h1 className="inline-block text-2xl font-extrabold text-gray-900 tracking-tight">Sign In</h1>
                <p className="mb-2">
                    Sign in and start building
                </p>
            </header>
            <div className="space-y-2">

                <form className="grid w-full items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-1.5">
                        <label className='custom-label' >Email</label>
                        <input className="custom-input" {...register("email")} type="text" placeholder="Email" />
                        {errors.email && (
                            <div className="text-red-500">{errors.email.message}</div>
                        )}</div>
                    <div className='flex flex-col space-y-1.5 '>
                        <label className='custom-label' >Password</label>
                        <input className="custom-input" {...register("password")} type="password" placeholder="Password" />
                        {errors.password && (
                            <div className="text-red-500">{errors.password.message}</div>
                        )}
                    </div>
                    <button className='custom-button' disabled={isSubmitting} type="submit">
                        {isSubmitting ? "Loading..." : "Submit"}
                    </button>
                    {errors.root && <div className="text-red-500">{errors.root.message}</div>}
                </form>
            </div>
            <footer>
                <a>forget password</a>
            </footer>
        </>
    )
}
