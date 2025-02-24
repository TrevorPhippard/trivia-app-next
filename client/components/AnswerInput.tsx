// AnswerInput.tsx
import React from 'react';
import { useMainStore } from '@/store';

const AnswerInput = function ({ field, index, register, errors, remove }) {
    const errorForField = errors?.answer?.[index]?.text;
    const s = useMainStore((state) => state.slideSelect)
    const qd = useMainStore((state) => state.quizData)
    return (
        <div className="flex">
            <div className="p-2 h-full flex">
                <p className="text-center">{index + 1})</p>
            </div>
            <div className="w-full">
                {qd.Question[s].answer}
                <input
                    {...register(`answer.${index}.text`)}
                    placeholder="Enter a text.."
                    defaultValue={field.text}
                    className="border p-2 w-full border-gray-300"
                />
                <p className="text-red-500">{errorForField?.message ?? <>&nbsp;</>}</p>
            </div>
            <div className="h-full flex mx-2">
                <button
                    type="button"
                    className="custom-button"
                    onClick={() => remove(index)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AnswerInput;