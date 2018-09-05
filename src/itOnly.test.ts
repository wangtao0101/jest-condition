describe('test it.only', () => {
  it.condition(true)('test should be skip', async () => {
  });

  it.condition(true).only('test it.only', async () => {
  });
});
