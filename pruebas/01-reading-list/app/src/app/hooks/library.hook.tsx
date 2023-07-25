const libraryHook = () => {

    const list = require('../JSON/library.json').library.map( (x:any) => x.book );

    console.log(list);

}

export default libraryHook ;