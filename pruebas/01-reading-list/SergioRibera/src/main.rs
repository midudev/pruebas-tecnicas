use reading_list::route::RouteApp;

fn main() {
    #[cfg(feature = "inspect")]
    wasm_logger::init(wasm_logger::Config::default());

    yew::Renderer::<RouteApp>::new().render();
}
