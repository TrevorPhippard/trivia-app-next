import React, { useState } from 'react';
import { BiSolidMinusCircle } from "react-icons/bi";

export default function QuestionCreator() {
    const [questionText, setQuestionText] = useState('');
    const [data, setData] = useState({ options: [{ choice: '', correct: false }] });

    const updateQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestionText(e.target.value);
    };

    const updateChoice = (index: number, value: string) => {
        const newOptions = [...data.options];
        newOptions[index].choice = value;
        setData({ options: newOptions });
    };

    const updateCheck = (index: number, checked: boolean) => {
        const newOptions = [...data.options];
        newOptions[index].correct = checked;
        setData({ options: newOptions });
    };

    const addChoice = () => {
        setData({ options: [...data.options, { choice: '', correct: false }] });
    };

    const removeChoice = (index: number) => {
        const newOptions = data.options.filter((_, i) => i !== index);
        setData({ options: newOptions });
    };

    return (
        <div className='flex flex-col gap-6'>
            <h4 className='text-2xl font-bold flex gap-2'>Create Question</h4>
            <section>
                <label htmlFor="question">Type: </label>
                <select name="type" id="type" disabled>
                    <option value="Multiple">Multiple Choice</option>
                </select>
                <hr />
            </section>
            <section>
                <label htmlFor="question">Question: </label>
                <textarea
                    className='rounded-md border border-input p-2 h-16 w-full'
                    value={questionText}
                    name="question"
                    rows={4}
                    placeholder="write question here"
                    onChange={updateQuestion}
                />
            </section>
            <section className="form">
                <p>Answer:</p>
                {data.options.map((input, k) => (
                    <div className="flex gap-2 mb-6 items-center" key={k}>
                        <span>{k + 1})</span>
                        <textarea
                            className='rounded-md border border-input p-2 flex-grow'
                            placeholder="option"
                            id={`opt_${k}`}
                            value={input.choice}
                            onChange={(e) => updateChoice(k, e.target.value)}
                        />
                        <input
                            className='rounded-md border border-input p-2'
                            type="checkbox"
                            id={`check_${k}`}
                            checked={input.correct}
                            onChange={(e) => updateCheck(k, e.target.checked)}
                        />
                        <label htmlFor={`check_${k}`}>Correct</label>
                        <br />
                        <BiSolidMinusCircle className="cursor-pointer text-red-500 hover:text-red-800" onClick={() => removeChoice(k)} />

                    </div>
                ))}
            </section>

            <button className="custom-button" onClick={addChoice}>Add fields</button>
        </div>
    );
}
