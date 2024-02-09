//?------- Show / hide UI Elements between pages -------------------------------------

import { persistentAtom } from "@nanostores/persistent";

const SHOW = persistentAtom('show', null, {

    decode: (value) => {

        return value; 
    }
});

export function setShow(value){

    SHOW.set(value);
}

//? React Hook
export function useShow(){

    return useStore(SHOW);
}

export function listenShow(cb = () => {}){

    SHOW.listen(cb);
}

export function getShow(){

    return SHOW.get();
}