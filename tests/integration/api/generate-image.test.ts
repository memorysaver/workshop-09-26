import { test, expect } from '@jest/globals';
import { createClient } from 'next-rest-client';

const client = createClient({
  baseUrl: 'http://localhost:3000/api',
});

describe('POST /api/generate-image', () => {
  test('should return 200 with imageUrl for valid prompt', async () => {
    const response = await client.post('/generate-image', {
      prompt: 'a cat sitting on a roof',
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('imageUrl');
    expect(typeof response.data.imageUrl).toBe('string');
    expect(response.data.imageUrl).toMatch(/^https?://./);
  });

  test('should return 400 for empty prompt', async () => {
    const response = await client.post('/generate-image', {
      prompt: '',
    });

    expect(response.status).toBe(400);
  });
});
