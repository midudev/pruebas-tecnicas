export const removeDragOverClass = (e: React.DragEvent<HTMLElement>, classname: string, remove: string) => {
  const targetElement = e.target as HTMLElement;
  if (targetElement.classList.contains(classname)) {
    targetElement.classList.remove(remove);
  }
}
