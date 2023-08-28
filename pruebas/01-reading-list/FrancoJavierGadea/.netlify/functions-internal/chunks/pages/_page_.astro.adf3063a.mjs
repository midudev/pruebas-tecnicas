import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, g as renderTransition } from '../astro.4d3a9342.mjs';
import 'html-escaper';
import { g as getAllGenres, a as getBooksBy } from './_ISBN_.js.45588133.mjs';
import { useState, useEffect, useMemo } from 'react';
import { u as useSavedBooks, s as saveBook, r as removeBook, $ as $$RootLayout, c as customSlide } from './404.astro.db58e36d.mjs';
/* empty css                            */import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                            */import { Accordion, Form, Button } from 'react-bootstrap';
import { persistentAtom } from '@nanostores/persistent';
/* empty css                         */
function SaveBook({
  book
}) {
  const [isSaved, setIsSaved] = useState(false);
  const savedBooks = useSavedBooks();
  useEffect(() => {
    const exist = savedBooks[book.ISBN];
    if (exist) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedBooks]);
  const numberOfBooks = useMemo(() => {
    return Object.keys(savedBooks).length;
  }, [savedBooks]);
  const save = () => {
    const {
      ISBN,
      title,
      cover,
      author
    } = book;
    saveBook(ISBN, {
      ISBN,
      title,
      cover,
      author: author?.name,
      order: numberOfBooks + 1
    }).then((result) => {
      console.log(result);
      if (result.ok)
        setIsSaved(true);
    });
  };
  const remove = () => {
    removeBook(book.ISBN).then((result) => {
      console.log(result);
      if (result.ok)
        setIsSaved(false);
    });
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: !isSaved ? /* @__PURE__ */ jsx("button", {
      className: "save-button",
      onClick: save,
      title: "Guardar",
      children: /* @__PURE__ */ jsx("i", {
        className: "bi bi-bookmark-plus-fill"
      })
    }) : /* @__PURE__ */ jsx("button", {
      className: "remove-button",
      onClick: remove,
      title: "Quitar de la lista"
    })
  });
}
__astro_tag_component__(SaveBook, "@astrojs/react");

