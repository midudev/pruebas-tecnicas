use yew::prelude::*;
use yew_hooks::{use_bool_toggle, use_local_storage, UseLocalStorageHandle};
use yew_icons::{Icon, IconId};

use crate::{
    components::{Book as BookComponent, SingleChoice},
    models::Book,
};

#[derive(Clone, Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub readinglist: Option<UseLocalStorageHandle<Vec<Book>>>,
    pub title: String,
    pub books: Vec<Book>,
    #[prop_or(true)]
    pub expandable: bool,
    #[prop_or(false)]
    pub sortable: bool,
}

#[derive(Clone, Default, PartialEq)]
enum SortContent {
    #[default]
    AZ,
    ZA,
    Pages,
    PagesReverse,
}

pub fn check_book_saved(books: &[Book], b: &Book) -> bool {
    books
        .iter()
        .any(|r| r.title == b.title && b.year == r.year && b.author.name == r.author.name)
}

fn sort_books(sort: SortContent, books: Vec<Book>) -> Vec<Book> {
    let mut mut_books = books.to_vec();
    match sort {
        SortContent::AZ => mut_books.sort_by(|a, b| a.title.cmp(&b.title)),
        SortContent::ZA => {
            mut_books.sort_by(|a, b| a.title.cmp(&b.title));
            mut_books.reverse();
        }
        SortContent::Pages => mut_books.sort_by(|a, b| a.pages.cmp(&b.pages)),
        SortContent::PagesReverse => {
            mut_books.sort_by(|a, b| a.pages.cmp(&b.pages));
            mut_books.reverse();
        }
    };
    mut_books
}

#[function_component]
pub fn Library(props: &Props) -> Html {
    let Props {
        expandable,
        readinglist,
        books: prop_books,
        title,
        sortable,
    } = props.clone();
    let saved_books = use_local_storage::<Vec<Book>>("saved_books".to_string());
    let not_expanded = use_bool_toggle(expandable);
    let sort = use_state(SortContent::default);

    let reading_list = if let Some(v) = readinglist {
        drop(saved_books);
        v
    } else {
        saved_books
    };

    let books = use_memo(
        |(books, reading_list, sort)| {
            let books = books
                .iter()
                .map(|l| Book {
                    saved: check_book_saved(
                        reading_list.as_ref().unwrap_or(&Vec::<Book>::new()),
                        l,
                    ),
                    ..l.clone()
                })
                .collect::<Vec<Book>>();
            sort_books((**sort).clone(), books)
        },
        (prop_books, reading_list.clone(), sort.clone()),
    );

    let onaddbook = {
        let reading_list = reading_list.clone();
        Callback::from(move |b: Book| {
            if let Some(r) = reading_list.as_ref().map(|r| {
                let mut r = r.clone();
                if !r.contains(&b) {
                    r.push(Book {
                        saved: true,
                        ..b.clone()
                    });
                }
                r
            }) {
                reading_list.set(r);
            }
        })
    };

    let onremovebook = {
        Callback::from(move |b: Book| {
            if let Some(r) = reading_list.as_ref().map(|r| {
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
                r
            }) {
                reading_list.set(r);
            }
        })
    };

    let onexpand = {
        let not_expanded = not_expanded.clone();
        Callback::from(move |_: MouseEvent| not_expanded.toggle())
    };

    let onchangesort = {
        let sort = sort.clone();
        Callback::from(move |v| sort.set(v))
    };

    html! {
        <section
            class={classes!("flex","flex-row","flex-wrap","w-full","py-4","mt-6","mb-2")}>
            if !title.is_empty() || sortable {
                <header class={classes!("w-full","flex","flex-row","items-center","justify-between","py-6")}>
                    if !title.is_empty() {
                        <h1
                            class={classes!("text-gray-700","font-bold","text-3xl","dark:text-zinc-100")}
                        >
                            {title.clone()}
                        </h1>
                    }
                    if sortable {
                        <SingleChoice<SortContent>
                            class={classes!("hidden","sm:flex")}
                            options={vec![SortContent::AZ,SortContent::ZA,SortContent::Pages,SortContent::PagesReverse]}
                            onchange={onchangesort}
                        >
                            <div
                                title="A-Z"
                                class={classes!("flex","cursor-pointer","hover:bg-slate-200","p-4","rounded","dark:hover:bg-slate-700","dark:text-zinc-400",
                                (*sort == SortContent::AZ).then_some(vec!["bg-slate-300","dark:bg-slate-600"]).or(Some(vec!["bg-slate-200","dark:bg-slate-800"]))
                                )}
                            >
                                <Icon icon_id={IconId::FontAwesomeSolidArrowDownAZ} width="12px" height="12px"/>
                            </div>
                            <div
                                title="Z-A"
                                class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded","dark:hover:bg-slate-700","dark:text-zinc-400",
                                (*sort == SortContent::ZA).then_some(vec!["bg-slate-300","dark:bg-slate-600"]).or(Some(vec!["bg-slate-200","dark:bg-slate-800"]))
                                )}
                            >
                                <Icon icon_id={IconId::FontAwesomeSolidArrowUpAZ} width="12px" height="12px"/>
                            </div>
                            <div
                                title="Paginas de Menor a Mayor"
                                class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded","dark:hover:bg-slate-700","dark:text-zinc-400",
                                (*sort == SortContent::Pages).then_some(vec!["bg-slate-300","dark:bg-slate-600"]).or(Some(vec!["bg-slate-200","dark:bg-slate-800"]))
                                )}
                            >
                                <Icon icon_id={IconId::BootstrapSortNumericDown} width="14px" height="14px"/>
                            </div>
                            <div
                                title="Paginas de Mayor a Menor"
                                class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded","dark:hover:bg-slate-700","dark:text-zinc-400",
                                (*sort == SortContent::PagesReverse).then_some(vec!["bg-slate-300","dark:bg-slate-600"]).or(Some(vec!["bg-slate-200","dark:bg-slate-800"]))
                                )}
                            >
                                <Icon icon_id={IconId::BootstrapSortNumericDownAlt} width="14px" height="14px"/>
                            </div>
                        </SingleChoice<SortContent>>
                    }
                </header>
            }
            <ul
                class={classes!("flex","flex-row","flex-wrap","justify-center","gap-x-8","gap-y-6","px-6","py-4","overflow-hidden","transition-all",not_expanded.then_some("max-h-[390px]"),)}
            >
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
            </ul>
            if expandable {
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
            }
        </section>
    }
}
