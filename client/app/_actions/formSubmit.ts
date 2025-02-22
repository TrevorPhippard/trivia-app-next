


"use server";

"use server"
import prisma from '../../lib/db';
import { schema as userSchema } from "@/app/_schemas/editSchema";

interface FormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
}

export async function fetchGameDate() {
  return await prisma.trivia.findMany()
}

export async function getTriviaWithQuestions(triviaId: string | null) {
  if (!triviaId) return false;
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


export async function onSubmitActionUserRegister(prevState: FormState, data: FormData): Promise<FormState> {

  const formData = Object.fromEntries(data);
  const parsed = userSchema.safeParse(formData);

  console.log(parsed.data)

  return { message: "User registered" };
}

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = userSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue: { message: string; }) => issue.message),
    };
  }


  return { message: "User registered" };
}