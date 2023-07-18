use yew::prelude::*;

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
