export const getBirthday = (b) => {
  let d = new Date (b);
  let output = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + '.';
  return output
}