"use client"

import React from 'react'
import { usePathname } from 'next/navigation'


export default function NotFound() {
    const pathname = usePathname();
    const gameId = pathname.split('/')[1]
    return (
        <div>
            <h2>{gameId} Not Found</h2>
            <p>Could not find requested resource</p>
        </div>
    )
}
