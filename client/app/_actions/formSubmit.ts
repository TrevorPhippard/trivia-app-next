


"use server";

"use server"
import prisma from '../../lib/db';
import { schemaReform } from "@/app/_schemas/question";

interface originalQuestionState {
  question?: string;
  bg_img?: string;
  [x: string]: string | unknown;
}

function createFinishedObject(data: originalQuestionState) {
  const finished = {
    question: data.question,
    bg_img: data.bg_img,
    answers: '',
  };

  for (const key in data) {
    if (key !== 'question' && key !== 'bg_img') {
      finished.answers += `${key}:${data[key]},`;
    }
  }

  return finished;
}

export async function submitToServerActions(prevState: unknown, data: FormData): Promise<unknown> {
    const originalQuestion = Object.fromEntries(data);
    const formData = createFinishedObject(originalQuestion);
    const parsed = schemaReform.safeParse(formData);

    // await new Promise(resolve => {setTimeout(resolve, 1000);});

    if(!parsed.success){
      return { message: 'Invalid form data' };
    }

    console.log(formData)
  //  await prisma.question.create({
  //     data: {
  //       triviaId: 1,
  //       question: 'question',
  //       answer: 'Answer 1',
  //     },
  //   })

    return { message: 'question submitted!' };
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
  return { message: "User registered" };
}
