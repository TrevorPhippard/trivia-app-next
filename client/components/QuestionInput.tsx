// QuestionInput.tsx
import React from 'react';

const QuestionInput = ({ register, errors }) => (
    <div>
        <label htmlFor="question">Question</label>
        <textarea
            className="border-2 w-full p-1"
            placeholder="enter text here"
            {...register('question', {
                required: {
                    value: true,
                    message: 'Question required'
                }
            })}
        />
        <p className="text-red-500">{errors.question?.message}</p>
    </div>
);

export default QuestionInput;