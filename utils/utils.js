const areObjectsEqual = (obj1, obj2) => {
  const stringifiedObj1 = JSON.stringify(obj1);
  const stringifiedObj2 = JSON.stringify(obj2);

  return stringifiedObj1 === stringifiedObj2;
};

export { areObjectsEqual };
