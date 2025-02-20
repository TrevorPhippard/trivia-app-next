import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

import { Schema, schema, defaultValues } from '@/app/_schemas/question'
import { zodResolver } from '@hookform/resolvers/zod';

export default function EditTab() {

    const { register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues: defaultValues
    });

    const { fields } = useFieldArray({
        name: 'number',
        control
    })


    // export const schema = z.object({
    //     question:z.string({message: 'Question is required'}).min(5,'Name should have at least 5 characters'),
    //     bg_img: z.string().trim().url('Link must be valud URL'),
    //     answer: z.array(z.string().trim()),
    // });

    // export type Schema = z.infer<typeof schema>

    // export const defaultValues:Schema = {
    //     question:"",
    //     bg_img:"",
    //     answer:["",""],
    // }


    function onSubmit(data: FormData) {
        console.log("submit", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* -------------------- Question -------------------- */}

            <label htmlFor='question'>question</label>
            <textarea
                className='border-2'
                placeholder='question'
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
                className='border-2'
                placeholder='background image'
                {...register('bg_img', {
                    required: {
                        value: true,
                        message: 'background image required'
                    }
                })}
            />
            <p className='text-red-500'>{errors.bg_img?.message}</p>



            {/* -------------------- Answers -------------------- */}

            <label htmlFor='answers'>answers</label>
            <div>{
                fields.map((field, index) => {
                    <textarea
                        key={field.id}
                        className='border-2'
                        placeholder='answers'
                        {...register(`answers.${index}.number`, {
                            required: {
                                value: true,
                                message: 'answers required'
                            }
                        })}
                    />
                })
            }</div>

            <p className='text-red-500'>{errors.answer?.message}</p>


            <button className='custom-button'>Submit</button>

        </form>
    )
}
