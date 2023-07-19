export const getLocalStorageValue = (key: 'bookmarks'): ReturnType<any> => {
    try {
        const stringifyLocalValue = globalThis?.window?.localStorage?.getItem(key) || 'null'
        const value = globalThis?.window?.JSON?.parse(stringifyLocalValue)
        return value
    } catch (error) {
        console.error(error)
    }
}

export const setLocalStorageValue = (key: 'bookmarks', value: unknown) => {
    globalThis?.window?.localStorage?.setItem(key, globalThis?.window?.JSON.stringify(value))
}