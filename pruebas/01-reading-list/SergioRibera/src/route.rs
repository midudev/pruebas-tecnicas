use yew::prelude::*;
use yew_router::prelude::*;

use crate::{layout::Footer, screens::*};

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

fn switch(_route: Route) -> Html {
    html!(
        <>
            <App />
            <Footer />
        </>
    )
}

#[function_component]
pub fn RouteApp() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}
