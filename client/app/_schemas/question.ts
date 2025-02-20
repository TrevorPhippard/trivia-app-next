import { z } from "zod";



/** --------------------------------------------------------------------------
 * @name Schema
 * -------------------------------------------------------------------------- */

export const schema = z.object({
    question:z.string({message: 'Question is required'}).min(5,'Name should have at least 5 characters'),
    bg_img: z.string().trim().url('Link must be valud URL'),
    answer: z.array(z.string().trim()),
});

export type Schema = z.infer<typeof schema>

export const defaultValues:Schema = {
    question:"",
    bg_img:"",
    answer:["",""],
}