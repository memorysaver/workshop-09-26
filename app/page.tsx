"use client";

import { useState } from 'react';
import PromptInput from '@/components/PromptInput';
import GeneratedImageDisplay from '@/components/GeneratedImageDisplay';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      setError('Prompt cannot be empty');
      return;
    }

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-16 bg-background text-foreground">
      <div className="w-full max-w-2xl p-6 border border-primary bg-card rounded-md shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-primary">Gemini Image Generator</h1>
        <PromptInput
          value={prompt}
          onChange={setPrompt}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <GeneratedImageDisplay
          imageUrl={imageUrl}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </main>
  );
}
