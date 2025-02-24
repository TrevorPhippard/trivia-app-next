// AnswersList.tsx
import React from 'react';
import AnswerInput from './AnswerInput';


const AnswersList = function ({ fields, register, errors, append, remove }) {
    return (
        <div>
            <h2 className="text-1xl font-bold">Choices (max:4)</h2>
            <div className="my-3">
                {fields.length && fields.map((field, index) => (
                    <AnswerInput
                        key={field.id}
                        field={field}
                        index={index}
                        register={register}
                        errors={errors}
                        remove={remove}
                    />
                ))}
                <button
                    type="button"
                    className="custom-button"
                    disabled={fields.length > 3}
                    onClick={() => append({ postId: fields.length.toString(), text: "" })}
                >
                    Append
                </button>
            </div>
        </div>
    );
};


export default AnswersList;