"use client"

import React, { useState } from 'react';

export default function InputComp({ name, text, placeHolderText }: { name: string, text: string, placeHolderText: string }) {
    const [textState, setText] = useState(text);

    const updateQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <textarea
                className='rounded-md border border-input p-2 h-16 w-full'
                value={textState}
                name={name}
                rows={4}
                placeholder={placeHolderText}
                onChange={updateQuestion}
                required
            />
        </>
    );
}
