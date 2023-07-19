mod components;
mod context;
mod errors;
mod layout;
mod models;
mod route;
mod screens;
mod services;
mod utils;

use route::RouteApp;

fn main() {
    #[cfg(feature = "inspect")]
    wasm_logger::init(wasm_logger::Config::default());

    yew::Renderer::<RouteApp>::new().render();
}
