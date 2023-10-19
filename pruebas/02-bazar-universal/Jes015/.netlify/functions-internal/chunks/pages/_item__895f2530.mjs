import { s as styles, a as styles$1, b as styles$2 } from '../index.4cf3e048_309127a8.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useId, useState } from 'react';
import useSWR from 'swr';
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_b406c3d0.mjs';

const CustomImage = ({ src, width, height, alt, className }) => {
  const img = useRef();
  const imgContainer = useRef();
  useEffect(() => {
    if (img.current?.complete) {
      imgContainer.current?.classList.remove(styles["img--loading"]);
      img.current?.classList.add(styles["img--loaded"]);
      return;
    }
    img.current?.addEventListener("load", () => {
      img.current?.classList.add(styles["img--loaded"]);
      imgContainer.current?.classList.remove(styles["img--loading"]);
    });
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: ["overflow-hidden rounded-md relative", styles["img--loading"], width, height, className].join(" "),
      ref: imgContainer,
      children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full h-full object-cover hidden",
          ref: img,
          ...{ src, alt }
        }
      )
    }
  );
};

const getFrontRoutes = () => {
  const frontRoutes = {
    home: "/",
    items: "/items",
    item(productId) {
      return `/item/${productId}`;
    }
  };
  return frontRoutes;
};
const getBackRoutes = () => {
  const backRoutes = {
    items(searchParam) {
      return `/api/items?q=${searchParam}`;
    },
    item(itemId) {
      return `/api/items/${itemId}`;
    }
  };
  return backRoutes;
};

const swrFetcher = (url) => fetch(url).then((r) => r.json());

class CommunicationEvent {
  name;
  constructor(name) {
    this.name = `custom:${name}`;
  }
  listenEvent(callback) {
    document.addEventListener(this.name, callback);
  }
  sendMessage(payload) {
    const event = new CustomEvent(this.name, { detail: payload });
    document.dispatchEvent(event);
  }
  clearEvent(callback) {
    document.removeEventListener(this.name, callback);
  }
}

const SearchService = new CommunicationEvent("searchService");

const IconSearch = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" })
    }
  );
};

const Loader = () => {
  return /* @__PURE__ */ jsxs("div", { className: styles$1["dot-spinner"], children: [
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] }),
    /* @__PURE__ */ jsx("div", { className: styles$1["dot-spinner__dot"] })
  ] });
};

const ProductCategories = {
  smartphones: "smartphones",
  laptops: "laptops",
  fragrances: "fragrances",
  skincare: "skincare",
  groceries: "groceries",
  "home-decoration": "home-decoration"
};

const Product = ({ as, data, mode, containerDirection = "flex-col", imageSizeStyles = "w-[8.4rem]", showSideImages = false, sideImagesSize, titleStyles, showBuyButton = false, containerGridTemplateArea, gridTemplateColumns }) => {
  const CustomComponent = as;
  return /* @__PURE__ */ jsxs(
    CustomComponent,
    {
      style: {
        display: "grid",
        gridTemplateAreas: containerGridTemplateArea,
        gridTemplateColumns
      },
      className: ["flex gap-2", styles$2["product"], containerDirection].join(" "),
      ...as === "a" ? { href: getFrontRoutes().item(data.id) } : {},
      children: [
        mode === "all" && /* @__PURE__ */ jsxs(
          "section",
          {
            style: {
              gridArea: "productData"
            },
            className: "flex-grow flex flex-col gap-1",
            children: [
              /* @__PURE__ */ jsx("header", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("h3", { className: ["text-[1.4rem] drop-shadow-text font-bold", titleStyles].join(" "), children: data.title }) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-xs", children: data.description }) }),
              /* @__PURE__ */ jsxs("footer", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-base drop-shadow-text capitalize", children: [
                  data.stock,
                  " available"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-xl drop-shadow-text font-bold", children: [
                  data.price,
                  "$"
                ] })
              ] })
            ]
          }
        ),
        mode === "min" && /* @__PURE__ */ jsx(
          "section",
          {
            style: {
              gridArea: "productData"
            },
            children: /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("span", { className: "text-base drop-shadow-text capitalize", children: data.title }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "section",
          {
            style: {
              gridArea: "images"
            },
            className: data.images ? "grid gap-4" : "",
            children: showSideImages ? /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex gap-2",
                children: [
                  /* @__PURE__ */ jsx(
                    CustomImage,
                    {
                      src: data.thumbnail,
                      alt: `${data.title} image`,
                      className: ["flex-[5] w-full h-full <aspect-[1/1]", imageSizeStyles].join(" ")
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex-[3] flex flex-col gap-2", children: data.images.slice(2, 5)?.map((sideImage) => /* @__PURE__ */ jsx(
                    CustomImage,
                    {
                      src: sideImage,
                      alt: `${data.title} image`,
                      className: [sideImagesSize].join(" ")
                    },
                    sideImage
                  )) })
                ]
              }
            ) : /* @__PURE__ */ jsx(
              CustomImage,
              {
                src: data.thumbnail,
                alt: `${data.title} image`,
                className: ["aspect-[1/1]", imageSizeStyles].join(" ")
              }
            )
          }
        ),
        showBuyButton && /* @__PURE__ */ jsx(
          "section",
          {
            className: "flex justify-center w-full",
            style: {
              gridArea: "productButtons"
            },
            children: /* @__PURE__ */ jsx("button", { className: "bg-white drop-shadow-text text-black w-full p-3 rounded-md font-bold", children: "BUY" })
          }
        )
      ]
    }
  );
};

