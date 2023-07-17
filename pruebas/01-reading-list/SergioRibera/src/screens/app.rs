use yew::prelude::*;
use yew_hooks::{use_async_with_options, use_local_storage, UseAsyncOptions};

use crate::{
    components::NavBar,
    layout::{ErrorType, LayoutError, Library as LibraryComponent, SuggestedBook},
    models::Book,
    services::get_data,
};

fn check_book_saved(books: &Vec<Book>, b: &Book) -> bool {
    books
        .iter()
        .find(|r| r.title == b.title && b.year == r.year && b.author.name == r.author.name)
        .is_some()
}

#[function_component(App)]
pub fn app() -> Html {
    let load_data = use_async_with_options(
        async move { get_data().await },
        UseAsyncOptions::enable_auto(),
    );

    let search = use_state(String::new);
    let data = use_state(Vec::<Book>::new);
    let reading_list = use_local_storage::<Vec<Book>>("saved_books".to_string());
    let filtered_data = use_state(Vec::<Book>::new);

    let onsearch = {
        let search = search.clone();
        Callback::from(move |txt: String| {
            search.set(txt);
        })
    };

    {
        let reading_list = reading_list.clone();
        use_effect(move || {
            if reading_list.is_none() {
                reading_list.set(Vec::<Book>::new())
            }
        });
    }

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
            (search, data.clone(), filtered_data.clone()),
        );
    }

    {
        let data = data.clone();
        use_effect_with_deps(
            move |(d, reading_list)| {
                if let Some(d) = &d.data {
                    data.set(
                        d.library
                            .iter()
                            .map(|l| Book {
                                saved: check_book_saved(
                                    reading_list.as_ref().unwrap_or(&Vec::<Book>::new()),
                                    &l.book,
                                ),
                                ..l.book.clone()
                            })
                            .collect(),
                    );
                }
            },
            (load_data.clone(), reading_list.clone()),
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
                    <SuggestedBook books={(*data).clone()} />
                    // if not have saved books
                    if reading_list.is_none() || reading_list.as_ref().is_some_and(|r| r.is_empty()) {
                        <LayoutError title="Tu Lista de Lectura" errtype={ErrorType::EmptyReadingList} />
                    // Show saved books
                    } else {
                        <LibraryComponent
                            title="Tu Lista de Lectura"
                            readinglist={reading_list.clone()}
                            books={((*reading_list).clone()).unwrap_or_default().iter().map(|b| Book { saved: true, ..b.clone() }).collect::<Vec<Book>>()}
                        />
                    }
                    if load_data.loading {
                        <LayoutError errtype={ErrorType::LoadingBooks} title="Nuestros Libros"/>
                    } else if load_data.error.is_some() || data.is_empty() {
                        <LayoutError errtype={ErrorType::Empty} title="Nuestros Libros"/>
                    } else {
                        <LibraryComponent readinglist={reading_list} books={(*data).clone()} title="Nuestros Libros" />
                    }
                }
            </main>
        </>
    }
}
