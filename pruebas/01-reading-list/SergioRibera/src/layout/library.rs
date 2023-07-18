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

#[function_component]
pub fn Library(props: &Props) -> Html {
    let Props {
        expandable,
        readinglist,
        books,
        title,
        sortable,
    } = props.clone();
    let saved_books = use_local_storage::<Vec<Book>>("saved_books".to_string());
    let not_expanded = use_bool_toggle(expandable);
    let books = use_state(|| {
        let mut books = books.clone();
        books.sort_by(|a, b| a.title.cmp(&b.title));
        books
    });
    let sort = use_state(SortContent::default);

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

    {
        let sort = sort.clone();
        let books = books.clone();
        use_effect_with_deps(
            move |sort| {
                let mut mut_books = books.to_vec();
                match **sort {
                    SortContent::AZ => mut_books.sort_by(|a, b| a.title.cmp(&b.title)),
                    SortContent::ZA => {
                        mut_books.sort_by(|a, b| a.title.cmp(&b.title));
                        mut_books.reverse();
                    },
                    SortContent::Pages => mut_books.sort_by(|a, b| a.pages.cmp(&b.pages)),
                    SortContent::PagesReverse => {
                        mut_books.sort_by(|a, b| a.pages.cmp(&b.pages));
                        mut_books.reverse();
                    },
                };
                books.set(mut_books);
            },
            sort,
        );
    }

    let onchangesort = {
        let sort = sort.clone();
        Callback::from(move |v| sort.set(v))
    };

    html! {
        <section
            class={classes!("flex","flex-row","flex-wrap","gap-x-8","gap-y-6","py-4","mt-6","mb-2")}>
            <header class={classes!("w-full","flex","flex-row","items-center","py-6")}>
                if !title.is_empty() {
                    <h1
                        class={classes!("w-full","text-gray-700","font-bold","text-3xl")}
                    >
                        {title.clone()}
                    </h1>
                }
                if sortable {
                    <SingleChoice<SortContent>
                        options={vec![SortContent::AZ,SortContent::ZA,SortContent::Pages,SortContent::PagesReverse]}
                        onchange={onchangesort}
                    >
                        <div
                            title="A-Z"
                            class={classes!("flex","cursor-pointer","hover:bg-slate-200","p-4","rounded",(*sort == SortContent::AZ).then_some("bg-slate-300").or(Some("bg-slate-200")))}
                        >
                            <Icon icon_id={IconId::FontAwesomeSolidArrowDownAZ} width="12px" height="12px"/>
                        </div>
                        <div
                            title="Z-A"
                            class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded",(*sort == SortContent::ZA).then_some("bg-slate-300").or(Some("bg-slate-200")))}
                        >
                            <Icon icon_id={IconId::FontAwesomeSolidArrowUpAZ} width="12px" height="12px"/>
                        </div>
                        <div
                            title="Paginas de Menor a Mayor"
                            class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded",(*sort == SortContent::Pages).then_some("bg-slate-300").or(Some("bg-slate-200")))}
                        >
                            <Icon icon_id={IconId::BootstrapSortNumericDown} width="14px" height="14px"/>
                        </div>
                        <div
                            title="Paginas de Mayor a Menor"
                            class={classes!("flex","cursor-pointer","hover:bg-slate-100","p-4","rounded",(*sort == SortContent::PagesReverse).then_some("bg-slate-300").or(Some("bg-slate-200")))}
                        >
                            <Icon icon_id={IconId::BootstrapSortNumericDownAlt} width="14px" height="14px"/>
                        </div>
                    </SingleChoice<SortContent>>
                }
            </header>
            <div
                class={classes!("flex","flex-row","flex-wrap","gap-x-8","gap-y-6","px-6","py-4","overflow-hidden","transition-all",not_expanded.then_some("max-h-[390px]"),)}
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
            </div>
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
