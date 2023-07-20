use yew::prelude::*;
use yew_hooks::{use_bool_toggle, use_event};
use yew_icons::{Icon, IconId};
use yew_router::prelude::Link;

use crate::{models::Book as BookModel, route::Route, utils::to_slug};

#[derive(Clone, Properties, PartialEq)]
pub struct Props {
    pub data: BookModel,
    pub onsave: Callback<BookModel>,
    pub onremove: Callback<BookModel>,
}

#[function_component]
pub fn Book(props: &Props) -> Html {
    let Props {
        data,
        onsave,
        onremove,
    } = props.clone();
    let bookmark_ref = use_node_ref();
    let group_ref = use_node_ref();
    let show_bookmard = use_state(|| false);
    let bookmard_hovered = use_state(|| false);
    let bookmark_icon = use_state(|| IconId::BootstrapBookmark);
    let bookmark_toggle = use_bool_toggle(data.saved);

    let onclick = {
        let icon = bookmark_icon.clone();
        let book = data.clone();
        Callback::from(move |_| {
            if *bookmark_toggle {
                icon.set(IconId::BootstrapBookmark);
                onremove.emit(book.clone());
            } else {
                icon.set(IconId::BootstrapBookmarkCheckFill);
                onsave.emit(book.clone());
            }
            bookmark_toggle.toggle();
        })
    };

    {
        let icon = bookmark_icon.clone();
        use_effect_with_deps(
            move |(data, hovered)| {
                if data.saved && **hovered {
                    icon.set(IconId::BootstrapBookmarkDashFill)
                } else if data.saved {
                    icon.set(IconId::BootstrapBookmarkCheckFill)
                } else if !data.saved && **hovered {
                    icon.set(IconId::BootstrapBookmarkPlusFill)
                } else {
                    icon.set(IconId::BootstrapBookmark)
                };
            },
            (data.clone(), bookmard_hovered.clone()),
        );
    }

    {
        let bookmard_hovered = bookmard_hovered.clone();
        let show_bookmard = show_bookmard.clone();
        use_event(bookmark_ref.clone(), "mouseenter", move |_: MouseEvent| {
            bookmard_hovered.set(true);
        });
        use_event(group_ref.clone(), "mouseenter", move |_: MouseEvent| {
            show_bookmard.set(true);
        });
    }

    {
        let show_bookmard = show_bookmard.clone();
        use_event(bookmark_ref.clone(), "mouseleave", move |_: MouseEvent| {
            bookmard_hovered.set(false);
        });
        use_event(group_ref.clone(), "mouseleave", move |_: MouseEvent| {
            show_bookmard.set(false);
        });
    }

    html! {
        <li
            ref={group_ref}
            class={classes!("relative","flex", "flex-col", "justify-start", "max-w-[177px]", "px-4", "py-3","cursor-pointer")}
            >
            <Link<Route> to={Route::Book { name: to_slug(data.title.clone()) }}>
                <img
                    class={classes!("w-[177px]", "h-[266px]","mb-5","book-image-shadow","transition-transform","hover:scale-105","dark:shadow-none","dark:brightness-50")}
                    src={data.cover.clone()}
                    alt={data.title.clone()}
                />
            </Link<Route>>
            <Link<Route> to={Route::Book { name: to_slug(data.title.clone()) }}>
                <span
                    class={classes!("text-neutral-600", "text-md", "font-bold","dark:text-zinc-100")}
                >{data.title.clone()}</span>
            </Link<Route>>
            <Link<Route> to={Route::Author { name: to_slug(data.author.name.clone()) }}>
                <span
                    class={classes!("text-neutral-400", "text-sm", "font-bold","dark:text-zinc-600")}
                >
                    {data.author.name.clone()}
                </span>
            </Link<Route>>
            if *show_bookmard || data.saved {
                <div
                    {onclick}
                    ref={bookmark_ref}
                    class={classes!("top-0","right-0","absolute","px-3","py-2","bg-slate-200","rounded","cursor-pointer","dark:text-zinc-400","dark:bg-slate-800")}
                >
                    <Icon
                        icon_id={*bookmark_icon}
                        width={"18px".to_owned()}
                        height={"18px".to_owned()}
                    />
                </div>
            }
        </li>
    }
}
