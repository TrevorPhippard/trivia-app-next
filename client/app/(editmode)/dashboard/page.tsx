import React from 'react';
import { FaRegCirclePlay, FaTrashCan, FaPenToSquare, FaGear } from "react-icons/fa6";
import Link from 'next/link';


export default function page() {


    const mockGames = [
        {
            id: 0,
            owner: 'marverick',
            trivia_name: 'buttered keyboard',
            game_id: 'a1b2c3d4',
            bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            text_colour: 'text-cyan-50',
            createdAt: '2021-09-01',
            updatedAt: '2021-09-01',
        }, {
            id: 1,
            owner: 'marverick',
            trivia_name: 'buttered keyboard',
            game_id: 'e5f6g7h8',
            bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            text_colour: 'text-cyan-50',
            createdAt: '2021-09-01',
            updatedAt: '2021-09-01',
        }, {
            id: 2,
            owner: 'marverick',
            trivia_name: 'buttered keyboard',
            game_id: 'i9j0k1l2',
            bg_img: '',
            text_colour: 'text-cyan-50',
            createdAt: '2021-09-01',
            updatedAt: '2021-09-01',
        }, {
            id: 3,
            owner: 'marverick',
            trivia_name: 'buttered keyboard',
            game_id: 'i9j0k1l2',
            bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            text_colour: 'text-cyan-50',
            createdAt: '2021-09-01',
            updatedAt: '2021-09-01',
        }, {
            id: 4,
            owner: 'marverick',
            trivia_name: 'buttered keyboard',
            game_id: 'i9j0k1l2',
            bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            text_colour: 'text-cyan-50',
            createdAt: '2021-09-01',
            updatedAt: '2021-09-01',
        }
    ]

    interface gameData {
        id: number,
        owner: string,
        trivia_name: string,
        game_id: string,
        bg_img: string,
        text_colour: string,
        createdAt: string,
        updatedAt: string,
    }


    function topper(game: gameData) {
        if (game.bg_img !== '') {
            return <img className="object-cover w-full rounded-t-lg max-h-32" src={`${game.bg_img}`} />
        } else {
            return <div className={`w-full rounded-t-lg h-32 bg-slate-300`}></div>
        }
    }


    return (
        <div className="flex mx-0 mx-auto ">
            <div className="p-3 h-screen gap-4 h-[90vh] overflow-y-scroll">
                <h2 className="text-2xl	 font-bold">Games</h2>


                <ul className="flex flex-wrap gap-5 p-5">{

                    mockGames.map((game, key) => {
                        return (<div key={key} className="mx-auto lg:m-2 transition-shadow h-fit hover:shadow-lg max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                            {topper(game)}
                            {/* <img className="object-cover w-full rounded-t-lg max-h-32" src={`${game.bg_img}`} /> */}
                            <div className="p-5  ">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold ">{game.trivia_name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{game.createdAt}</p>
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
