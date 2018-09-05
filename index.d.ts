/// <reference types="jest" />

import "jest";

declare global {
  namespace jest {
    interface It {
      condition: (condition: boolean) => It;
    }

    interface Describe {
      condition: (condition: boolean) => Describe;
    }
  }
}
