
"use client"

import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from '@/components/ui/slide.module.css'

import { useMainStore } from '@/store';



function generateSlides(n: number | undefined) {
    if (!n) return [];
    return Array.from({ length: n }, (_, i) => ({ id: i, title: `slide ${i + 1}` }));
}

interface resultType {
    destination: { index: number } | null;
    source: { index: number };
}

export default function Sortable(props: { length: number | undefined }) {
    const setSlideAction = useMainStore((state) => state.setSlide)


    const [slides, setSlide] = useState(() => generateSlides(props.length));
    useEffect(() => {
        localStorage.setItem('slides', JSON.stringify(slides))
    }, [slides])

    const handleDragEnd = (result: resultType) => {
        if (!result.destination) return;
        const startIndex = result.source.index
        const endIndex = result.destination.index
        const copyslides = [...slides]
        const [reorderSlide] = copyslides.splice(startIndex, 1)
        copyslides.splice(endIndex, 0, reorderSlide)
        setSlide(copyslides)
        console.log(slides)
    }

    function handleClick(event: { target: { id: string } }) {
        setSlideAction(Number(event.target.id));
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="slides">
                {(droppableProvider) => (
                    <ul className="grid grid-cols-1 gap-1"
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                    >
                        {slides.map((slide, index) => (
                            <Draggable
                                index={index}
                                key={slide.id}
                                draggableId={`${slide.id}`}
                            >
                                {(draggableProvider) => (
                                    <li className={styles.slide}
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                        onClick={handleClick}
                                        id={'' + slide.id}
                                    >
                                        {slide.title}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>

    );
};