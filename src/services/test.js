const createTest = () => {
  let examplePrivateVariable = 0

  return {
    getExamplePrivateVariable: () => {
      return examplePrivateVariable
    },
    setExamplePrivateVariable: (n) => {
      examplePrivateVariable = n
    }
  }
};

const singleton = createTest();
Object.freeze(singleton);

export default singleton;