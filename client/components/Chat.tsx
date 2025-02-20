import Messages from '@/components/messages';
import Friends from '@/components/friends';
import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function Chat() {
    return (
        <>
            <li className="p-3 h-3/12">
                <h2 className="custom-header custom-center">Friends Online <FaChevronDown /></h2>
                <Friends />
            </li>
            <li className="p-3 h-3/12">
                <h2 className="custom-header custom-center">Online Chat<FaChevronDown /></h2>
                <Messages />
            </li>
        </>
    )
}
