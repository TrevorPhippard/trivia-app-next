import { z } from "zod";



/** --------------------------------------------------------------------------
 * @name Schema
 * -------------------------------------------------------------------------- */

export const schema = z.object({
    triviaId: z.number(),
    order: z.number(),
    question:z.string({message: 'Question is required'}).min(5,'Name should have at least 5 characters'),
    bg_img: z.string().trim().url('Link must be valud URL').optional().or(z.literal('')),
    answer: z.array(z.object({ postId: z.string(), text: z.string().min(1) }))
});

export const schemaReform = z.object({
    triviaId: z.number(),
    order: z.number(),
    question:z.string({message: 'Question is required'}).min(5,'Name should have at least 5 characters'),
    bg_img: z.string().trim().url('Link must be valud URL').optional().or(z.literal('')),
    answer: z.string()
});

export type Schema = z.infer<typeof schema>

export const defaultValues:Schema = {
    triviaId:0,
    order:0,
    question:"",
    bg_img:"",
    answer:[
        { postId: "0", text: "" },
        { postId: "1", text: "" },
        { postId: "2", text: "" },
        { postId: "3", text: "" },
    ]
}