// QuestionInput.tsx
import React from 'react';
import { useMainStore } from '@/store';


function QuestionInput({ register, errors }) {
    const s = useMainStore((state) => state.slideSelect)
    const qd = useMainStore((state) => state.quizData)

    return (<div>
        <label htmlFor="question">Question: {qd.Question[s].question}</label>
        <textarea
            className="border-2 w-full p-1"
            placeholder="enter text here"
            value=''
            {...register('question', {
                required: {
                    value: true,
                    message: 'Question required'
                }
            })}
        />
        <p className="text-red-500">{errors.question?.message}</p>
    </div>)
};

export default QuestionInput;