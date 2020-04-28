
export const isExist = value => {
  switch(typeof(value)) {
    case 'object':
      return value.length > 0;
    case 'number':
      return value === 0;
    case 'string':
      return value ==='';
    default:
      return false;
  }
}
