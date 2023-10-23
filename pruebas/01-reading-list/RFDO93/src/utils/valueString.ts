export function compareStringsWithoutSpecials(str1:string, str2:string) {
  const removeSpecials = (str:string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const str1Clear = removeSpecials(str1).toLowerCase();
  const str2Clear = removeSpecials(str2).toLowerCase();
  
  return str1Clear.includes(str2Clear);
}