import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../astro.4d3a9342.mjs';
import 'html-escaper';
import { u as useSavedBooks, s as saveBook, r as removeBook, $ as $$RootLayout } from './404.astro.db58e36d.mjs';
import { b as getBooksByISBN } from './_ISBN_.js.45588133.mjs';
import { useState, useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         */import 'react-bootstrap/Button';
import 'react-bootstrap/Offcanvas';
import '@nanostores/react';
import '@nanostores/persistent';
import '@dnd-kit/core';
import '@dnd-kit/sortable';
import '@dnd-kit/utilities';
import '@dnd-kit/modifiers';
/* empty css                         *//* empty css                         */
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
    children: !isSaved ? /* @__PURE__ */ jsxs(Button, {
      variant: "success",
      onClick: save,
      title: "Guardar",
      children: [/* @__PURE__ */ jsx("i", {
        className: "bi bi-bookmark-plus-fill"
      }), " Agregar a la lista"]
    }) : /* @__PURE__ */ jsxs(Button, {
      variant: "danger",
      onClick: remove,
      title: "Quitar de la lista",
      children: [/* @__PURE__ */ jsx("i", {
        className: "bi bi-trash-fill"
      }), " Quitar de la lista"]
    })
  });
}
__astro_tag_component__(SaveBook, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$ShareBook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShareBook;
  const { link, message = "" } = Astro2.props;
  const twitter = new URL("https://twitter.com/intent/tweet");
  twitter.searchParams.set("text", `${message}

${link}`);
  const whatsapp = new URL("https://web.whatsapp.com/send");
  whatsapp.searchParams.set("text", `${message}

${link}`);
  const telegram = new URL("https://t.me/share/url");
  telegram.searchParams.set("url", link);
  telegram.searchParams.set("text", message);
  const mail = encodeURI(`mailto:?body=${message}

${link}`);
  return renderTemplate`${maybeRenderHead()}<footer class="astro-V6EMA2CU">
    
    <div class="d-flex gap-4 align-items-baseline astro-V6EMA2CU">

        <h5 class="astro-V6EMA2CU">Compartelo:</h5>
        
        <a${addAttribute(twitter.href, "href")} target="_blank" rel="noopener noreferrer" title="Compartir en twitter"${addAttribute({ color: "#1d9bf0" }, "style")} class="astro-V6EMA2CU">

            <i class="bi bi-twitter astro-V6EMA2CU"></i>
        </a>

        <a${addAttribute(whatsapp.href, "href")} target="_blank" rel="noopener noreferrer" title="Compartir en whatsapp"${addAttribute({ color: "#25d366" }, "style")} class="astro-V6EMA2CU">
        
            <i class="bi bi-whatsapp astro-V6EMA2CU"></i>
        </a>


        <a${addAttribute(telegram.href, "href")} target="_blank" rel="noopener noreferrer" title="Compartir en telegram"${addAttribute({ color: "#0088cc" }, "style")} class="astro-V6EMA2CU">
        
            <i class="bi bi-telegram astro-V6EMA2CU"></i>
        </a>

        <a${addAttribute(mail, "href")} target="_blank" rel="noopener noreferrer" title="Compartir por mail"${addAttribute({ color: "#a7a7a7" }, "style")} class="astro-V6EMA2CU">
        
            <i class="bi bi-envelope astro-V6EMA2CU"></i>
        </a>
    </div>
</footer>`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/ShareBook.astro", void 0);

const $$Astro = createAstro();
const $$title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$title;
  const { ISBN, title } = Astro2.params;
  const result = getBooksByISBN(ISBN);
  if (result.length === 0)
    return Astro2.redirect("/404");
  const book = result[0].book;
  const linkToGenre = new URL(`/Libros/1`, Astro2.url.origin);
  linkToGenre.searchParams.set("genre", book.genre);
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": title, "class": "astro-PCALZDPX" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead()}<div class="Book-container container astro-PCALZDPX">

        <div class="row astro-PCALZDPX">

            <section class="col-md-12 col-lg-5 astro-PCALZDPX">

                <div class="portada astro-PCALZDPX">

                    <img${addAttribute(book.cover, "src")}${addAttribute(`Portada de ${book.title}`, "alt")} class="astro-PCALZDPX">
    
                    ${renderComponent($$result2, "SaveBookButton", SaveBook, { "client:load": true, "book": book, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/SaveBookButton2/SaveBookButton2.jsx", "client:component-export": "default", "class": "astro-PCALZDPX" })}
                </div>

            </section>
            
            <section class="col-md-12 col-lg-7 astro-PCALZDPX">

                <h1 class="title text-center mt-4 text-lg-start mt-lg-0 astro-PCALZDPX">${title}</h1>

                <div class="description astro-PCALZDPX">
                    <h5 class="description-title pb-2 mb-2 astro-PCALZDPX">Descripcion</h5>
                    ${book.synopsis.split("\n").map((text) => {
    return renderTemplate`<p class="astro-PCALZDPX">${text}</p>`;
  })}
                </div>

                <div class="details astro-PCALZDPX">

                    <h5 class="details-title pb-2 mb-2 astro-PCALZDPX">Detalles</h5>

                    <div class="details-content astro-PCALZDPX">

                        <div class="details-item astro-PCALZDPX">
                            <span class="astro-PCALZDPX">Genero: </span>
                            <strong class="astro-PCALZDPX">
                                <a${addAttribute(linkToGenre, "href")} class="astro-PCALZDPX">${book.genre}</a> 
                            </strong>
                        </div>
    
                        ${book.author && renderTemplate`<div class="details-item astro-PCALZDPX">   
                                <span class="astro-PCALZDPX">Autor: </span>
                                <strong class="astro-PCALZDPX">${book.author?.name}</strong>
                            </div>`}
    
                        <div class="details-item astro-PCALZDPX">
                            <span class="astro-PCALZDPX">Cantidad de paginas: </span>
                            <strong class="astro-PCALZDPX">${book.pages}</strong>
                        </div>

                        <div class="details-item astro-PCALZDPX">
                            <span class="astro-PCALZDPX">ISBN:</span>
                            <strong class="astro-PCALZDPX">${book.ISBN}</strong>
                        </div>

                        <div class="details-item astro-PCALZDPX">
                            <span class="astro-PCALZDPX">Año de publicacion:</span>
                            <strong class="astro-PCALZDPX">${book.year}</strong>
                        </div>
                    </div>

                </div>

                ${renderComponent($$result2, "ShareBook", $$ShareBook, { "link": Astro2.url.href, "message": `Estoy leyendo ${book.title} \u{1F600}`, "class": "astro-PCALZDPX" })}
            </section>
        </div>

    </div>
    
` })}`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/Libro/[ISBN]/[title].astro", void 0);

const $$file = "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/Libro/[ISBN]/[title].astro";
const $$url = "/Libro/[ISBN]/[title]";

export { $$title as default, $$file as file, $$url as url };