const ProductItem = ({ productId }) => {
  const { data, isLoading } = useSWR(getBackRoutes().item(productId), swrFetcher);
  if (data == null && !isLoading) {
    return "error";
  }
  if (isLoading) {
    return /* @__PURE__ */ jsx(Loader, {});
  }
  if (data != null && "error" in data) {
    return data.error;
  }
  return /* @__PURE__ */ jsx(
    Product,
    {
      as: "div",
      containerGridTemplateArea: '"productData" "images" "productButtons"',
      data: data?.productFound,
      mode: "all",
      containerDirection: "flex-col",
      titleStyles: "text-[2.2em]",
      showSideImages: true,
      showBuyButton: true
    }
  );
};

const inputNames = {
  search: "search"
};
const SearchBox = ({ label, containerStyles }) => {
  const inputId = useId();
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (getFrontRoutes().items !== location.pathname)
      return;
    const newSearchTitle = location.search.split("=")[1].replaceAll("+", " ").replaceAll("%C3%", "ñ");
    document.title = `${newSearchTitle} - Midu Bazar`;
    if (inputRef.current != null) {
      inputRef.current.value = newSearchTitle;
    }
    if (query === "")
      return;
    const newQuery = new URLSearchParams(location.search);
    SearchService.sendMessage(newQuery);
  }, [query]);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get(inputNames.search);
    if (!inputValue)
      return;
    const newQuery = new URLSearchParams();
    newQuery.append("search", inputValue);
    const queryParsed = newQuery.toString();
    const newUrl = new URL(location.origin);
    newUrl.pathname = getFrontRoutes().items;
    newUrl.search = queryParsed;
    if (location.pathname === getFrontRoutes().items) {
      setQuery(inputValue);
      history.pushState(null, "", newUrl);
    } else {
      location.href = newUrl.toString();
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: containerStyles ?? "w-full sm:w-full self-center",
      children: /* @__PURE__ */ jsxs("form", { onSubmit: handleOnSubmit, className: "w-full", children: [
        label != null && /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("label", { className: "drop-shadow-text", htmlFor: inputId, children: label }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1 w-full pl-1 bg-input drop-shadow-input border border-primary rounded-[0.2em]", children: [
          /* @__PURE__ */ jsx(
            IconSearch,
            {
              className: [
                "w-7 drop-shadow-text"
              ].join(" ")
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              id: inputId,
              name: inputNames.search,
              className: [
                "bg-transparent outline-0 p-2 w-full"
              ].join(" "),
              type: "text"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { className: "hidden", children: "submit" })
      ] })
    }
  );
};

const $$Astro$2 = createAstro();
const $$GlobalHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GlobalHeader;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center gap-5 border border-primary p-3 bg-secondary" data-astro-cid-p2juhabl><a${addAttribute(getFrontRoutes().home, "href")} class="flex flex-col gap-1 sm:gap-2 items-center justify-center header__title drop-shadow-text font-bold whitespace-[balance]" data-astro-cid-p2juhabl><span class="text-[0.8em] leading-3" data-astro-cid-p2juhabl>Midu</span><span class="leading-3" data-astro-cid-p2juhabl>Bazar</span></a>${renderComponent($$result, "SearchBox", SearchBox, { "client:load": true, "containerStyles": "w-[100%] sm:w-[60%] self-center", "client:component-hydration": "load", "client:component-path": "@/components/Filter/components", "client:component-export": "SearchBox", "data-astro-cid-p2juhabl": true })}</header>`;
}, "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/components/GlobalLayoutStructure/GlobalHeader.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body class="bg-primary text-text font-roboto scroll">${renderComponent($$result, "GlobalHeader", $$GlobalHeader, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$item = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$item;
  const { item } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${item} - Midu Bazar` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-3 p-3 w-screen">${renderComponent($$result2, "ProductItem", ProductItem, { "productId": Number(item), "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/", "client:component-export": "ProductItem" })}</main>` })}`;
}, "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/pages/item/[item].astro", void 0);

const $$file = "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/pages/item/[item].astro";
const $$url = "/item/[item].html";

const _item_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$item,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Product as P, SearchBox as S, _item_ as _, ProductCategories as a };
