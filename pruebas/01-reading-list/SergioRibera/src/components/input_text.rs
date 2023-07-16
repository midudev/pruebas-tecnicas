use wasm_bindgen::{JsCast, UnwrapThrowExt};
use web_sys::{Event, HtmlInputElement, InputEvent};
use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[derive(Clone, Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub icon: Option<IconId>,
    #[prop_or_default]
    pub placeholder: Option<String>,
    pub onchange: Callback<String>,
}

fn get_value_from_input_event(e: InputEvent) -> String {
    let event: Event = e.dyn_into().unwrap_throw();
    let event_target = event.target().unwrap_throw();
    let target: HtmlInputElement = event_target.dyn_into().unwrap_throw();
    target.value()
}

#[function_component(InputText)]
pub fn input_text(props: &Props) -> Html {
    let Props {
        icon,
        placeholder: place_prop,
        onchange,
    } = props.clone();

    let placeholder = if let Some(place) = place_prop {
        place.clone()
    } else {
        "Insert Text...".to_string()
    };

    let oninput = Callback::from(move |input_event: InputEvent| {
        onchange.emit(get_value_from_input_event(input_event));
    });

    html! {
        <div class={classes!("flex","flex-row","gap-2","items-center")}>
            if let Some(icon) = icon {
                <Icon icon_id={icon} width={"18px".to_owned()} height={"18px".to_owned()}/>
            }
            <input class={classes!("px-5", "py-3")} {placeholder} {oninput} />
        </div>
    }
}
