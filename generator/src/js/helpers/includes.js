export default (item, stringOrArray) => {
  if ((typeof stringOrArray === 'string') || Array.isArray(stringOrArray)) {
    return stringOrArray.includes(item);
  };

  return false;
};
