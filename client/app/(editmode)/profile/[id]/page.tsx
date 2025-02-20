"use client"

import React, { useEffect, useState } from 'react';

async function fetchProfileId(params: Promise<{ id: number }>) {
  const { id } = await params;
  return id;
}

export default function Page({ params }: {
  params: Promise<{ id: number }>
}) {
  const [profileId, setProfileId] = useState<number | null>(null);

  useEffect(() => {
    fetchProfileId(params).then(setProfileId);
  }, [params]);

  if (profileId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-tpcolor-100 text03xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
        Account: {profileId}
      </h1>
    </div>
  );
}
