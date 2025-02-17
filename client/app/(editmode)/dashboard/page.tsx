import React from 'react';
import { FaRegCirclePlay, FaTrashCan, FaPenToSquare, FaGear } from "react-icons/fa6";
import Link from 'next/link';
import prisma from '@/lib/db';
import Image from 'next/image';
import { fetchGameDate } from '@/app/_actions/form'

interface gameData {
    id: number,
    title: string,
    game_id: string,
    bg_img: string,
    text_colour: string,
    sliderTime: number,
    userAcctId: string,
    createdAt: Date,
    updatedAt: Date,
    owner?: string,
    trivia_name?: string,
}


export default async function Page() {

    function topper(game: gameData) {
        if (game.bg_img) {
            /** config to use <Image/> */
            return <img className="object-cover w-full rounded-t-lg max-h-32" src='https://flowbite.com/docs/images/blog/image-4.jpg' alt={game.title} layout="responsive" width={500} height={128} />
        } else {
            return <div className={`w-full rounded-t-lg h-32 bg-slate-300`}></div>
        }
    }

    const gameData = await fetchGameDate();

    // const gameData = [] //await prisma.trivia.findMany()

    return (
        <div className="flex  mx-auto ">
            <div className="p-3 gap-4">
                <h2 className="text-2xl	 font-bold">Games</h2>
                <ul className="flex flex-wrap gap-5 p-5 justify-center">{
                    gameData.map((game, key) => {
                        return (<div key={key} className="w-full sm:w-auto lg:m-2 transition-shadow h-fit hover:shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                            {topper(game)}
                            <div className="p-5  ">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold ">{game.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{game.createdAt.toDateString()}</p>
                                </div>
                                <div className="flex  gap-3 align-right">
                                    <Link className='hover:text-emerald-400 text-xl' href={`/game/${game.game_id}`}><FaRegCirclePlay /></Link>
                                    <Link className='hover:text-emerald-400 text-xl' href={`/editor/${game.game_id}`}><FaPenToSquare /></Link>
                                    <Link className='hover:text-emerald-400 text-xl' href={`/settings/${game.game_id}`}><FaGear /></Link>
                                    <Link className='hover:text-emerald-400 text-xl' href={`/delete/${game.game_id}`}><FaTrashCan /></Link>
                                </div>
                            </div>

                        </div>)
                    })
                } </ul>

            </div>

        </div>

    );
}
