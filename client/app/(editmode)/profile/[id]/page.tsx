import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const profileId = params.id;
  return (
    <div>
      <h1 className="text-tpcolor-100 text03xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
        Account: {profileId}
      </h1>
    </div>
  );
}
