"use client"

import React, { useEffect, useState } from 'react';

async function fetchGameSettingsId(params: Promise<{ id: number }>) {
  const { id } = await params;
  return id;
}

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [gameSettingsId, setGameSettingsId] = useState<number | null>(null);

  useEffect(() => {
    fetchGameSettingsId(params).then(setGameSettingsId);
  }, [params]);

  if (gameSettingsId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-tpcolor-100 text03xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
        game settings: {gameSettingsId}
      </h1>
    </div>
  );
}
