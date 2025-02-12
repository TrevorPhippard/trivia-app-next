import React from 'react'
import SearchBar from "@/components/SearchBar";
import { FaChevronDown } from "react-icons/fa";


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

export default function Friends() {
    return (
        <div>
            <h2 className="text-2xl font-bold flex gap-2">Friends Online <FaChevronDown />
            </h2>
            <li><SearchBar /></li>
            <ul className="h-50 overflow-y-scroll max-w-sm p-2 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">{
                mockFriends.map((game, key) => {
                    return (<li key={key} className={`flex gap-5 rounded p-1 mb-1 `}>
                        <span className='avatar bg-red-500'></span>  <span>{game.name}</span>
                    </li>)

                })
            } </ul>
        </div>
    )
}
