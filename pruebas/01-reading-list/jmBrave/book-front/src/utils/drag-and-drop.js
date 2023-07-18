export function moveAndReorder(book, list, startIndex) {
    const newList = Array.from(list)
    newList.splice(startIndex, 0, book)
    return newList
}

export function reorder(list, startIndex, endIndex) {
    const newList = Array.from(list)
    const [removed] = newList.splice(startIndex, 1)
    newList.splice(endIndex, 0, removed)
    return newList
}

export function isSameList(sourceId, destinationId) {
    return sourceId === destinationId
}
