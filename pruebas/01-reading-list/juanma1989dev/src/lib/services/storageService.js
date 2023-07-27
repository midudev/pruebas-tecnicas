import {KEY_STORAGE_DATA} from '$lib/constants.js'

function storageDataApp(books, filters){
    const allDataApp = { books, filters }
    const dataParse  = JSON.stringify(allDataApp)
    localStorage.setItem(KEY_STORAGE_DATA, dataParse)
}

function getStoreData(){
    const dataParse = localStorage.getItem(KEY_STORAGE_DATA) ?? '{}'
    const data      = JSON.parse(dataParse)
    return data
}

function validateIfExistDataStorage(){
    return localStorage.getItem(KEY_STORAGE_DATA) === null ? false : true
}

export default {
    storageDataApp,
    getStoreData,
    validateIfExistDataStorage
}