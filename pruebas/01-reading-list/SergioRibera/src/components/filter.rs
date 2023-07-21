use std::fmt::{Display, Debug};

use yew::prelude::*;
use yew_icons::{Icon, IconId};
use crate::components::MultipleChoice;

#[derive(Clone, Properties, PartialEq)]
pub struct FilterComponentProps<T>
where
    T: PartialEq,
{
    pub class: Option<Classes>,
    pub options: Vec<T>,
    pub onchange: Callback<Vec<T>>,
}

#[function_component]
pub fn FilterComponent<T>(props: &FilterComponentProps<T>) -> Html
where
    T: PartialEq + Default + Display + Debug + Clone + 'static,
{
    let FilterComponentProps {
        class: _,
        options,
        onchange,
    } = props.clone();

    html! {
        <div
            class={classes!("group/filter","relative","z-10")}
        >
            <div
                title="A-Z"
                class={classes!("md:flex","hidden","cursor-pointer","hover:bg-slate-200","p-4","dark:hover:bg-slate-700","dark:text-zinc-400","group-hover/filter:bg-slate-700","dark:group-hover/filter:bg-slate-700","group-hover/filter:rounded-t")}
            >
                <Icon icon_id={IconId::FontAwesomeSolidFilter} width="12px" height="12px"/>
            </div>
            <div
                class={classes!("block","md:w-[250px]","md:absolute","md:hidden","group-hover/filter:block","md:right-0","p-4","group-hover/filter:bg-slate-200","group-hover/filter:dark:bg-slate-700","group-hover/filter:rounded-b","group-hover/filter:rounded-tl")}
            >
                <MultipleChoice<T>
                    {options}
                    {onchange}
                />
            </div>
        </div>
    }
}
