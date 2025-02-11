import React from 'react';

export default function VideoBackground() {
    return (
        <div className="absolute inset-0 w-full overflow-hidden -z-10 rounded-lg">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full opacity-70"
            >
                <source
                    src="https://video.motionplaces.com/motionplaces.com-0031-c021.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-100"></div>
        </div>
    );
}
