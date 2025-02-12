import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from '@/components/ui/test.module.css'

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
export default function Home() {

    const [slides, setSlide] = useState(initialStateSlides);
    useEffect(() => {
        localStorage.setItem('slides', JSON.stringify(slides))
    }, [slides])
    const handleDragEnd = (result) => {
        console.log(result)
        if (!result.destination) return;
        const startIndex = result.source.index
        const endIndex = result.destination.index
        const copyslides = [...slides]
        const [reorderTodo] = copyslides.splice(startIndex, 1)
        copyslides.splice(endIndex, 0, reorderTodo)
        setSlide(copyslides)
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <h1>Slide Organizer</h1>
                <Droppable droppableId="slides">
                    {(droppableProvider) => (
                        <ul className="grid grid-cols-1 gap-1"
                            ref={droppableProvider.innerRef}
                            {...droppableProvider.droppableProps}
                        >
                            {slides.map((todo, index) => (
                                <Draggable
                                    index={index}
                                    key={todo.id}
                                    draggableId={`${todo.id}`}
                                >
                                    {(draggableProvider) => (
                                        <li className={styles.slide}
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.draggableProps}
                                            {...draggableProvider.dragHandleProps}
                                        >
                                            {todo.title}
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