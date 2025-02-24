// ImageInput.tsx
import React from 'react';
import { useMainStore } from '@/store';

function ImageInput({ register, errors }) {
    const s = useMainStore((state) => state.slideSelect)
    const qd = useMainStore((state) => state.quizData)
    return (
        <div>
            <label htmlFor="bg_img">Background Image:: {qd.Question[s].bg_img}</label>
            <textarea
                className="border-2 w-full p-1"
                placeholder="enter image url"
                {...register('bg_img', {
                    required: {
                        value: true,
                        message: 'Background image required'
                    }
                })}
            />
            <p className="text-red-500">{errors.bg_img?.message}</p>
        </div>
    );
}

export default ImageInput;