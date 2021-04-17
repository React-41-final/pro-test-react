const getTestData = (state) => {
  console.log(state);

  return state.tests.test;
};

const getTestType = (state) => {
  console.log(state);

  return state.tests.type;
};

export { getTestData, getTestType };
