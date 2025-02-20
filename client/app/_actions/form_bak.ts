"use server"
import prisma from '../../lib/db';
import { schema } from '@/app/_schemas/question';

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
    const parsed = schema.safeParse(formData);

    console.log(parsed.data)

  
    return { message: "User registered" };
  }

export async function getTriviaWithQuestions(triviaId: string | null) {
    if(!triviaId) return false;
    const triviaWithQuestions = await prisma.trivia.findUnique({
      where: {
        game_id: triviaId,
      },
      include: {
        Question: true, // Include all related questions
      },
    })
    return triviaWithQuestions
  }
  
