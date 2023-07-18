use yew::prelude::*;

#[derive(PartialEq, Eq)]
pub enum ErrorType {
    Empty,
    EmptyReadingList,
    LoadingBooks,
}

#[derive(Properties, PartialEq)]
pub struct Props {
    pub title: String,
    pub errtype: ErrorType,
}

#[function_component]
pub fn LayoutError(props: &Props) -> Html {
    let Props { title, errtype } = props;

    let image = match errtype {
        ErrorType::Empty => "assets/lk52d2uh.webp",
        ErrorType::EmptyReadingList => "assets/lk52d6k1.webp",
        ErrorType::LoadingBooks => "assets/lk52dan2.webp",
    };

    let text = match errtype {
        ErrorType::Empty => "¡Ups! Los libros han desaparecido en una dimensión desconocida. Nuestros bibliotecarios están en ello.",
        ErrorType::EmptyReadingList => "¿Dónde están todos los libros? Parece que alguien tiene espacio para más aventuras literarias.",
        ErrorType::LoadingBooks => "¡Aguanta un momento! Nuestros bibliotecarios están buscando libros interesantes para ti.",
    };

    html! {
        <section class={classes!("w-full","min-h-[7rem]","flex","flex-col","items-center","justify-center")}>
            if !title.is_empty() {
                <h1
                    class={classes!("w-full","text-gray-700","font-bold","text-3xl","mt-6","mb-2","dark:text-zinc-100")}
                >
                    {title.clone()}
                </h1>
            }
            <img
                class={classes!("max-w-[90%]","md:max-w-full",
                    (errtype != &ErrorType::LoadingBooks).then_some("dark:contrast-50")
                )}
                src={image}
                alt={text}
            />
            <span class={classes!("text-gray-700","font-light","text-center","text-xl","dark:text-zinc-400")}>{text}</span>
        </section>
    }
}
