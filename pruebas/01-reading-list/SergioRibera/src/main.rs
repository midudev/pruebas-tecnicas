mod components;
mod errors;
mod layout;
mod models;
mod services;
mod screens;

use screens::App;

fn main() {
    #[cfg(feature = "inspect")]
    wasm_logger::init(wasm_logger::Config::default());

    yew::Renderer::<App>::new().render();
}
