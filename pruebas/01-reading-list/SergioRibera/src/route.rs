use yew::prelude::*;
use yew_router::prelude::*;

use crate::{
    components::NavBar,
    context::{DataProvider, ReadingListProvider},
    layout::{ErrorType, Footer, LayoutError},
    screens::*,
};

#[derive(Clone, Routable, PartialEq, Eq)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/book/:name")]
    Book { name: String },
    #[at("/author/:name")]
    Author { name: String },
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! {<App />},
        Route::Book { name } => html! {<Book {name}/>},
        Route::Author { name } => html! {<Author {name}/>},
        Route::NotFound => html! {
            <>
                <NavBar />
                <main
                    class={classes!("flex","items-center","justify-center","w-full","min-h-screen","px-6")}
                    >
                    <LayoutError errtype={ErrorType::Empty} title=""/>
                </main>
            </>
        },
    }
}

#[function_component]
pub fn RouteApp() -> Html {
    html! {
        <BrowserRouter>
            <ReadingListProvider>
                <DataProvider>
                    <Switch<Route> render={switch} />
                    <Footer />
                </DataProvider>
            </ReadingListProvider>
        </BrowserRouter>
    }
}
