use yew::prelude::*;

#[derive(PartialEq, Eq)]
pub enum ErrorType {
    Empty,
    EmptyReadingList,
    LoadingBooks,
}

#[derive(Properties, PartialEq)]
pub struct Props {
    pub errtype: ErrorType,
}

#[function_component]
pub fn LayoutError(props: &Props) -> Html {
    let Props { errtype } = props;

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
        <section class={classes!("w-full","min-h-[7rem]","flex","flex-col","items-center", "justify-center")}>
            <img class={classes!("max-w-[90%]","md:max-w-full")} src={image} alt={text} />
            <span class={classes!("text-gray-700","font-light","text-center","text-xl")}>{text}</span>
        </section>
    }
}
