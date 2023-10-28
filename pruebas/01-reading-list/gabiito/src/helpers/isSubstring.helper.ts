const isSubstring = (str: string, substr: string): boolean => {
  const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const normalizedSubstr = substr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
  return normalizedStr.includes(normalizedSubstr);
}

export default isSubstring;