use crate::components::{FilterComponent, InputText};
use serde::{Deserialize, Serialize};
use yew::prelude::*;
use yew_hooks::{use_effect_once, use_local_storage};
use yew_icons::{Icon, IconId};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub onsearch: Option<Callback<String>>,
    pub onfiltergenre: Option<Callback<Vec<String>>>,
    pub onfilterpages: Option<Callback<Vec<String>>>,
    #[prop_or_default]
    pub genres: Vec<String>,
    #[prop_or_default]
    pub pages: Vec<String>,
}

#[function_component(NavBar)]
pub fn navbar(props: &Props) -> Html {
    let Props {
        onsearch,
        onfiltergenre,
        onfilterpages,
        genres,
        pages,
    } = props;
    html! {
        <nav class={classes!("w-full","px-6","py-4","flex","flex-row","items-center",
            (onsearch.is_some()).then_some("justify-between").or(Some("justify-end")))}>
            if let Some(onsearch) = onsearch {
                <div
                    class={classes!("flex","flex-row","gap-4","items-center")}
                >
                    <InputText
                        onchange={onsearch}
                        placeholder={"Buscar por Nombre, author, genero, sinopsis y mas"}
                        icon={IconId::BootstrapSearch}
                    />
                    if let Some(onfilter) = onfiltergenre {
                        <FilterComponent<String>
                            title="Filtrar Por Categoría:"
                            options={genres.clone()}
                            onchange={onfilter.clone()}
                            class={classes!("hidden","md:block")}
                            />
                    }
                    if let Some(onfilter) = onfilterpages {
                        <FilterComponent<String>
                            title="Filtrar Por Páginas:"
                            options={pages.clone()}
                            onchange={onfilter}
                            class={classes!("hidden","md:block")}
                            />
                    }
                </div>
            }
            <ThemeComponent />
        </nav>
    }
}

#[derive(Clone, Default, Serialize, Deserialize, PartialEq)]
pub enum ThemeMode {
    #[default]
    Light,
    Dark,
}

impl ThemeMode {
    pub fn toggle(&self) -> Self {
        match self {
            Self::Light => Self::Dark,
            Self::Dark => Self::Light,
        }
    }

    pub fn color(&self) -> String {
        match self {
            Self::Light => "bg-slate-800".to_string(),
            Self::Dark => "bg-yellow-300".to_string(),
        }
    }
}

impl ToString for ThemeMode {
    fn to_string(&self) -> String {
        match self {
            ThemeMode::Light => "light".to_string(),
            ThemeMode::Dark => "dark".to_string(),
        }
    }
}

#[function_component]
pub fn ThemeComponent() -> Html {
    let theme = use_local_storage::<ThemeMode>("theme".to_string());

    {
        let dark_mode = theme.clone();
        use_effect_once(move || {
            if dark_mode.is_none() {
                dark_mode.set(ThemeMode::default());
            }

            || {}
        });
    }

    {
        let theme = theme.clone();
        use_effect_with_deps(
            move |theme| {
                if let Some(theme) = (**theme).clone() {
                    let window = web_sys::window().unwrap();
                    let document = window.document().unwrap();
                    let document = document.document_element().unwrap();
                    document.set_class_name(&theme.to_string());
                }
            },
            theme,
        );
    }

    let onclick = {
        let theme = theme.clone();
        Callback::from(move |_: MouseEvent| {
            if let Some(t) = (*theme).clone() {
                theme.set(t.toggle());
            }
        })
    };

    html! {
        <div
            class={classes!("relative","overflow-hidden","p-4",
                "rounded-full","cursor-pointer",theme.as_ref().map(|t| t.color())
            )}
            {onclick}
            >
            <Icon
                class={classes!("absolute","text-white",
                    theme.as_ref()
                        .is_some_and(|t| t == &ThemeMode::Light)
                        .then_some(vec!["left-[50%]","top-[50%]","-translate-x-1/2","-translate-y-1/2"])
                        .or(Some(vec!["top-[-100%]"]))
                )}
                icon_id={IconId::HeroiconsOutlineMoon}
                width="18px" height="18px"
            />
            <Icon
                class={classes!("absolute","text-slate-800",
                    theme.as_ref()
                        .is_some_and(|t| t == &ThemeMode::Dark)
                        .then_some(vec!["left-[50%]","top-[50%]","-translate-x-1/2","-translate-y-1/2"])
                        .or(Some(vec!["top-[-100%]"]))
                )}
                icon_id={IconId::HeroiconsOutlineSun}
                width="18px" height="18px"
            />
        </div>
    }
}
