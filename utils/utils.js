const areObjectsEqual = (obj1, obj2) => {
  const stringifiedObj1 = JSON.stringify(obj1);
  const stringifiedObj2 = JSON.stringify(obj2);

  return stringifiedObj1 === stringifiedObj2;
};

const toPascalCase = (string) => {
  string
    .split(" ")
    .map(
      (word) => word.split("")[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

export { areObjectsEqual, toPascalCase };
