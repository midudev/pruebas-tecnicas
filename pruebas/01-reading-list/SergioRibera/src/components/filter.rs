use std::fmt::{Debug, Display};

use crate::components::MultipleChoice;
use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[derive(Clone, Properties, PartialEq)]
pub struct FilterComponentProps<T>
where
    T: PartialEq,
{
    pub class: Option<Classes>,
    pub title: Option<AttrValue>,
    pub options: Vec<T>,
    pub onchange: Callback<Vec<T>>,
}

#[function_component]
pub fn FilterComponent<T>(props: &FilterComponentProps<T>) -> Html
where
    T: PartialEq + Default + Display + Debug + Clone + 'static,
{
    let FilterComponentProps {
        class,
        options,
        onchange,
        title,
    } = props.clone();

    html! {
        <div
            class={classes!("group/filter","relative","z-10",class)}
        >
            <div
                title="Filtrar"
                class={classes!("md:flex","hidden","cursor-pointer","p-4","dark:text-zinc-400","group-hover/filter:bg-slate-200","dark:group-hover/filter:bg-slate-700","group-hover/filter:rounded-t")}
            >
                <Icon icon_id={IconId::FontAwesomeSolidFilter} width="12px" height="12px"/>
            </div>
            <div
                class={classes!("flex","flex-col","md:w-[250px]","md:absolute","md:hidden","md:group-hover/filter:flex","md:right-0","p-4","md:group-hover/filter:bg-slate-200","md:group-hover/filter:dark:bg-slate-700","md:group-hover/filter:rounded-b","md:group-hover/filter:rounded-tl")}
            >
                if let Some(title) = title {
                    <label
                        class={classes!("mb-4","font-bold","text-md","text-gray-700","dark:text-zinc-100")}
                    >
                    {title}
                    </label>
                }
                <MultipleChoice<T>
                    {options}
                    {onchange}
                />
            </div>
        </div>
    }
}
