use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[derive(Clone, PartialEq)]
struct SectionItem {
    pub icon: IconId,
    pub url: &'static str,
    pub content: &'static str,
}

#[derive(Clone, Properties, PartialEq)]
struct FooterSectionProps {
    pub title: &'static str,
    pub items: Vec<SectionItem>,
}

impl SectionItem {
    fn new(icon: IconId, content: &'static str, url: &'static str) -> Self {
        Self { icon, url, content }
    }
}

#[function_component]
fn FooterSection(props: &FooterSectionProps) -> Html {
    let FooterSectionProps { title, items } = props.clone();
    html! {
        <section class={classes!("flex","flex-col","gap-2")}>
            <h4 class={classes!("font-bold","text-white","mb-3","text-xl")}>{title.clone()}</h4>
            {items.iter().map(|i| html! {
                <a
                    href={i.url.clone()}
                    target={"_blank"}
                    class={classes!("flex","flex-row","gap-2","text-white","items-center","fill-newtral-400")}
                >
                    <Icon
                        icon_id={i.icon}
                        width={"15px".to_owned()}
                        height={"15px".to_owned()}/>
                    {i.content.clone()}
                </a>
            }).collect::<Vec<Html>>()}
        </section>
    }
}

#[function_component]
pub fn Footer() -> Html {
    let socialmedia = vec![
        SectionItem::new(IconId::BootstrapGlobe2, "Un poco sobre mi", "https://bento.me/sergioribera"),
        SectionItem::new(IconId::BootstrapGithub, "Github", "https://github.com/SergioRibera"),
        SectionItem::new(IconId::BootstrapLinkedin, "Linkedin", "https://www.linkedin.com/in/sergioribera"),
        SectionItem::new(IconId::BootstrapTwitch, "Twitch", "https://www.twitch.tv/sergioriberaid"),
        SectionItem::new(IconId::BootstrapInstagram, "Instagram", "https://www.instagram.com/sergio_riberacosta"),
        SectionItem::new(IconId::BootstrapTwitter, "Twitter", "https://twitter.com/sergioribera_rs"),
        SectionItem::new(IconId::BootstrapStackOverflow, "StackOverflow", "https://stackoverflow.com/users/12349493/sergio-ribera"),
    ];
    let techstack = vec![
        SectionItem::new(IconId::SimpleIconsRust, "Rust", "https://rust-lang.org"),
        SectionItem::new(IconId::BootstrapGlobe2, "Yew", "https://yew.rs"),
        SectionItem::new(IconId::BootstrapGithub, "CargoMake", "https://github.com/sagiegurari/cargo-make"),
        SectionItem::new(IconId::SimpleIconsTailwindcss, "TailwindCss", "https://tailwindcss.com"),
        SectionItem::new(IconId::BootstrapGlobe2, "Trunk", "https://trunkrs.dev"),
        SectionItem::new(IconId::SimpleIconsDocker, "Docker", "https://docker.com"),
        SectionItem::new(IconId::BootstrapGlobe2, "Fly.io", "https://fly.io"),
    ];
    let references = vec![
        SectionItem::new(IconId::BootstrapDribbble, "Dribbble", "https://dribbble.com/shots/20454786-E-Book-Dashboard"),
        SectionItem::new(IconId::BootstrapGlobe2, "Lottie", "https://lottiefiles.com"),
        SectionItem::new(IconId::BootstrapGithub, "Yew Icons", "https://github.com/finnbear/yew_icons"),
        SectionItem::new(IconId::BootstrapGithub, "Codigo del Proyecto", "https://github.com/SergioRibera/midu-pruebas-tecnicas/tree/yew_rust/pruebas/01-reading-list/SergioRibera"),
    ];

    html! {
        <footer class={classes!("w-full","bg-slate-900","flex","flex-col","gap-4","py-6","items-center")}>
            <div
                class={classes!("w-full","flex","flex-col","md:flex-row","gap-4","md:gap-0","items-center","md:items-start","md:justify-evenly","px-2")}
            >
                <FooterSection title={"Sigueme"} items={socialmedia} />
                <FooterSection title={"Tecnologias Usadas"} items={techstack} />
                <FooterSection title={"Referencias y Recursos"} items={references} />
            </div>
            <small
                    class={classes!("flex","text-neutral-400","items-center","gap-1")}
            >
                <Icon icon_id={IconId::FontAwesomeRegularCopyright} width={"12px".to_owned()} height={"12px".to_owned()}/>
                {"Copyright 2023,"}
                <a
                    href={"https://github.com/SergioRibera"}
                    target={"_blank"}>
                        {"Sergio Ribera"}
                </a>
            </small>
        </footer>
    }
}
