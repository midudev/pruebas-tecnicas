use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[derive(Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub icon: Option<IconId>,
    #[prop_or_default]
    pub placeholder: Option<String>,
    pub onchange: Callback<InputEvent>,
}

#[function_component(InputText)]
pub fn input_text(props: &Props) -> Html {
    let Props {
        icon,
        placeholder: place_prop,
        onchange,
    } = props;

    let placeholder = if let Some(place) = place_prop {
        place.clone()
    } else {
        "Insert Text...".to_string()
    };

    html! {
        <div class={classes!("flex","flex-row","gap-2","items-center")}>
            if let Some(icon) = icon {
                <Icon icon_id={*icon} width={"18px".to_owned()} height={"18px".to_owned()}/>
            }
            <input class={classes!("px-5", "py-3")} {placeholder} oninput={onchange} />
        </div>
    }
}
