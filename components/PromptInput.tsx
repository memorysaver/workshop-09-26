import React from 'react';
import { Textarea } from '@/components/retroui/Textarea';
import { Button } from '@/components/retroui/Button';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Textarea
        aria-label="Prompt Input"
        placeholder="Enter your prompt here..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        disabled={isLoading}
      />
      <Button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </div>
  );
};

export default PromptInput;
