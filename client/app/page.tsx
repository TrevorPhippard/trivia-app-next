// import { useEffect } from 'react'
import { redirect } from "next/navigation";
import { addTask } from "./_actions/auth";
import prisma from '@/lib/db';

// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001', {
//     withCredentials: true,
//     extraHeaders: {
//         'socket-header': 'socket-value'
//     }
// });


export default async function Home() {

  const isAuth = true;

  if (!isAuth) {
    redirect('/signin')
  } else {
    redirect('/dashboard')
  }




  // const tasks = await prisma.task.findMany()

  // socket.emit('test')

  return <div className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
    <h1 className="text-3xl font-medium">All Tasks:</h1>
    {/* <ul>
      {tasks.map((task) => (<li key={task.id}>{task.title}</li>))}
    </ul> */}

    <form action={addTask} className="space-x-2">
      <input type="text" name="title" className="px-3 py-1 rounded " />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 mt-3 rounded">Add Task</button>
    </form>
    {isAuth && <button className="bg-red-500 text-white px-3 py-1 mt-3 rounded">Sign Out</button>}


  </div>;
}
