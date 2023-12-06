use yew::prelude::*;
use yew_hooks::{use_local_storage, UseLocalStorageHandle};

use crate::models::Book;

#[derive(Properties, Debug, PartialEq)]
pub struct ReadingListProviderProps {
    #[prop_or_default]
    pub children: Children,
}

#[function_component]
pub fn ReadingListProvider(props: &ReadingListProviderProps) -> Html {
    let reading_list = use_local_storage::<Vec<Book>>("saved_books".to_string());

    {
        let reading_list = reading_list.clone();
        use_effect(move || {
            if reading_list.is_none() {
                reading_list.set(Vec::<Book>::new())
            }
        });
    }

    html! {
        <ContextProvider<UseLocalStorageHandle<Vec<Book>>> context={reading_list}>
        {props.children.clone()}
        </ContextProvider<UseLocalStorageHandle<Vec<Book>>>>
    }
}
