use yew::prelude::*;
use yew_hooks::{use_bool_toggle, use_local_storage, UseLocalStorageHandle};
use yew_icons::{Icon, IconId};

use crate::{components::Book as BookComponent, models::Book};

#[derive(Clone, Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub readinglist: Option<UseLocalStorageHandle<Vec<Book>>>,
    pub books: Vec<Book>,
}

#[function_component]
pub fn Library(props: &Props) -> Html {
    let Props { readinglist, books } = props.clone();
    let saved_books = use_local_storage::<Vec<Book>>("saved_books".to_string());
    let not_expanded = use_bool_toggle(true);

    let reading_list = if let Some(v) = readinglist {
        drop(saved_books);
        v
    } else {
        saved_books
    };

    let onaddbook = {
        let reading_list = reading_list.clone();
        Callback::from(move |b: Book| {
            if let Some(r) = reading_list.as_ref().and_then(|r| {
                let mut r = r.clone();
                if !r.contains(&b) {
                    r.push(Book {
                        saved: true,
                        ..b.clone()
                    });
                }
                Some(r)
            }) {
                reading_list.set(r);
            }
        })
    };

    let onremovebook = {
        let reading_list = reading_list.clone();
        Callback::from(move |b: Book| {
            if let Some(r) = reading_list.as_ref().and_then(|r| {
                let mut r = r.clone();
                if let Some(i) = r.iter().position(|x| {
                    b.title == *x.title
                        && b.genre == *x.genre
                        && b.author.name == *x.author.name
                        && b.year == x.year
                        && b.pages == x.pages
                }) {
                    r.remove(i);
                }
                Some(r)
            }) {
                reading_list.set(r);
            }
        })
    };

    let onexpand = {
        let not_expanded = not_expanded.clone();
        Callback::from(move |_: MouseEvent| not_expanded.toggle())
    };

    html! {
        <section class={classes!("flex", "flex-row", "flex-wrap", "gap-x-8", "gap-y-6", "px-6", "py-4",)}>
        <div class={classes!(
            "flex",
            "flex-row",
            "flex-wrap",
            "gap-x-8",
            "gap-y-6",
            "px-6",
            "py-4",
            "overflow-hidden",
            "transition-all",
            not_expanded.then_some("max-h-[390px]"),
            )}>
            {books
                .iter()
                .map(|b|
                     html!(<BookComponent
                           data={b.clone()}
                           onsave={onaddbook.clone()}
                           onremove={onremovebook.clone()}
                    />))
                .collect::<Html>()
            }
        </div>
        <div class={classes!("flex","w-full","py-4","items-center","justify-center")}>
            <span
                class={classes!("text-sky-600","flex","flex-row","gap-3","cursor-pointer","items-center")}
                onclick={onexpand}
            >
                <Icon icon_id={IconId::BootstrapChevronExpand} width="18px" height="18px" />
                if !*not_expanded {
                    {"Ocultar"}
                } else {
                    {"Ver Más"}
                }
            </span>
        </div>
        </section>
    }
}
