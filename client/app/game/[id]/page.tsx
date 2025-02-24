"use client";

import React, { useEffect, useState } from 'react';
import { useMainStore } from '@/store';

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [gameId, setGameId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setGameId(resolvedParams.id);
    };
    fetchData();
  }, [params]);
  const count = useMainStore((state) => state.count)
  const increment = useMainStore((state) => state.increment)


  return (
    <div className="flex h-screen">
      <button onClick={increment}>+</button>
      {count}
      <h1 className="m-auto text-5xl">game: {gameId}</h1>
    </div>
  );
}
