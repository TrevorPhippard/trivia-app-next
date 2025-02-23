// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use server"
import prisma from '../../lib/db';
import { schemaReform } from "@/app/_schemas/question";

/** ---------------------------------------------------------------------
 * EDIT PAGE ACTIONS
 * --------------------------------------------------------------------- */
interface questionSchema {
  order: number
  question: string;
  triviaId:number,
  bg_img?: string;
  [x: string]: string | unknown;
}

function formDataKeysToJsObject(data: questionSchema) {
  const formDataJsObject = {
    order: Number(data.order),
    question: data.question,
    bg_img: data.bg_img,
    triviaId: Number(data.triviaId),
    answer: ''
  };

  const excludedKeys = new Set(['question', 'bg_img', 'triviaId']);
  formDataJsObject.answer += Object.entries(data)
    .filter(([key]) => !excludedKeys.has(key))
    .map(([key, value]) => `${key}:${value}`)
    .join(',');

  return formDataJsObject;
}

export async function submitToServerActions(prevState: unknown, data: FormData): Promise<unknown> {

    /** convert formdata in js object with answers arrray as string under answer key */
    const objectKeys = Object.fromEntries(data);
    const jsFormData = formDataKeysToJsObject(objectKeys);
    const parsed = schemaReform.safeParse(jsFormData);


    console.log(jsFormData)

    if(!parsed.success){
      return { message: 'Invalid form data' };
    }

    await prisma.question.create({
      data: jsFormData,
    })

    return { message: 'question submitted!' };
}


/** ---------------------------------------------------------------------
 * OTHER ACTIONS
 * --------------------------------------------------------------------- */

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


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function onSubmitActionUserRegister(prevState: FormState, data: FormData): Promise<FormState> {
  return { message: "User registered" };
}
