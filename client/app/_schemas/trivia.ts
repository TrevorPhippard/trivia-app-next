import { z } from "zod";

/** --------------------------------------------------------------------------
 * @name Schema
 * -------------------------------------------------------------------------- */
export const schema = z.object({
    title: z.string({message: 'Name is required'}).min(5,'Name should have at least 5 characters'),
    game_id: z.string().trim(),
    text_colour: z.string().trim(),
    sliderTime: z.number(),
    userAcctId: z.string().trim(),
    // userAcct   UserAcct
    // Question   Question
});

export type Schema = z.infer<typeof schema>

export const defaultValues: Schema ={
    title:'',
    game_id:'',
    text_colour:'',
    sliderTime:0,
    userAcctId:'',
}