use std::collections::HashSet;

use yew::prelude::*;
use yew_hooks::{use_set, UseLocalStorageHandle};

use crate::{
    components::NavBar,
    context::DataContext,
    layout::{
        check_book_saved, ErrorType, LayoutError, Library as LibraryComponent, SuggestedBook,
    },
    models::Book,
};

#[function_component(App)]
pub fn app() -> Html {
    let data_context = use_context::<DataContext>().unwrap();
    let (data_loading, data_error, data) = (
        data_context.0,
        data_context.1.clone(),
        data_context.2.clone(),
    );
    let reading_list = use_context::<UseLocalStorageHandle<Vec<Book>>>().unwrap();
    let search = use_state(String::new); // store search string from input search
    let genres = use_set(HashSet::<String>::new()); // store genres of books
    let pages = use_set(HashSet::<String>::new()); // store pages of books
    let filter = use_state(Vec::<String>::new); // state for filter by any param
    let filter_pages = use_state(Vec::<i64>::new); // state for filter by pages book.page >= filter
    let filtered_data = use_state(Vec::<Book>::new); // store filtered books

    let onsearch = {
        let search = search.clone();
        Callback::from(move |txt: String| {
            search.set(txt);
        })
    };

    let onfiltergenre = {
        let filter = filter.clone();
        Callback::from(move |t: Vec<String>| {
            filter.set(t.iter().map(|t| t.to_lowercase()).collect());
        })
    };

    let onfilterpages = {
        let filter_pages = filter_pages.clone();
        Callback::from(move |t: Vec<String>| {
            filter_pages.set(t.iter().flat_map(|t| t.parse::<i64>().ok()).collect());
        })
    };

    {
        let genres = genres.clone();
        let pages = pages.clone();
        use_effect_with_deps(
            move |data| {
                if data.is_empty() {
                    return;
                }
                if genres.current().is_empty() {
                    genres.set(data.iter().map(|b| b.genre.clone()).collect());
                }
                if pages.current().is_empty() {
                    let p = data
                        .iter()
                        .map(|b| b.pages.to_string())
                        .collect::<Vec<String>>();
                    pages.set(p.iter().cloned().collect());
                }
            },
            data.clone().unwrap_or_default(),
        );
    }

    {
        let reading_list = reading_list.clone();
        use_effect_with_deps(
            move |(search, filter, filter_pages, data, filtered_data)| {
                let search = search.to_lowercase();
                filtered_data.set(
                    data.iter()
                        .filter(|d| {
                            (search.is_empty()
                                || (d.title.to_lowercase().contains(&search)
                                    || d.author.name.to_lowercase().contains(&search)
                                    || d.synopsis.to_lowercase().contains(&search)))
                                && (filter.is_empty() || filter.contains(&d.genre.to_lowercase()))
                                && (filter_pages.is_empty()
                                    || filter_pages.iter().any(|p| d.pages >= *p))
                        })
                        .map(|b| Book {
                            saved: check_book_saved(
                                reading_list.as_ref().unwrap_or(&Vec::<Book>::new()),
                                b,
                            ),
                            ..b.clone()
                        })
                        .collect::<Vec<Book>>(),
                );
            },
            (
                search.clone(),
                filter.clone(),
                filter_pages.clone(),
                data.clone().unwrap_or_default(),
                filtered_data.clone(),
            ),
        );
    }

    html! {
        <>
            <NavBar
                {onsearch}
                {onfiltergenre}
                {onfilterpages}
                genres={genres.current().clone().into_iter().collect::<Vec<String>>()}
                pages={pages.current().clone().into_iter().collect::<Vec<String>>()}
            />
            <main class={classes!("px-6")}>
                // If searching
                if !search.is_empty() || !filter.is_empty() || !filter_pages.is_empty() {
                    <LibraryComponent title="" filter=false expandable=false books={(*filtered_data).clone()} />
                } else {
                    <SuggestedBook books={data.clone().unwrap_or_default()} />
                    // if not have saved books
                    if reading_list.is_none() || reading_list.as_ref().is_some_and(|r| r.is_empty()) {
                        <LayoutError title="Tu Lista de Lectura" errtype={ErrorType::EmptyReadingList} />
                    // Show saved books
                    } else {
                        <LibraryComponent
                            title="Tu Lista de Lectura"
                            sortable=true
                            readinglist={reading_list.clone()}
                            books={(reading_list.as_ref()).unwrap().iter().map(|b| Book { saved: true, ..b.clone() }).collect::<Vec<Book>>()}
                        />
                    }
                    if data_loading {
                        <LayoutError errtype={ErrorType::LoadingBooks} title="Nuestros Libros"/>
                    } else if data_error.is_some() || data.clone().is_some_and(|d| d.is_empty()) {
                        <LayoutError errtype={ErrorType::Empty} title="Nuestros Libros"/>
                    } else {
                        <LibraryComponent
                            sortable=true
                            readinglist={reading_list.clone()}
                            books={data.unwrap_or_default()}
                            title="Nuestros Libros"
                        />
                    }
                }
            </main>
        </>
    }
}
