import React from 'react';
import Image from 'next/image';

interface GeneratedImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const GeneratedImageDisplay: React.FC<GeneratedImageDisplayProps> = ({
  imageUrl,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 border border-primary bg-card rounded-md">
        <p className="text-muted-foreground">Generating image...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 border border-destructive bg-destructive-foreground rounded-md">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="relative w-full h-64 border border-primary bg-card rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt="Generated Image"
          layout="fill"
          objectFit="contain"
          className="rounded-md"
        />
      </div>
    );
  }

  return (
          <div className="flex items-center justify-center h-64 border border-primary bg-card rounded-md">
            <p className="text-muted-foreground">Your generated image will appear here.</p>
          </div>  );
};

export default GeneratedImageDisplay;
