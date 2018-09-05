// @ts-ignore
const originalIt = global.it;
// @ts-ignore
const originalDescribe = global.describe;

// @ts-ignore
global.it.condition = function(cd: boolean) {
  if (cd) {
    return originalIt;
  }
  return {
    only: originalIt.only,
    skip: originalIt.skip,
  };
};

// @ts-ignore
global.describe.condition = function(cd: boolean) {
  if (cd) {
    return originalDescribe;
  }
  return {
    only: originalDescribe.only,
    skip: originalDescribe.skip,
  };
};
