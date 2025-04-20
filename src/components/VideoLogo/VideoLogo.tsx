import React, { useState, useEffect, useRef } from 'react';
import { useFrameAnimation } from './useFrameAnimation';
import './styles.css';

const VideoLogo = () => {
  const [isError, setIsError] = useState(false);
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);
  const errorCountRef = useRef(0);
  const { frameUrl, isLoaded, loadedFrames, totalFrames, hasFrames, isFullyLoaded } = useFrameAnimation(71); // Updated to 71 frames

  useEffect(() => {
    if (isLoaded || loadedFrames > 0) {
      setHasAttemptedLoad(true);
    }
  }, [isLoaded, loadedFrames]);

  const handleImageError = () => {
    errorCountRef.current += 1;
    if (errorCountRef.current >= 3) {
      setIsError(true);
    }
  };

  const handleImageLoad = () => {
    errorCountRef.current = 0;
  };

  if (!hasAttemptedLoad || (!isFullyLoaded && !isError)) {
    return (
      <div className="video-logo-container">
        <div className="video-wrapper">
          <img 
            src="/images/logo.png"
            alt="Ask Devi"
            className="video-element opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          </div>
          {loadedFrames > 0 && (
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-purple-900/50 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full transition-all duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500"
                  style={{ width: `${(loadedFrames / totalFrames) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isError || !hasFrames) {
    return (
      <div className="video-logo-container">
        <div className="video-wrapper">
          <img 
            src="/images/logo.png"
            alt="Ask Devi"
            className="video-element animate-float"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="video-logo-container">
      <div className="video-wrapper">
        <img 
          key={frameUrl}
          src={frameUrl}
          alt="Ask Devi"
          className="video-element"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ 
            willChange: 'transform',
            imageRendering: 'high-quality'
          }}
        />
      </div>
    </div>
  );
};

export default VideoLogo;