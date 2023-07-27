import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderHead, f as renderSlot, g as renderTransition } from '../astro.4d3a9342.mjs';
import 'html-escaper';
/* empty css                         */import { useState, useEffect, useMemo } from 'react';
import Button$1 from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useStore } from '@nanostores/react';
import { persistentMap } from '@nanostores/persistent';
import { Button } from 'react-bootstrap';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useSensors, useSensor, PointerSensor, TouchSensor, DndContext, closestCenter } from '@dnd-kit/core';
import { useSortable, SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from '@dnd-kit/modifiers';
/* empty css                         *//* empty css                         */
//const SAVED_BOOKS = map({});


const SAVED_BOOKS = persistentMap('book:', {}, {

    encode: (value) => {
        return JSON.stringify(value)
    },

    decode: (value) => {
        try {

            return JSON.parse(value);
        } 
        catch(err) {

            console.log(err);
        }
    }
});




async function saveBook(key, book){

    const exist = SAVED_BOOKS.get()[key];

    if(!exist){

        SAVED_BOOKS.setKey(key, book);

        return {ok: true, message: 'Libro guardado'}
    }
    else {

        return {ok: false, message: 'Ya existe ese libro'}
    }
}


async function removeBook(key){

    const exist = SAVED_BOOKS.get()[key];

    if(exist){

        SAVED_BOOKS.setKey(key, undefined);
        // const books = {...SAVED_BOOKS.get()};

        // delete books[key];

        // SAVED_BOOKS.set(books);

        return {ok: true, message: 'Libro removido'}
    }
    else {

        return {ok: false, message: 'El libro no existe'}
    }
}


async function changeOrder(newOrderItems = []){

    //Aqui vendria bien un Object.groupBy

    const newState = newOrderItems.reduce((acc, [key, value], index) => {

        acc[key] = {
            ...value, order: index + 1
        };

        return acc;
    }, {});

    SAVED_BOOKS.set(newState);

    return {ok: true, message: 'Orden de los Libros cambiado'}
}


//? React Hook
function useSavedBooks(){

    return useStore(SAVED_BOOKS);
}

function SavedBookCard({
  book
}) {
  const remove = () => {
    removeBook(book.ISBN).then((result) => {
      console.log(result);
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "saved-book-card",
    children: [/* @__PURE__ */ jsx("img", {
      src: book.cover,
      alt: `Portada de ${book.title}`
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex-grow-1 d-flex flex-column",
      children: [/* @__PURE__ */ jsx("h5", {
        className: "title",
        children: book.title
      }), book.author && /* @__PURE__ */ jsxs("div", {
        className: "author mt-auto",
        children: [/* @__PURE__ */ jsx("span", {
          children: "Autor: "
        }), /* @__PURE__ */ jsx("strong", {
          children: book.author
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "ms-auto me-1 d-flex flex-column justify-content-center gap-3",
      children: [/* @__PURE__ */ jsx(Button, {
        className: "show-btn border-0 p-0 bg-transparent",
        variant: "outline-secondary",
        size: "lg",
        href: `/Libro/${book.ISBN}/${encodeURI(book.title)}`,
        title: "Ver mas",
        children: /* @__PURE__ */ jsx("i", {
          className: "bi bi-arrow-up-right-square-fill"
        })
      }), /* @__PURE__ */ jsx(Button, {
        className: "del-btn border-0 p-0 bg-transparent",
        variant: "outline-danger",
        size: "lg",
        title: "Quitar de la lista",
        onClick: remove,
        children: /* @__PURE__ */ jsx("i", {
          className: "bi bi-trash-fill"
        })
      })]
    })]
  });
}
__astro_tag_component__(SavedBookCard, "@astrojs/react");

function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: props.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsxs("li", {
    className: "sort-item p-1 rounded",
    ref: setNodeRef,
    style,
    children: [/* @__PURE__ */ jsx("button", {
      className: "sort-btn",
      ...attributes,
      ...listeners,
      title: "Mover",
      children: /* @__PURE__ */ jsx("i", {
        className: "bi bi-grip-vertical"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "sort-content",
      children: props.children
    })]
  });
}
__astro_tag_component__(SortableItem, "@astrojs/react");

function SortList({
  values = [],
  books = {}
}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items2 = Object.entries(books).sort(([keyA, bookA], [keyB, bookB]) => {
      return bookA.order - bookB.order;
    });
    setItems(items2);
  }, [books]);
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  const handleDragEnd = (e) => {
    const {
      active,
      over
    } = e;
    if (active.id !== over.id) {
      setItems((items2) => {
        const oldIndex = items2.findIndex(([key]) => key === active.id);
        const newIndex = items2.findIndex(([key]) => key === over.id);
        const newOrderItems = arrayMove(items2, oldIndex, newIndex);
        changeOrder(newOrderItems).then((result) => {
          console.log(result);
        });
        return newOrderItems;
      });
    }
  };
  return /* @__PURE__ */ jsx("ol", {
    className: "p-0 m-0",
    children: /* @__PURE__ */ jsx(DndContext, {
      sensors,
      collisionDetection: closestCenter,
      modifiers: [restrictToVerticalAxis, restrictToFirstScrollableAncestor],
      onDragEnd: handleDragEnd,
      autoScroll: false,
      children: /* @__PURE__ */ jsx(SortableContext, {
        items: items.map(([key]) => key),
        strategy: verticalListSortingStrategy,
        children: items.map(([key, value]) => {
          const book = value;
          return /* @__PURE__ */ jsx(SortableItem, {
            id: key,
            children: /* @__PURE__ */ jsx(SavedBookCard, {
              book
            })
          }, key);
        })
      })
    })
  });
}
__astro_tag_component__(SortList, "@astrojs/react");

function BooksImage(props) {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    children: /* @__PURE__ */ jsx("svg", {
      fill: "currentColor",
      version: "1.1",
      viewBox: "0 0 335.08 335.079",
      children: /* @__PURE__ */ jsx("g", {
        children: /* @__PURE__ */ jsx("g", {
          children: /* @__PURE__ */ jsx("path", {
            d: "M311.175,115.775c-1.355-10.186-1.546-27.73,7.915-33.621c0.169-0.108,0.295-0.264,0.443-0.398\r\n                        c7.735-2.474,13.088-5.946,8.886-10.618l-114.102-34.38L29.56,62.445c0,0-21.157,3.024-19.267,35.894\r\n                        c1.026,17.89,6.637,26.676,11.544,31l-15.161,4.569c-4.208,4.672,1.144,8.145,8.88,10.615c0.147,0.138,0.271,0.293,0.443,0.401\r\n                        c9.455,5.896,9.273,23.438,7.913,33.626c-33.967,9.645-21.774,12.788-21.774,12.788l7.451,1.803\r\n                        c-5.241,4.736-10.446,13.717-9.471,30.75c1.891,32.864,19.269,35.132,19.269,35.132l120.904,39.298l182.49-44.202\r\n                        c0,0,12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712,7.921-33.623c0.174-0.105,0.301-0.264,0.442-0.396\r\n                        c7.736-2.474,13.084-5.943,8.881-10.615l-7.932-2.395c5.29-3.19,13.236-11.527,14.481-33.183\r\n                        c0.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794C332.949,128.569,345.146,125.421,311.175,115.775z M158.533,115.354\r\n                        l30.688-6.307l103.708-21.312l15.451-3.178c-4.937,9.036-4.73,21.402-3.913,29.35c0.179,1.798,0.385,3.44,0.585,4.688\r\n                        L288.14,122.8l-130.897,32.563L158.533,115.354z M26.71,147.337l15.449,3.178l99.597,20.474l8.701,1.782l0,0l0,0l26.093,5.363\r\n                        l1.287,40.01L43.303,184.673l-13.263-3.296c0.195-1.25,0.401-2.89,0.588-4.693C31.44,168.742,31.651,156.373,26.71,147.337z\r\n                        M20.708,96.757c-0.187-8.743,1.371-15.066,4.52-18.28c2.004-2.052,4.369-2.479,5.991-2.479c0.857,0,1.474,0.119,1.516,0.119\r\n                        l79.607,25.953l39.717,12.949l-1.303,40.289L39.334,124.07l-5.88-1.647c-0.216-0.061-0.509-0.103-0.735-0.113\r\n                        C32.26,122.277,21.244,121.263,20.708,96.757z M140.579,280.866L23.28,247.98c-0.217-0.063-0.507-0.105-0.733-0.116\r\n                        c-0.467-0.031-11.488-1.044-12.021-25.544c-0.19-8.754,1.376-15.071,4.519-18.288c2.009-2.052,4.375-2.479,5.994-2.479\r\n                        c0.859,0,1.474,0.115,1.519,0.115c0,0,0.005,0,0,0l119.316,38.908L140.579,280.866z M294.284,239.459\r\n                        c0.185,1.804,0.391,3.443,0.591,4.693l-147.812,36.771l1.292-40.01l31.601-6.497l4.667,1.129l17.492-5.685l80.631-16.569\r\n                        l15.457-3.18C293.261,219.146,293.466,231.517,294.284,239.459z M302.426,185.084c-0.269,0.006-0.538,0.042-0.791,0.122\r\n                        l-11.148,3.121l-106.148,29.764l-1.298-40.289l34.826-11.359l84.327-27.501c0.011-0.005,4.436-0.988,7.684,2.315\r\n                        c3.144,3.214,4.704,9.537,4.52,18.28C313.848,184.035,302.827,185.053,302.426,185.084z"
          })
        })
      })
    })
  });
}
__astro_tag_component__(BooksImage, "@astrojs/react");

function ReadingList() {
  const savedBooks = useSavedBooks();
  useEffect(() => {
  }, []);
  const numberOfBooks = useMemo(() => {
    return Object.keys(savedBooks).length;
  }, [savedBooks]);
  return /* @__PURE__ */ jsxs("div", {
    className: "Reading-list",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "pt-3 pb-2 mb-4 d-flex align-items-baseline",
      children: [/* @__PURE__ */ jsxs("h3", {
        className: "Reading-list-title m-0",
        children: [" ", /* @__PURE__ */ jsx("i", {
          className: "bi bi-book-half"
        }), " Lista de lectura"]
      }), /* @__PURE__ */ jsxs("h5", {
        className: "Reading-list-total m-0 ms-auto",
        children: [/* @__PURE__ */ jsx("span", {
          children: "Total: "
        }), /* @__PURE__ */ jsx("strong", {
          children: numberOfBooks
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "Reading-list-content d-flex flex-column",
      children: /* @__PURE__ */ jsx(SortList, {
        books: savedBooks
      })
    }), /* @__PURE__ */ jsx(BooksImage, {
      className: "books-img"
    })]
  });
}
__astro_tag_component__(ReadingList, "@astrojs/react");

function CustomOffcanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(Offcanvas, {
      show,
      onHide: handleClose,
      placement: "end",
      scroll: true,
      backdrop: false,
      id: "Custom-offcanvas",
      style: {
        zIndex: 3100
      },
      children: [/* @__PURE__ */ jsx(Offcanvas.Header, {
        closeButton: true
      }), /* @__PURE__ */ jsx(Offcanvas.Body, {
        className: "py-0",
        children: /* @__PURE__ */ jsx(ReadingList, {})
      })]
    }), /* @__PURE__ */ jsx(Button$1, {
      className: "bg-transparent border-0 p-0 fs-1",
      variant: "primary",
      onClick: handleShow,
      title: "Lista de lectura",
      children: /* @__PURE__ */ jsx("i", {
        className: "bi bi-list"
      })
    })]
  });
}
__astro_tag_component__(CustomOffcanvas, "@astrojs/react");

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const CONTACT = {
    name: "Fraco Javier Alvarez",
    linkedin: "https://www.linkedin.com/in/franco-javier-alvarez/",
    github: "https://github.com/midudev/pruebas-tecnicas/pull/75"
  };
  return renderTemplate`${renderComponent($$result, "astro-footer", "astro-footer", { "class": "astro-SZ7XMLTE" }, { "default": () => renderTemplate`
    ${maybeRenderHead()}<footer id="Main-footer" class="astro-SZ7XMLTE">

        <div class="footer-content astro-SZ7XMLTE">

            <p class="p-0 m-0 astro-SZ7XMLTE">
                Hecho con <i class="bi bi-suit-heart-fill astro-SZ7XMLTE"${addAttribute({ color: "#f00" }, "style")}></i> por:
                <strong class="astro-SZ7XMLTE">
                    <a${addAttribute(CONTACT.linkedin, "href")} target="_blank" rel="noopener noreferrer"${addAttribute({ color: "#F3B61F" }, "style")} class="astro-SZ7XMLTE">
                        ${CONTACT.name}
                    </a>
                </strong>
            </p>

            <a${addAttribute(CONTACT.github, "href")} target="_blank" rel="noopener noreferrer" class="astro-SZ7XMLTE">
                <i class="bi bi-github astro-SZ7XMLTE"></i>
                <span class=" astro-SZ7XMLTE">Github</span>
            </a>
        </div>

    </footer>
` })}`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true">
<meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>
`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$RootLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, searchPlaceholder = "" } = Astro2.props;
  return renderTemplate`<html lang="es" data-bs-theme="dark">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>

		<meta property="og:type" content="website">
		<meta property="og:title" content="Libros - Midudev prueba tecnica 1">
		<meta property="og:url" content="https://libros1812.netlify.app/">
		<meta property="og:description" content="Desarrollo de la prueba tecnica nº 1 de Midudev hecha con Astro y React">
		<meta property="og:image" content="/libros.webp">
		<meta property="og:image:width" content="1200">
		<meta property="og:image:height" content="630">

		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="Libros - Midudev prueba tecnica 1">
		<meta name="twitter:description" content="Desarrollo de la prueba tecnica nº 1 de Midudev hecha con Astro y React">
		<meta name="twitter:image" content="/libros.webp">

		<title>${title}</title>

		${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}
	${renderHead()}</head>
	<body>

		<nav class="navbar p-3" id="Main-nav">
			<div class="container-fluid gap-4 p-0">

				<a class="navbar-brand order-1" href="/Libros/1">
				
					<img src="/logo-1.png" alt="">
				</a>

				<form class="navbar-search d-flex order-3 order-sm-2 flex-grow-1 flex-sm-grow-0" role="search" action="/search">
					<input class="form-control me-2" type="search" name="search"${addAttribute(searchPlaceholder, "placeholder")}>

					<button class="btn btn-success" type="submit">Buscar</button>
				</form>

				<div class="d-block d-lg-none order-2 order-sm-3">

					${renderComponent($$result, "CustomOffcanvas", CustomOffcanvas, { "client:load": true, "client:component-hydration": "load", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/CustomOffcanvas/CustomOffcanvas.jsx", "client:component-export": "default" })}
				</div>
			</div>
		</nav>

		<div class="container-fluid">

			<div class="row">
	
				<main class="px-3 col-md-12 col-lg-8">

					<div class="px-2">

						${renderSlot($$result, $$slots["default"])}

					</div>
	
					
				</main>
				
				<section class="Reading-list-container d-none d-lg-block col-4">
					
					${renderComponent($$result, "ReadingList", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/components/react/ReadingList/ReadingList.jsx", "client:component-export": "default" })}
				</section>
				
			</div>
			
		</div>
		
		${renderComponent($$result, "Footer", $$Footer, {})}
	

</body></html>`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/layouts/RootLayout.astro", void 0);

// https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/index.ts
// https://github.com/withastro/astro/blob/main/packages/astro/components/viewtransitions.css

const KEY_FRAMES = {

    MOVE_TO_LEFT: 'Slide-To-Left',
    MOVE_TO_RIGHT: 'Slide-To-Right',
    MOVE_FROM_LEFT: 'Slide-From-Left',
    MOVE_FROM_RIGHT: 'Slide-From-Right'
};


function customSlide({duration = '300ms'} = {}){

    return {

        // Navegar - Hacer click en un enlace
        forwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_RIGHT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.MOVE_FROM_LEFT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: duration ?? '300ms',
					fillMode: 'both',
				},
			],
		},

        // Atras - Regresar a la pagina anterior con el boton del navegador
		backwards: {

			old: [
				{
					name: KEY_FRAMES.MOVE_TO_LEFT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
					fillMode: 'both',
				},
			],

			new: [
				{
					name: KEY_FRAMES.MOVE_FROM_RIGHT,
					duration: duration ?? '300ms',
					easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    delay: duration ?? '300ms',
					fillMode: 'both',
				},
			],
		},
    }
}

function SadFaceImage(props) {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    children: /* @__PURE__ */ jsx("svg", {
      fill: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("g", {
        id: "Face_Frown",
        "data-name": "Face Frown",
        children: /* @__PURE__ */ jsxs("g", {
          children: [/* @__PURE__ */ jsx("path", {
            d: "M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z"
          }), /* @__PURE__ */ jsx("path", {
            d: "M17.206,16.481a6.033,6.033,0,0,0-10.412,0,.5.5,0,0,0,.863.5,5.033,5.033,0,0,1,8.685,0,.5.5,0,0,0,.864-.5Z"
          }), /* @__PURE__ */ jsx("circle", {
            cx: "9",
            cy: "9.011",
            r: "1.25"
          }), /* @__PURE__ */ jsx("circle", {
            cx: "15",
            cy: "9.011",
            r: "1.25"
          })]
        })
      })
    })
  });
}
__astro_tag_component__(SadFaceImage, "@astrojs/react");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Pagina no encontrada", "class": "astro-ZETDM5MD" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead()}<div class="not-found-message astro-ZETDM5MD"${addAttribute(renderTransition($$result2, "I6M2GESD", customSlide(), ""), "data-astro-transition-scope")}>
    
        <h1 class="astro-ZETDM5MD">PAGINA NO ENCONTRADA</h1>
        
        ${renderComponent($$result2, "SadFaceImage", SadFaceImage, { "className": "sad-face-image astro-ZETDM5MD" })}

        <h2 class="title-404 astro-ZETDM5MD">404</h2>

        ${renderComponent($$result2, "go-back-button", "go-back-button", { "class": "mt-5 astro-ZETDM5MD" }, { "default": () => renderTemplate`

            <button class="btn btn-primary btn-lg astro-ZETDM5MD">Regresar</button>

        ` })}
    </div>

` })}

`;
}, "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/404.astro", "self");

const $$file = "H:/PROGRAMACION/pruebas_tecnicas_midudev/pruebas/01-reading-list/FrancoJavierGadea/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$RootLayout as $, _404 as _, customSlide as c, removeBook as r, saveBook as s, useSavedBooks as u };
