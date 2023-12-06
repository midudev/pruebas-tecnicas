use std::rc::Rc;

use yew::prelude::*;
use yew_hooks::{use_async_with_options, UseAsyncOptions, UseLocalStorageHandle};

use crate::{errors::Error, layout::check_book_saved, models::Book, services::get_data};

pub type DataContext = Rc<(bool, Option<Error>, Option<Vec<Book>>)>;

#[derive(Properties, Debug, PartialEq)]
pub struct DataProviderProps {
    #[prop_or_default]
    pub children: Children,
}

#[function_component]
pub fn DataProvider(props: &DataProviderProps) -> Html {
    let load_data = use_async_with_options(
        async move { get_data().await },
        UseAsyncOptions::enable_auto(),
    );
    let reading_list = use_context::<UseLocalStorageHandle<Vec<Book>>>().unwrap();

    let data = use_memo(
        |data| {
            (
                data.loading,
                data.error.clone(),
                data.data.as_ref().map(|d| {
                    d.library
                        .iter()
                        .map(|l| Book {
                            saved: check_book_saved(
                                reading_list.as_ref().unwrap_or(&Vec::<Book>::new()),
                                &l.book,
                            ),
                            ..l.book.clone()
                        })
                        .collect()
                }),
            )
        },
        load_data,
    );

    html! {
        <ContextProvider<DataContext> context={data}>
            {props.children.clone()}
        </ContextProvider<DataContext>>
    }
}
