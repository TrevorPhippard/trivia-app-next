import { z } from "zod";
// const userSchema = z.object({
//     username: z.string()

// })

export const TriviaSchema = z.object({
    title: z.string({message: 'Name is required'}).min(5,'Name should have at least 5 characters'),
    game_id: z.string().trim(),
    text_colour: z.string().trim(),
    sliderTime: z.number(),
    userAcctId: z.string().trim(),
    // userAcct   UserAcct
    // Question   Question
});

export const QuestionSchema = z.object({
    triviaId: z.number(),
    question:z.string({message: 'Question is required'}).min(5,'Name should have at least 5 characters'),
    bg_img: z.string().trim().url('Link must be valud URL'),
    answer: z.string().trim(),
});

export const AccountSchema= z.object({
    username:  z.string().trim(),
    password:  z.string().trim().min(1,{ message: "must have 1 character" }),
    email:     z.string().trim().email({ message: " Invalid email address" }),
});