use yew::prelude::*;
use yew_hooks::UseLocalStorageHandle;

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
    let search = use_state(String::new);
    let filtered_data = use_state(Vec::<Book>::new);

    let onsearch = {
        let search = search.clone();
        Callback::from(move |txt: String| {
            search.set(txt);
        })
    };

    {
        let reading_list = reading_list.clone();
        use_effect_with_deps(
            move |(search, data, filtered_data)| {
                if !search.is_empty() {
                    let search = search.to_lowercase();
                    filtered_data.set(
                        data.iter()
                            .filter(|d| {
                                d.title.to_lowercase().contains(&search)
                                    || d.genre.to_lowercase().contains(&search)
                                    || d.author.name.to_lowercase().contains(&search)
                                    || d.synopsis.to_lowercase().contains(&search)
                                    || d.year.to_string().contains(&search)
                                    || d.pages.to_string().contains(&search)
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
                } else {
                    filtered_data.set(Vec::<Book>::new());
                }
            },
            (
                search,
                data.clone().unwrap_or_default(),
                filtered_data.clone(),
            ),
        );
    }

    html! {
        <>
            <NavBar {onsearch} />
            <main class={classes!("px-6")}>
                // If searching
                if !filtered_data.is_empty() {
                    <LibraryComponent title="" expandable=false books={(*filtered_data).clone()} />
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
