import { z } from "zod";


/** --------------------------------------------------------------------------
 * @name RegSchema
 * -------------------------------------------------------------------------- */

const patterns = {
    email: /^[\w-.]+@([\w-]+l.)+[\w-]{2,4}$/,
}

const checkPass =(text:string)=>patterns.email.test(text);


export const regSchema = z.object({
    username: z.string().min(1, {
        message: "username is required.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }).refine(checkPass,{
        message:'email not valid'
    }),
    password: z.string().min(1, {
        message: "password is required.",
    }),
});
export type RegSchema = z.infer<typeof regSchema>

export const regDefaultValues:RegSchema = {
    username:"",
    password:"",
    email:""
}


/** --------------------------------------------------------------------------
 * @name SignInSchema
 * -------------------------------------------------------------------------- */

export const signInSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }).refine(checkPass,{
        message:'email not valid'
    }),
    password: z.string().min(1, {
        message: "password is required.",
    }),
});

export type SignInSchema = z.infer<typeof signInSchema>

export const signInDefaultValues:SignInSchema = {
    password:"",
    email:""
}