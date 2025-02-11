import React from 'react';
import { FaRegCirclePlay, FaTrashCan, FaPenToSquare, FaGear } from "react-icons/fa6";


export default function page() {


  const mockGames = [
    {
      id: 0,
      owner: 'marverick',
      trivia_name: 'buttered keyboard',
      bg_bcolour: 'bg-slate-200',
      text_colour: 'text-cyan-50',
      createdAt: '2021-09-01',
      updatedAt: '2021-09-01',
    }, {
      id: 1,
      owner: 'marverick',
      trivia_name: 'buttered keyboard',
      bg_bcolour: 'bg-slate-200',
      text_colour: 'text-cyan-50',
      createdAt: '2021-09-01',
      updatedAt: '2021-09-01',
    }, {
      id: 2,
      owner: 'marverick',
      trivia_name: 'buttered keyboard',
      bg_bcolour: 'bg-slate-200',
      text_colour: 'text-cyan-50',
      createdAt: '2021-09-01',
      updatedAt: '2021-09-01',
    }
  ]

  const mockFriends = [
    {
      name: 'Jester'
    },
    {
      name: 'Phoenix'
    },
    {
      name: 'Iceman'
    },
    {
      name: 'Stinger'
    }, {
      name: 'Viper'
    }, {
      name: 'Rooster'
    }, {
      name: 'Hangman'
    },


  ]


  return (
    <div className="h-screen flex ">
      <div className="w-4/6 p-3">
        <h2 className="text-2xl	 font-bold">Games</h2>
        <ul className="">{
          mockGames.map((game, key) => {
            return (<li key={key} className={`flex gap-5 rounded p-1 mb-1 ${game.bg_bcolour}`}>
              <span><strong>name:</strong>{game.title}</span>
              <span><strong>updated: :</strong>{game.createdAt}</span>
              <FaRegCirclePlay />
              <FaTrashCan />
              <FaPenToSquare />
              <FaGear />
            </li>)

          })
        } </ul>

      </div>
      <div className="w-2/6">
        <h2 className="text-2xl	 font-bold">Friends</h2>
        <ul className="">{
          mockFriends.map((game, key) => {
            return (<li key={key} className={`flex gap-5 rounded p-1 mb-1 `}>
              <span>{game.name}</span>
            </li>)

          })
        } </ul>
      </div>

    </div>
  );
}
