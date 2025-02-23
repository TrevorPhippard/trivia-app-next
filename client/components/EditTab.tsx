import { startTransition, useActionState, useRef } from "react";
import { submitToServerActions } from '@/app/_actions/formSubmit';
import Form from 'next/form'
import { useForm, useFieldArray } from 'react-hook-form'
import { Schema, schema, defaultValues } from '@/app/_schemas/question'
import { zodResolver } from '@hookform/resolvers/zod';



export default function EditTab() {

    const [message, formAction, isPending] = useActionState(submitToServerActions, null);

    const { register, handleSubmit, formState: { errors }, control } = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues: defaultValues
    });

    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormProvider)
        name: "answer", // unique name for your Field Array\
        rules: { maxLength: 4 }

    });

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Form ref={formRef}
            action={formAction}
            onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit(() => {
                    startTransition(() => { formAction(new FormData(formRef.current!)) });
                })(evt);
            }}>

            {/* -------------------- Question -------------------- */}

            <label htmlFor='question'>question</label>
            <textarea
                className='border-2 w-full p-1'
                placeholder='enter text here'
                {...register('question', {
                    required: {
                        value: true,
                        message: 'question required'
                    }
                })}
            />
            <p className='text-red-500'>{errors.question?.message}</p>

            {/* -------------------- Background Image -------------------- */}

            <label htmlFor='bg_img'>background image</label>
            <textarea
                className='border-2 w-full p-1'
                placeholder='enter image url'
                {...register('bg_img', {
                    required: {
                        value: true,
                        message: 'background image required'
                    }
                })}
            />
            <p className='text-red-500'>{errors.bg_img?.message}</p>

            {/* -------------------- Answers -------------------- */}

            <h2 className='text-1xl font-bold'>Choices (max:4)</h2>
            <div className='my-3'>
                {fields.map((field, index) => {
                    const errorForField = errors?.answer?.[index]?.text;
                    return (
                        <div className="flex" key={field.id}>
                            <div className="p-2 h-full flex">
                                <p className="text-center">{index + 1}</p>
                            </div>

                            <div className="w-full">
                                <input
                                    {...register(`answer.${index}.text` as const)}
                                    placeholder="Enter a text.."
                                    defaultValue={field.text}
                                    className="border p-2 w-full border-gray-300"
                                />
                                <p>{errorForField?.message ?? <>&nbsp;</>}</p>
                            </div>

                            <div className=" h-full flex mx-2">
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
                })}
                <button
                    type="button"
                    className="custom-button"
                    disabled={fields.length > 3}
                    onClick={() =>
                        append({
                            postId: fields.length.toString(),
                            text: ""
                        })
                    }
                >
                    Append
                </button>

            </div>


            <button className="custom-button" type="submit">Submit</button>
            <p>{isPending ? "Loading..." : message?.message}</p>
        </Form>
    )
}
