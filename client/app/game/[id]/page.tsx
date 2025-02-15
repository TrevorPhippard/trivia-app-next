import React from 'react';
import { useMainStore } from '../../../store';


export default function Page({ params }: { params: { id: string } }) {


  const count = useMainStore((state) => state.count)


  const increment = useMainStore((state) => state.increment)

  const gameId = params.id;

  return (
    <div className="flex h-screen">
      <button onClick={increment}>+</button>
      {count}
      <h1 className=" m-auto text-5xl">game: {gameId}</h1>
    </div>
  );
}
