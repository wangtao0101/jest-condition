describe.condition(true)('describe condition', () => {
  it('describe condition', async () => {
  });
});

describe.condition(false).skip('describe condition skip', () => {
  it('describe condition skip', async () => {
  });
});

describe.condition(true).skip('describe condition skip', () => {
  it('describe condition skip', async () => {
  });
});
