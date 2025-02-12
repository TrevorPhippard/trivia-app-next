"use server"
import prisma from '../../lib/db';
import { createSession, deleteSession } from "../../lib/session";
import { redirect } from "next/navigation";

export async function addTask(formData: FormData) {
    await prisma.task.create({
        data:{
            title: formData.get('title') as string,
        }
    })
}

export async function signInAction( email:string, password:string) {
    const userData = {
        email,
        password
    };


    const users = await  prisma.user.findUnique({
        where: userData
    })

    await createSession(users.id);


    redirect("/dashboard");

}

export async function signUpAction(username:string, email:string, password:string) {

    const userData = {
        username,
        email,
        password
    };

    await prisma.user.create({ data: userData })
    redirect("/dashboard");

  
}


export async function signOutAction() {
    await deleteSession();
    redirect("/login");
  }