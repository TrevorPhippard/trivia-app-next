import React from 'react'
import SearchBar from "@/components/SearchBar";


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
        <div className="mx-auto w-full flex flex-col">
            <SearchBar />
            <ul className="w-full mx-auto overflow-y-scroll p-2 border border-gray-200 rounded-lg">{
                mockFriends.map((game, key) => {
                    return (<li key={key} className={`flex gap-5 rounded p-1 mb-1 `}>
                        <span className='avatar bg-red-500'></span>  <span>{game.name}</span>
                    </li>)
                })
            } </ul>
        </div>
    )
}
