import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  const gameId = params.id;
  return (
    <div>
      <h1 className="text-tpcolor-100 text03xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
        game: {gameId}
      </h1>
    </div>
  );
}
