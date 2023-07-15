Disenio inspirado desde [dribbble](https://dribbble.com/shots/20454786-E-Book-Dashboard)

# Tecnologias utilizadas
- [Rust](https://rust-lang.org/tools/install)
- Framework para la interface: [Yew](https://yew.rs)

# Requisitos de Desarrollo
- [Rust](https://rust-lang.org/tools/install)
- Tener instalado el target `wasm32-unknown-unknown` de rust
  > ```sh
  > rustup target add wasm32-unknown-unknown
  > ```
- Tener instalado lo siguiente
  - [Trunk](https://trunkrs.dev/) -> `cargo install --locked trunk`
  - [Cargo Make](https://github.com/sagiegurari/cargo-make) -> `cargo install cargo-make`

# Correr en el modo de Desarrollo
Solo necesitas correr el comando
```sh
cargo make dev
```

# Compilar para desplegar
Aqui te presento dos opciones.
La primera es compilarlo con trunk
```sh
cargo make build
```

La segunda opcion es desplegando un contenedor docker
```sh
docker build -t reading_list:latest .
```

# Credits
Desarrollado por [SergioRibera](https://github.com/SergioRibera) con <3

<a target="_blank" href="https://icons8.com/icon/f6WWkElFBgtA/book">Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
