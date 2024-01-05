const areObjectsEqual = (obj1, obj2) => {
  const stringifiedObj1 = JSON.stringify(obj1);
  const stringifiedObj2 = JSON.stringify(obj2);

  return stringifiedObj1 === stringifiedObj2;
};

const firstLetterToUpperCase = (string) => {
  return string
    .split(" ")
    .map(
      (word) => word.split("")[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

const calculateTimeLeft = () => {
  const jo2024 = new Date("2024-07-26");
  const now = new Date();
  const difference = jo2024 - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      secondes: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export { areObjectsEqual, firstLetterToUpperCase, calculateTimeLeft };
