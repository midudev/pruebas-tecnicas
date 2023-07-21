use std::fmt::{Debug, Display};

use yew::prelude::*;
use yew_hooks::use_list;

#[derive(Clone, Properties, PartialEq)]
pub struct SingleChoiceProps<T>
where
    T: PartialEq + Default + Clone + 'static,
{
    pub class: Option<Classes>,
    pub options: Vec<T>,
    pub children: Children,
    pub onchange: Callback<T>,
}

#[function_component]
pub fn SingleChoice<T>(props: &SingleChoiceProps<T>) -> Html
where
    T: PartialEq + Default + Clone + 'static,
{
    let SingleChoiceProps {
        class,
        options,
        children,
        onchange: onchangecurrent,
    } = props.clone();
    let current = use_state(T::default);
    let mut children_iter = children.iter();

    let onchange = {
        |v: T| {
            Callback::from(move |_: MouseEvent| {
                current.set(v.clone());
                onchangecurrent.emit(v.clone())
            })
        }
    };

    html! {
        <div class={classes!("flex","flex-row","gap-2",class)}>
            {for options.iter().map(|o| {
                    html!{
                        <div onclick={(onchange.clone())(o.clone())}>
                            {children_iter.next()}
                        </div>
                    }
                })
            }
        </div>
    }
}

#[derive(Clone, Properties, PartialEq)]
pub struct MultipleChoiceProps<T>
where
    T: PartialEq + Default + Display + Debug + Clone + 'static,
{
    pub class: Option<Classes>,
    pub options: Vec<T>,
    pub onchange: Callback<Vec<T>>,
}

#[function_component]
pub fn MultipleChoice<T>(props: &MultipleChoiceProps<T>) -> Html
where
    T: PartialEq + Default + Display + Debug + Clone + 'static,
{
    let MultipleChoiceProps {
        class,
        options,
        onchange: onchangecurrent,
    } = props.clone();
    let selecteds = use_list(Vec::<T>::new());

    let onchange = {
        |v: T| {
            let selecteds = selecteds.clone();
            Callback::from(move |_: MouseEvent| {
                let mut currents = selecteds.current().clone();
                {
                    let mut current_iter = currents.iter();
                    if let Some(i) = current_iter.position(|c| c == &v) {
                        currents.remove(i);
                    } else {
                        currents.push(v.clone());
                    }
                }
                selecteds.set(currents.clone());
                onchangecurrent.emit(currents);
            })
        }
    };

    html! {
        <div
            class={classes!("flex","flex-row","flex-wrap","gap-2",class)}
        >
            {for options.iter().map(|o| {
                html!{
                    <div
                        class={classes!("rounded","cursor-pointer","px-4","py-2","hover:bg-slate-200","dark:hover:bg-slate-700","dark:text-zinc-400",
                        (selecteds.current().contains(o)).then_some("bg-slate-300 dark:bg-slate-600").or(Some("bg-slate-200 dark:bg-slate-800"))
                        )}
                        onclick={(onchange.clone())(o.clone())}
                    >
                        {o.clone()}
                    </div>
                }
            })}
        </div>
    }
}
