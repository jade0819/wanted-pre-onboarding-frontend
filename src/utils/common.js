const compareObject = (obj1, obj2) => {
  if (!(obj1 && obj2)) return;

  return Object.entries(obj1).toString() === Object.entries(obj2).toString();
};

export { compareObject };
