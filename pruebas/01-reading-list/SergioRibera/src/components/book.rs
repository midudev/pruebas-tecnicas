use yew::prelude::*;
use yew_hooks::{use_bool_toggle, use_event};
use yew_icons::{Icon, IconId};

use crate::models::Book as BookModel;

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
    let bookmard_hovered = use_state(|| false);
    let bookmark_icon = use_state(|| IconId::BootstrapBookmark);
    let bookmark_toggle = use_bool_toggle(data.saved);

    let onclick = {
        let icon = bookmark_icon.clone();
        let bookmark_toggle = bookmark_toggle.clone();
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
        use_event(bookmark_ref.clone(), "mouseenter", move |_: MouseEvent| {
            bookmard_hovered.set(true);
        });
    }

    {
        let bookmard_hovered = bookmard_hovered.clone();
        use_event(bookmark_ref.clone(), "mouseleave", move |_: MouseEvent| {
            bookmard_hovered.set(false);
        });
    }

    html! {
        <div class={classes!("relative","flex", "flex-col", "justify-start", "gap-4", "max-w-[177px]", "px-4", "py-3","cursor-pointer")}>
            <img class={classes!("w-[177px]", "h-[266px]", "book-image-shadow","transition-transform","hover:scale-105")} src={data.cover.clone()} alt={data.title.clone()} />
            <span class={classes!("text-neutral-600", "text-md", "font-bold")}>{data.title.clone()}</span>
            <div
                {onclick}
                ref={bookmark_ref}
                class={classes!("top-0","right-0","absolute","px-3","py-2","bg-slate-200","rounded","cursor-pointer")}
            >
                <Icon
                    icon_id={*bookmark_icon}
                    width={"18px".to_owned()}
                    height={"18px".to_owned()}
                />
            </div>
        </div>
    }
}
