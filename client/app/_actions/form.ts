"use server"
import prisma from '../../lib/db';
import { editSchema } from '@/app/_schemas/editSchema';

interface FormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
}

export async function fetchGameDate( ) {
    return await  prisma.trivia.findMany()
}

export async function onSubmitAction(prevState: FormState,data: FormData  ): Promise<FormState> {

    const formData = Object.fromEntries(data);
    const parsed = editSchema.safeParse(formData);
  
    if (!parsed.success) {
      const fields: Record<string, string> = {};
      for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
      }
      return {
        message: "Invalid form data",
        fields,
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
    console.log(parsed.data)

    if (parsed.data.email.includes("a")) {
      return {
        message: "Invalid email",
        fields: parsed.data,
      };
    }
  
    return { message: "User registered" };
  }

export async function getTriviaWithQuestions(triviaId: number) {
    const triviaWithQuestions = await prisma.trivia.findUnique({
      where: {
        id: 1,
      },
      include: {
        Question: true, // Include all related questions
      },
    })
    return triviaWithQuestions
  }
  
