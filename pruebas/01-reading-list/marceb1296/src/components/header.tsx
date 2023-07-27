import { useAppSelector, useAppDispatch } from "../store";
import { ETheme } from "../interfaces";
import { setTheme } from "../reducer/themeSlice";
import { openBookList } from "../reducer/bookListSlice";
import { SunIcon, MoonIcon, BookIcon } from "../svg";
import "../css/header.scss";


export const Header = () => {
    
    const bookList = useAppSelector(store => store.bookListReducer);
    const theme = useAppSelector(store => store.themeReducer);
    const dispatch = useAppDispatch()
    
    return(
        <nav>
            <div>
                <label className="logo">
                    boo<span>K</span><span>L</span>ist
                </label>
            </div>
            <div>
                <button onClick={
                    () => dispatch(setTheme())
                }>
                    {
                        theme === ETheme.LIGHT
                            ? <MoonIcon />
                            : <SunIcon />
                    }
                </button>
                <button onClick={() => dispatch(openBookList())}>
                    <BookIcon />
                    { bookList.list.length > 0 &&
                        <span>
                            {bookList.list.length}
                        </span>
                    }
                </button>
            </div>
        </nav>
    )
}