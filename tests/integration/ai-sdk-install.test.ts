import packageJson from '../../package.json';

describe('Vercel AI SDK Installation', () => {
  it('should have "ai" in dependencies', () => {
    expect(packageJson.dependencies).toHaveProperty('ai');
  });
});
