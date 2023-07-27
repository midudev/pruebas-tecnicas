const sortAsc = (list) => {
  const ordered = list.sort((a, b) => {
    let titleA = a.book.title.toLowerCase(),
      titleB = b.book.title.toLowerCase();

    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;

    return 0;
  });

  return ordered;
};

const sortDesc = (list) => {
  const ordered = list.sort((a, b) => {
    let titleA = a.book.title.toLowerCase(),
      titleB = b.book.title.toLowerCase();

    if (titleA > titleB) return -1;
    if (titleA < titleB) return 1;

    return 0;
  });

  return ordered;
};

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export { sortAsc, sortDesc, classNames };
