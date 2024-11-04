const normalizeWord = (name) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "_");
};

export default normalizeWord;