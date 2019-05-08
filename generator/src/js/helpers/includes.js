export default (item, stringOrArray) => {
  console.log('includes', item, stringOrArray);
  if ((typeof stringOrArray === 'string') || Array.isArray(stringOrArray)) {
    return stringOrArray.includes(item);
  };

  return false;
};
