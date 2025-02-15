import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from '@/components/ui/slide.module.css'


const initialStateSlides = [
    {
        id: 1,
        title: "Slide 1",
        show: true,
    },
    {
        id: 2,
        title: "Slide 2",
        show: true,
    },
    {
        id: 3,
        title: "Slide 3",
        show: true,
    },
];

interface resultType {
    destination: { index: number } | null;
    source: { index: number };
}

export default function Home() {

    const [slides, setSlide] = useState(initialStateSlides);
    useEffect(() => {
        localStorage.setItem('slides', JSON.stringify(slides))
    }, [slides])

    const handleDragEnd = (result: resultType) => {
        console.log(result)
        if (!result.destination) return;
        const startIndex = result.source.index
        const endIndex = result.destination.index
        const copyslides = [...slides]
        const [reorderSlide] = copyslides.splice(startIndex, 1)
        copyslides.splice(endIndex, 0, reorderSlide)
        setSlide(copyslides)
    }


    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <h4>Order Slides</h4>
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
        </div>
    );
};