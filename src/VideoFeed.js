import React from 'react';

export default function VideoFeed({src}) {
  return (
    <video src={src} controls autoPlay>
      Your browser does not support the video tag.
    </video>
  );
}