const $$Astro$2 = createAstro();
const $$BookCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookCard;
  const { book } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="book-card astro-PYV5DC2B">
    
    <a${addAttribute(`/Libro/${book.ISBN}/${book.title}`, "href")} class="astro-PYV5DC2B">
    
        <img${addAttribute(book.cover, "src")}${addAttribute(`Portada del libro ${book.title}`, "alt")}${addAttribute(book.title, "title")} class="astro-PYV5DC2B">
    
    </a>

    <div class="controls pt-1 ps-2 astro-PYV5DC2B">
        <span class="astro-PYV5DC2B">${book.title}</span>
        ${renderComponent($$result, "SaveBookButton", SaveBook, { "client:load": true, "book": book, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/SaveBookButton/SaveBookButton.jsx", "client:component-export": "default", "class": "astro-PYV5DC2B" })}
    </div>
</div>`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/BookCard.astro", void 0);

function generatePagination(total, options = {}){

    const {
        path = '',

        origin = 'http://localhost',

        queryParams = {},

        size = total,

        currentPage = 1

    } = options;


    const pages = Array.from({length: total}).map((_, i) => i + 1);

    //Slice
    const n = Math.ceil(size / 2);

    const from = (() => {

        if(currentPage < n){

            return 0;
        } 

        if(currentPage >= n && currentPage <= total - n){

            return currentPage - n;
        }

        if(currentPage > total - n){

            return total - size;
        }
    })();

    const to = from + size;


    //Create links
    const links = pages.slice(from, to).map((page) => {

        const url = new URL(`${path}/${page}`, origin);

        Object.entries(queryParams).forEach(([key, value]) => {

            if(value) url.searchParams.set(key, value);
        });

        return {
            url,
            page
        };
    });

    return {
        links, 
        
        next: links.find((link) => link.page === currentPage + 1),

        prev: links.find((link) => link.page === currentPage - 1),

        current: links.find((link) => link.page === currentPage)
    };
}

const $$Astro$1 = createAstro();
const $$BooksPagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BooksPagination;
  const { current, total, path = "", queryParams = {} } = Astro2.props;
  const pagination = generatePagination(total, {
    path,
    origin: Astro2.url.origin,
    queryParams,
    currentPage: current,
    size: 5
  });
  return renderTemplate`${renderComponent($$result, "app-pagination", "app-pagination", {}, { "default": () => renderTemplate`

    ${maybeRenderHead()}<nav class="p-4">
        <ul class="pagination justify-content-center">
    
            <li class="page-item">
                <a${addAttribute(pagination.prev?.url.href, "href")} title="Anterior"${addAttribute(["page-link", [{ disabled: !pagination.prev }]], "class:list")}>
                    <i class="bi bi-chevron-left"></i>
                </a>
            </li>
    
            ${pagination.links.map((link) => {
    return renderTemplate`<li class="page-item">
                        <a${addAttribute(link.url.href, "href")}${addAttribute(["page-link", [{ active: current === link.page }]], "class:list")}>${link.page}</a>
                    </li>`;
  })}
    
            <li class="page-item">
                <a${addAttribute(pagination.next?.url.href, "href")} title="Siguiente"${addAttribute(["page-link", [{ disabled: !pagination.next }]], "class:list")}>
                    <i class="bi bi-chevron-right"></i>
                </a>
            </li>
        </ul>
    </nav>

` })}`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/BooksPagination.astro", void 0);

//?------- Show / hide UI Elements between pages -------------------------------------


const SHOW = persistentAtom('show', null, {

    decode: (value) => {

        return value; 
    }
});

function setShow(value){

    SHOW.set(value);
}

const ACCORDION_ITEMS = {
  filters: "filters"
};
function BooksFilters(props) {
  const [pages, setPages] = useState(props.pages || 1500);
  const [genre, setGenre] = useState(props.genre || "Todos");
  const handlerSelect = (eventKey) => {
    setShow(eventKey);
  };
  return /* @__PURE__ */ jsx(Accordion, {
    id: "Accordion-filters",
    onSelect: handlerSelect,
    defaultActiveKey: props.show,
    children: /* @__PURE__ */ jsxs(Accordion.Item, {
      eventKey: ACCORDION_ITEMS.filters,
      children: [/* @__PURE__ */ jsxs(Accordion.Header, {
        className: "d-flex align-items-baseline pt-3 pb-2",
        children: [/* @__PURE__ */ jsxs("h3", {
          className: "title m-0",
          children: [" ", /* @__PURE__ */ jsx("i", {
            className: "bi bi-funnel-fill"
          }), " Filtros"]
        }), /* @__PURE__ */ jsxs("h5", {
          className: "Reading-list-total  m-0 ms-auto",
          children: [/* @__PURE__ */ jsx("span", {
            children: "Libros disponibles: "
          }), /* @__PURE__ */ jsx("strong", {
            children: props.total || 0
          })]
        })]
      }), /* @__PURE__ */ jsx(Accordion.Body, {
        children: /* @__PURE__ */ jsxs(Form, {
          className: "Books-filters",
          method: "get",
          action: props.path,
          children: [/* @__PURE__ */ jsxs(Form.Group, {
            className: "form-pages flex-grow-1 flex-md-grow-0",
            children: [/* @__PURE__ */ jsxs(Form.Label, {
              children: ["Paginas: ", /* @__PURE__ */ jsx("strong", {
                children: pages
              })]
            }), /* @__PURE__ */ jsx(Form.Range, {
              min: 50,
              max: 1500,
              step: 10,
              value: pages,
              name: "pages",
              onChange: (e) => setPages(Number(e.currentTarget.value))
            })]
          }), /* @__PURE__ */ jsxs(Form.Group, {
            className: "form-genre flex-grow-1 flex-md-grow-0",
            children: [/* @__PURE__ */ jsx(Form.Label, {
              children: "Generos"
            }), /* @__PURE__ */ jsxs(Form.Select, {
              value: genre,
              name: "genre",
              onChange: (e) => setGenre(e.currentTarget.value),
              children: [/* @__PURE__ */ jsx("option", {
                value: "Todos",
                children: "Todos"
              }), getAllGenres().map((value) => {
                return /* @__PURE__ */ jsx("option", {
                  value,
                  children: value
                }, value);
              })]
            })]
          }), props.queryParams && Object.entries(props.queryParams).map(([key, value]) => {
            return /* @__PURE__ */ jsx("input", {
              type: "hidden",
              name: key,
              value
            }, key);
          }), /* @__PURE__ */ jsx("input", {
            type: "hidden",
            name: "show",
            value: ACCORDION_ITEMS.filters
          }), /* @__PURE__ */ jsx(Button, {
            className: "flex-grow-1 flex-md-grow-0",
            variant: "primary",
            type: "submit",
            children: "Aplicar"
          })]
        })
      })]
    })
  });
}
__astro_tag_component__(BooksFilters, "@astrojs/react");

const $$Astro = createAstro();
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const show = Astro2.url.searchParams.get("show");
  const { page } = Astro2.params;
  const currentPage = Number(page);
  if (!currentPage)
    return Astro2.redirect("/404");
  if (currentPage < 1)
    return Astro2.redirect("/404");
  const BOOKS_PER_PAGE = 12;
  const queries = {
    genre: Astro2.url.searchParams.get("genre"),
    pages: Astro2.url.searchParams.get("pages")
  };
  const result = getBooksBy(queries);
  const total = Math.ceil(result.length / BOOKS_PER_PAGE);
  const start = (currentPage - 1) * BOOKS_PER_PAGE;
  const end = start + BOOKS_PER_PAGE;
  const books = result.slice(start, end);
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Libros", "class": "astro-AC43BG3D" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead()}<div class="astro-AC43BG3D">

        ${renderComponent($$result2, "BooksFilters", BooksFilters, { "client:load": true, "path": "/Libros/1", "pages": queries.pages, "genre": queries.genre, "total": result.length, "show": show, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/BooksFilters/BooksFilters.jsx", "client:component-export": "default", "class": "astro-AC43BG3D" })}
    
        ${result.length !== 0 && renderTemplate`<div class="Books-container astro-AC43BG3D"${addAttribute(renderTransition($$result2, "H4TZVB5N", customSlide(), ""), "data-astro-transition-scope")}>
                ${books.map(({ book }) => {
    return renderTemplate`${renderComponent($$result2, "BookCard", $$BookCard, { "book": book, "class": "astro-AC43BG3D" })}`;
  })}
            </div>${renderComponent($$result2, "BooksPagination", $$BooksPagination, { "path": "/Libros", "queryParams": queries, "current": currentPage, "total": total, "class": "astro-AC43BG3D" })}`}

    </div>
    
` })}`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/Libros/[page].astro", "self");

const $$file = "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/Libros/[page].astro";
const $$url = "/Libros/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { BooksFilters as B, SaveBook as S, _page_ as _ };
