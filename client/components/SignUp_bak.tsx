import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signUpAction } from "@/app/_actions/auth";



const schema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export default function SignUp() {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: "test@email.com",
            username: "test",
            password: "testtest"
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (formData) => {
        console.log({ 'data': formData });

        try {
            const { username, email, password } = formData
            const user = await signUpAction(username, email, password);
            console.log('user created:', user);

        } catch {
            setError("root", {
                message: "This error belongs to the 'root' aka form as a whole",
            });
        }
    };

    return (
        <form className="grid w-full items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col space-y-1.5'>
                <label className='custom-label'>Username</label>
                <input className="custom-input" {...register("username")} type="text" placeholder="Username" />
                {errors.username && (
                    <div className="text-red-500">{errors.username.message}</div>
                )}
            </div>
            <div className='flex flex-col space-y-1.5'>

                <label className='custom-label'>Email</label>
                <input className="custom-input" {...register("email")} type="email" placeholder="Email" />
                {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                )}
            </div>
            <div className='flex flex-col space-y-1.5'>


                <label className='custom-label'>Password</label>
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

    )
}
