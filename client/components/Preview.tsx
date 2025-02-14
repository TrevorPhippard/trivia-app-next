import React from 'react'

const gameData = {
    id: 0,
    owner: 'marverick',
    trivia_name: 'buttered keyboard',
    game_id: 'a1b2c3d4',
    bg_img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
    text_colour: 'text-cyan-50',
    createdAt: '2021-09-01',
    updatedAt: '2021-09-01',
    slides: [
        {
            slide_rank: 0,
            owner: '',
            trivia_id: '',
            category: '',
            type: 'select',
            question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
            options: ['A', 'B', 'C', 'D'],
            answer: 'A',
            bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            createdAt: 'Date',
            updatedAt: 'Date'
        },
        {
            slide_rank: 1,
            owner: ' ',
            trivia_id: ' ',
            category: ' ',
            type: 'select',
            question: 'lorem ipsum dolor sit amet consectetur adipiscing elit?',
            options: ['A', 'B', 'C', 'D'],
            answer: 'B',
            bgImg: 'https://flowbite.com/docs/images/blog/image-4.jpg',
            createdAt: 'Date',
            updatedAt: 'Date'
        }
    ]
}

export default function Preview() {
    const slideLn = gameData.slides.length
    const slideNum = 0
    const currentSlide = gameData.slides[slideNum]

    const isCorrect = (option: string) => currentSlide.answer === option ? 'bg-green-400' : 'bg-red-400'

    return (
        <div>
            <h3>Slide: {(slideNum + 1) + ' of ' + slideLn}</h3>
            <div className="container p-10" >
                <h2 className='mb-10 text-center text-3xl'>{currentSlide.question}</h2>
                <ul className='gap-2 grid grid-cols-2'>
                    {currentSlide.options.map((option, index) => (
                        <li key={index} className={isCorrect(option) + " p-5"}>
                            {index + 1}) {option}
                        </li>
                    ))}

                </ul>
            </div>
            <footer className='flex gap-2 justify-between'>
                <button className='custom-button'> Rewind</button >
                <button className='custom-button'> Forward</button >
            </footer>
        </div >
    )
}
