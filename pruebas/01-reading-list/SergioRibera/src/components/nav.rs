use crate::components::InputText;
use yew::prelude::*;
use yew_icons::IconId;

#[derive(Properties, PartialEq)]
pub struct Props {
    pub onsearch: Callback<String>,
}

#[function_component(NavBar)]
pub fn navbar(props: &Props) -> Html {
    let Props { onsearch } = props;
    html! {
        <nav class={classes!("w-full", "py-4", "flex", "flex-row", "items-center", "justify-between")}>
            <InputText
                onchange={onsearch}
                placeholder={"Buscar por Nombre, author, genero, sinopsis"}
                icon={IconId::BootstrapSearch}
            />
            <span class={classes!("text-black")}>{"Search book name, author, edition"}</span>
        </nav>
    }
}
