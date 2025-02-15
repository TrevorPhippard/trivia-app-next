import VideoBackground from '@/components/ui/VideoBackground';
import TriviaLogo from '@/components/ui/TriviaLogo';
import AuthTabs from '@/components/AuthTabs';
import React from 'react';

export default function Page() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen">
      <TriviaLogo />
      <AuthTabs />
      <VideoBackground />
    </div>
  );
}


