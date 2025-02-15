import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const gameSettingsId = params.id;
  return (
    <div>
      <h1 className="text-tpcolor-100 text03xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
        game settings: {gameSettingsId}
      </h1>
    </div>
  );
}
