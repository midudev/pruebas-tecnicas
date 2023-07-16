use yew::prelude::*;

use crate::models::Book as BookModel;

#[derive(Properties, PartialEq)]
pub struct Props {
    pub data: BookModel,
}

#[function_component]
pub fn Book(props: &Props) -> Html {
    let Props { data } = props;

    html! {
        <div class={classes!("flex", "flex-col", "justify-start", "gap-4", "max-w-[177px]", "px-4", "py-3")}>
            <img class={classes!("w-[177px]", "h-[266px]", "book-image-shadow")} src={data.cover.clone()} alt={data.title.clone()} />
            <span class={classes!("text-neutral-600", "text-md", "font-bold")}>{data.title.clone()}</span>
        </div>
    }
}
