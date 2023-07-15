import { useEffect, useState } from "react";


function ReadingList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        
        console.log('reading books');

    }, []);

    return (<>
    
        <h1>This is a react component</h1>
    
    </>);
}

export default ReadingList;