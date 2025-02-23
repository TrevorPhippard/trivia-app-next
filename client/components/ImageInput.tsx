// ImageInput.tsx
import React from 'react';

const ImageInput = ({ register, errors }) => (
    <div>
        <label htmlFor="bg_img">Background Image</label>
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

export default ImageInput;