'use client';

import { useState } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`absolute inset-0 w-full h-full border-0 ${className}`}
      />
    );
  }

  return (
    <button
      onClick={() => setIsLoaded(true)}
      className={`absolute inset-0 w-full h-full cursor-pointer border-0 p-0 ${className}`}
      aria-label={`Assistir: ${title}`}
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors duration-200">
        <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-xl transition-colors duration-200">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white ml-1"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
