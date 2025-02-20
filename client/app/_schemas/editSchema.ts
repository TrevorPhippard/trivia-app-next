import { z } from "zod";

export const schema = z.object({
  question: z.string().trim().min(1, {
    message: "question is required.",
  }),
  bg_img: z.string().trim().min(1, {
    message: "background url is required.",
  }),
});

export type Schema = z.infer<typeof schema>


//1:09:05
export const defaultValues:Schema = {
  question:"",
  bg_img:"",
}