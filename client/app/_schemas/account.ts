import { z } from "zod";

/** --------------------------------------------------------------------------
 * @name AccountSchema
 * -------------------------------------------------------------------------- */

export const schema= z.object({
    username:  z.string().trim(),
    password:  z.string().trim().min(1,{ message: "must have 1 character" }),
    email:     z.string().trim().email({ message: " Invalid email address" }),
});

export type Schema = z.infer<typeof schema>

export const defaultValues:Schema = {
    username:"",
    password:"",
    email:""
  }