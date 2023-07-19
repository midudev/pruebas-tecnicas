use yew::prelude::*;
use yew_hooks::{use_list, UseLocalStorageHandle};
use yew_router::prelude::Link;

use crate::{
    context::DataContext,
    layout::{ErrorType, LayoutError, Library},
    models::Book as BookModel,
    route::Route,
    utils::to_slug,
};

#[derive(Properties, Clone, PartialEq)]
pub struct BookProps {
    pub name: AttrValue,
}

#[function_component]
pub fn Book(props: &BookProps) -> Html {
    let BookProps { name } = props.clone();
    let data_context = use_context::<DataContext>().unwrap();
    let (data_loading, data_error, data) = (
        data_context.0,
        data_context.1.clone(),
        data_context.2.clone(),
    );
    let reading_list = use_context::<UseLocalStorageHandle<Vec<BookModel>>>().unwrap();
    let related = use_list(Vec::<BookModel>::new());
    let content = use_memo(
        |(data, name)| {
            if data_loading || data_error.is_some() {
                return None;
            }
            let content = data
                .clone()
                .into_iter()
                .find(|b| to_slug(b.title.clone()) == name.to_string());
            if let Some(c) = content.clone() {
                let mut data = data.clone();
                data.retain(|b| b.genre == c.genre && b.title != c.title);
                related.set(data);
            }
            content
        },
        (data.clone().unwrap_or_default(), name.clone()),
    );

    html! {
        if data_loading {
            <main
                class={classes!("flex","items-center","justify-center","w-full","min-h-screen","px-6")}
            >
                    <LayoutError errtype={ErrorType::LoadingBooks} title=""/>
            </main>
        } else if data_error.is_some() || content.clone().is_none() {
            <main
                class={classes!("flex","items-center","justify-center","w-full","min-h-screen","px-6")}
            >
                    <LayoutError errtype={ErrorType::Empty} title=""/>
            </main>
        } else {
            {(*content).clone().map(|book| html!{
                <main
                    class={classes!("flex","flex-col","items-center","justify-center","p-8","gap-6")}
                >
                    <img
                        class={classes!("max-w-[314px]","max-h-[475px]","shadow","dark:brightness-50","dark:shadow-none")}
                        src={book.cover.clone()}
                        alt={book.title.clone()}
                        title={book.title.clone()}
                    />
                    <section
                        class={classes!("flex","flex-col","gap-4")}
                    >
                        <h1
                        class={classes!("font-bold","text-5xl","text-neutral-600","dark:text-zinc-100")}
                        >
                            {book.title.clone()}
                        </h1>
                        <h4
                        class={classes!("font-bold","text-2xl","text-neutral-400","dark:text-zinc-600")}
                        >
                            <Link<Route> to={Route::Author { name: to_slug(book.author.name.clone()) }}>
                                {book.author.name.clone()}
                            </Link<Route>>
                        </h4>
                    </section>
                    <section
                        class={classes!("flex","flex-col","flex-wrap","gap-6","justify-start","items-center","max-w-[500px]","lg:max-w-[1200px]","lg:flex-row-reverse")}
                    >
                        <div class={classes!("flex","flex-col","gap-4")}>
                            <div class={classes!("flex","flex-row","gap-3")}>
                                <span class={classes!("text-neutral-600","font-bold","dark:text-zinc-400")}>
                                    {"Paginas:"}
                                </span>
                                <span class={classes!("text-neutral-600","font-normal","dark:text-zinc-400")}>
                                    {book.pages}
                                </span>
                            </div>
                            <div class={classes!("flex","flex-row","gap-3")}>
                                <span class={classes!("text-neutral-600","font-bold","dark:text-zinc-400")}>
                                    {"Genero:"}
                                </span>
                                <span class={classes!("text-neutral-600","font-normal","dark:text-zinc-400")}>
                                    {book.genre.clone()}
                                </span>
                            </div>
                            <div class={classes!("flex","flex-row","gap-3")}>
                                <span class={classes!("text-neutral-600","font-bold","dark:text-zinc-400")}>
                                    {"Año:"}
                                </span>
                                <span class={classes!("text-neutral-600","font-normal","dark:text-zinc-400")}>
                                    {book.year}
                                </span>
                            </div>
                            <div class={classes!("flex","flex-row","gap-3")}>
                                <span class={classes!("text-neutral-600","font-bold","dark:text-zinc-400")}>
                                    {"ISBN:"}
                                </span>
                                <span class={classes!("text-neutral-600","font-normal","dark:text-zinc-400")}>
                                    {book.isbn.clone()}
                                </span>
                            </div>
                        </div>
                        <p class={classes!("text-neutral-600","font-normal","dark:text-zinc-400")}>
                            {book.synopsis.clone()}
                        </p>
                    </section>
                    if !related.current().is_empty() {
                        <Library
                            title="Libros Similares"
                            expandable=false
                            readinglist={reading_list.clone()}
                            books={related.current().clone()}
                        />
                    }
                </main>
            })}
        }
    }
}
