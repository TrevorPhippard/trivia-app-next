"use client"

import React, { useState } from 'react';
import { BiSolidMinusCircle } from "react-icons/bi";

interface AnswerOption {
    choice: string;
    correct: boolean;
}

interface AnswersProps {
    opts: {
        options: AnswerOption[];
    };
}

export default function Answers({ opts }: AnswersProps) {

    const [optData, setData] = useState(opts);

    /** ----------------------------------------------------------------
     * add & remove possible answers
     * ---------------------------------------------------------------- */

    const addChoice = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setData({ options: [...optData.options, { choice: '', correct: false }] });
    };

    const removeChoice = (index: number) => {
        const newOptions = optData.options.filter((_, i) => i !== index);
        setData({ options: newOptions });
    };

    const updateChoice = (index: number, value: string) => {
        const newOptions = [...optData.options];
        newOptions[index].choice = value;
        setData({ options: newOptions });
    };

    const updateCheck = (index: number, checked: boolean) => {
        const newOptions = [...optData.options];
        newOptions[index].correct = checked;
        setData({ options: newOptions });
    };

    return (
        <>
            {optData.options.map((input, k) => (
                <div className="flex gap-2 mb-6 items-center" key={k}>
                    <span>{k + 1})</span>
                    <textarea
                        className='rounded-md border border-input p-2 flex-grow'
                        placeholder="option"
                        id={`opt_${k}`}
                        name={`opt_${k}`}
                        value={input.choice}
                        onChange={(e) => updateChoice(k, e.target.value)}
                    />
                    <input
                        className='rounded-md border border-input p-2'
                        type="checkbox"
                        id={`check_${k}`}
                        name={`check_${k}`}
                        checked={input.correct}
                        onChange={(e) => updateCheck(k, e.target.checked)}
                    />
                    <label htmlFor={`check_${k}`}>Correct</label>
                    <br />
                    <BiSolidMinusCircle size={20} className="cursor-pointer text-red-500 hover:text-red-800" onClick={() => removeChoice(k)} />
                </div>
            ))}
            <button className="border-2 p-2 hover:bg-black hover:text-cyan-50" onClick={addChoice}>Add fields</button>
        </>
    );
}
