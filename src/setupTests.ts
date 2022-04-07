// @ts-nocheck

const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key:string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key: string) {
      delete store[key];
    },
  };
})();

global.localStorage = localStorageMock;
