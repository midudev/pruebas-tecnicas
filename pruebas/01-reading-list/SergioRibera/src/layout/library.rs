use yew::prelude::*;
use yew_icons::IconId;

use crate::{components::Book as BookComponent, models::Book};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub books: Vec<Book>,
}

#[function_component]
pub fn Library(props: &Props) -> Html {
    let Props { books } = props;

    html! {
        <div class={classes!("flex", "flex-row","flex-wrap","gap-x-8", "gap-y-6", "px-6", "py-4")}>
        {books.iter().map(|b| html!(<BookComponent data={b.clone()}/>)).collect::<Html>()}
        </div>
    }
}
