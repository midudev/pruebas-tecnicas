export const addDragOverClass = (e: React.DragEvent<HTMLElement>, classname: string, add: string) => {
  const targetElement = e.target as HTMLElement;
  if (targetElement.classList.contains(classname)) {
    targetElement.classList.add(add);
  }
};
