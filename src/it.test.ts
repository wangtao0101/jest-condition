
describe('test condition', () => {
  it.condition(true)('test condition', async () => {
  });

  it.condition(true).skip('test condition skip', async () => {
  });

  it.condition(false).skip('test condition false', async () => {
  });
});
