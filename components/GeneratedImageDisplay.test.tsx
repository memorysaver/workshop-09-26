import React from 'react';
import { render, screen } from '@testing-library/react';
import GeneratedImageDisplay from './GeneratedImageDisplay';
import Image from 'next/image';

// Mock next/image to avoid layout warnings in tests
jest.mock('next/image', () => {
  const MockImage = ({ src, alt, ...props }: { src: string; alt: string; } & React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />;
  };
  MockImage.displayName = 'MockImage';
  return MockImage;
});

describe('GeneratedImageDisplay', () => {
  test('renders placeholder text when no image, not loading, and no error', () => {
    render(<GeneratedImageDisplay imageUrl={null} isLoading={false} error={null} />);
    expect(screen.getByText('Your generated image will appear here.')).toBeInTheDocument();
  });

  test('renders loading state when isLoading is true', () => {
    render(<GeneratedImageDisplay imageUrl={null} isLoading={true} error={null} />);
    expect(screen.getByText('Generating image...')).toBeInTheDocument();
  });

  test('renders error message when error is present', () => {
    const errorMessage = 'Failed to load image';
    render(<GeneratedImageDisplay imageUrl={null} isLoading={false} error={errorMessage} />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test('renders image when imageUrl is provided', () => {
    const testImageUrl = 'https://example.com/test.jpg';
    render(<GeneratedImageDisplay imageUrl={testImageUrl} isLoading={false} error={null} />);
    const image = screen.getByAltText('Generated Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', testImageUrl);
  });

  test('does not render image when loading, even if imageUrl is present', () => {
    const testImageUrl = 'https://example.com/test.jpg';
    render(<GeneratedImageDisplay imageUrl={testImageUrl} isLoading={true} error={null} />);
    expect(screen.getByText('Generating image...')).toBeInTheDocument();
    expect(screen.queryByAltText('Generated Image')).not.toBeInTheDocument();
  });

  test('does not render image when error is present, even if imageUrl is present', () => {
    const testImageUrl = 'https://example.com/test.jpg';
    const errorMessage = 'Failed to load image';
    render(<GeneratedImageDisplay imageUrl={testImageUrl} isLoading={false} error={errorMessage} />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    expect(screen.queryByAltText('Generated Image')).not.toBeInTheDocument();
  });
});
