import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, g as renderTransition } from '../astro.4d3a9342.mjs';
import 'html-escaper';
import { $ as $$RootLayout } from './404.astro.db58e36d.mjs';
import { S as SaveBook, B as BooksFilters } from './_page_.astro.adf3063a.mjs';
/* empty css                           */import { s as searchBooks } from './_ISBN_.js.45588133.mjs';
/* empty css                         */
const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return Astro2.redirect("/Libros/1");
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/index.astro", void 0);

const $$file$1 = "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$FindedBookCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FindedBookCard;
  const { book } = Astro2.props;
  const linkToGenre = new URL(`/Libros/1`, Astro2.url.origin);
  linkToGenre.searchParams.set("genre", book.genre);
  return renderTemplate`${maybeRenderHead()}<div class="finded-book-card astro-A5KZCAI2">
    
    <a class="portada me-3 align-self-center d-none d-sm-block astro-A5KZCAI2"${addAttribute(`/Libro/${book.ISBN}/${book.title}`, "href")}>
    
        <img${addAttribute(book.cover, "src")}${addAttribute(`Portada del libro ${book.title}`, "alt")}${addAttribute(book.title, "title")} class="astro-A5KZCAI2">
    </a>

    <div class="book-info flex-grow-1 d-flex flex-column astro-A5KZCAI2">

        <div class="title d-flex mb-2 mb-sm-0 astro-A5KZCAI2">

            <a${addAttribute(`/Libro/${book.ISBN}/${book.title}`, "href")} class="astro-A5KZCAI2">
        
                <h4 class="astro-A5KZCAI2">${book.title}</h4>
            </a>

            <div class="ms-auto astro-A5KZCAI2">

                ${renderComponent($$result, "SaveBookButton", SaveBook, { "client:load": true, "book": book, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/SaveBookButton/SaveBookButton.jsx", "client:component-export": "default", "class": "astro-A5KZCAI2" })}
            </div>
        </div>

        <div class="description d-flex gap-3 mb-2 mb-sm-0 astro-A5KZCAI2">

            <a class="portada d-block d-sm-none astro-A5KZCAI2"${addAttribute(`/Libro/${book.ISBN}/${book.title}`, "href")}>
    
                <img${addAttribute(book.cover, "src")}${addAttribute(`Portada del libro ${book.title}`, "alt")}${addAttribute(book.title, "title")} class="astro-A5KZCAI2">
            </a>

            <p class="astro-A5KZCAI2">${`${book.synopsis.split(" ").slice(0, 20).join(" ")}...`}</p>

        </div>

        <div class="details mt-auto d-flex flex-wrap column-gap-3 row-gap-1 astro-A5KZCAI2">

            <div class="details-item astro-A5KZCAI2">
                <span class="astro-A5KZCAI2">Genero: </span>
                <strong class="astro-A5KZCAI2">
                    <a${addAttribute(linkToGenre, "href")} class="astro-A5KZCAI2">${book.genre}</a> 
                </strong>
            </div>

            ${book.author && renderTemplate`<div class="details-item astro-A5KZCAI2">   
                    <span class="astro-A5KZCAI2">Autor: </span>
                    <strong class="astro-A5KZCAI2">${book.author?.name}</strong>
                </div>`}

            <!-- <div class="flex-grow-1">
                <span>Cantidad de paginas: </span>
                <strong>{book.pages}</strong>
            </div> -->
        </div>

    </div>
 
</div>`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/FindedBookCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const show = Astro2.url.searchParams.get("show");
  const search = Astro2.url.searchParams.get("search");
  const filters = {
    genre: Astro2.url.searchParams.get("genre"),
    pages: Astro2.url.searchParams.get("pages")
  };
  const result = searchBooks(search, filters);
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Resultados de la busqueda", "searchPlaceholder": search, "class": "astro-SQEKDMOK" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead()}<div class="astro-SQEKDMOK"${addAttribute(renderTransition($$result2, "GCV6Z2W5", "slide", ""), "data-astro-transition-scope")}>

        ${renderComponent($$result2, "BooksFilters", BooksFilters, { "client:load": true, "path": "/search", "pages": filters.pages, "genre": filters.genre, "queryParams": { search }, "total": result.length, "show": show, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/BooksFilters/BooksFilters", "client:component-export": "default", "class": "astro-SQEKDMOK" })}
    
        <div class="Books-container astro-SQEKDMOK">
            ${result.map(({ book }) => {
    return renderTemplate`${renderComponent($$result2, "FindedBookCard", $$FindedBookCard, { "book": book, "class": "astro-SQEKDMOK" })}`;
  })}
        </div>

    </div>


` })}`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/search/index.astro", "self");

const $$file = "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/search/index.astro";
const $$url = "/search";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
