use yew::prelude::*;
use yew_hooks::{use_list, UseLocalStorageHandle};

use crate::{
    context::DataContext,
    layout::{ErrorType, LayoutError, Library},
    models::Book as BookModel,
    utils::to_slug,
};

#[derive(Properties, Clone, PartialEq)]
pub struct AuthorProps {
    pub name: AttrValue,
}

#[function_component]
pub fn Author(props: &AuthorProps) -> Html {
    let AuthorProps { name } = props.clone();
    let data_context = use_context::<DataContext>().unwrap();
    let (data_loading, data_error, data) = (
        data_context.0,
        data_context.1.clone(),
        data_context.2.clone(),
    );
    let reading_list = use_context::<UseLocalStorageHandle<Vec<BookModel>>>().unwrap();
    let books = use_list(Vec::<BookModel>::new());
    let content = use_memo(
        |data| {
            if data_loading || data_error.is_some() {
                return None;
            }
            let content = data
                .clone()
                .into_iter()
                .find(|b| *name == to_slug(b.author.name.clone()));
            if content.is_some() {
                let mut data = data.clone();
                data.retain(|b| *name == to_slug(b.author.name.clone()));
                books.set(data);
            }
            content.map(|c| c.author)
        },
        data.unwrap_or_default(),
    );

    html! {
        if data_loading {
            <main
                class={classes!("flex","items-center","justify-center","w-full","min-h-screen","px-6")}
            >
                    <LayoutError errtype={ErrorType::LoadingBooks} title=""/>
            </main>
        } else if data_error.is_some() || content.is_none() {
            <main
                class={classes!("flex","items-center","justify-center","w-full","min-h-screen","px-6")}
            >
                    <LayoutError errtype={ErrorType::Empty} title=""/>
            </main>
        } else {
            {(*content).clone().map(|data| html!{
                <main
                    class={classes!("flex","flex-col","items-center","justify-center","p-8","gap-6")}
                >
                    <img
                        class={classes!("max-w-[314px]","author-avatar","dark:brightness-50")}
                        src="/assets/HcNpn2Ma.webp"
                        alt={data.name.clone()}
                        title={data.name.clone()}
                    />
                    <section
                        class={classes!("flex","flex-col","gap-4")}
                    >
                        <h1
                        class={classes!("font-bold","text-5xl","text-neutral-600","dark:text-zinc-100")}
                        >
                            {data.name.clone()}
                        </h1>
                        if !books.current().is_empty() {
                        <h4
                            class={classes!("font-bold","text-2xl","text-neutral-400","dark:text-zinc-600")}
                        >
                        {for books.current().iter().map(|b| b.genre.clone())}
                        </h4>
                        }
                    </section>
                    if !books.current().is_empty() {
                        <Library
                            title="Sus Libros"
                            expandable=false
                            readinglist={reading_list.clone()}
                            books={books.current().clone()}
                        />
                    }
                </main>
            })}
        }
    }
}
