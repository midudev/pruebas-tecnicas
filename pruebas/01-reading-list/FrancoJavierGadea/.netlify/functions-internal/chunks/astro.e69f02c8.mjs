import { escape } from 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { compile } from 'path-to-regexp';
import 'mime';
import 'string-width';

const AstroErrorData = {
  /**
   * @docs
   * @kind heading
   * @name Astro Errors
   */
  /**
   * @docs
   * @message
   * Unknown compiler error.
   * @see
   * - [withastro/compiler issues list](https://astro.build/issues/compiler)
   * @description
   * Astro encountered an unknown error while compiling your files. In most cases, this is not your fault, but an issue in our compiler.
   *
   * If there isn't one already, please [create an issue](https://astro.build/issues/compiler).
   */
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler."
  },
  // 1xxx and 2xxx codes are reserved for compiler errors and warnings respectively
  /**
   * @docs
   * @see
   * - [Enabling SSR in Your Project](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project)
   * - [Astro.redirect](https://docs.astro.build/en/reference/api-reference/#astroredirect)
   * @description
   * The `Astro.redirect` function is only available when [Server-side rendering](/en/guides/server-side-rendering/) is enabled.
   *
   * To redirect on a static website, the [meta refresh attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) can be used. Certain hosts also provide config-based redirects (ex: [Netlify redirects](https://docs.netlify.com/routing/redirects/)).
   * @deprecated since version 2.6
   */
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    message: "Redirects are only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  /**
   * @docs
   * @see
   * - [Official integrations](https://docs.astro.build/en/guides/integrations-guide/#official-integrations)
   * - [Astro.clientAddress](https://docs.astro.build/en/reference/api-reference/#astroclientaddress)
   * @description
   * The adapter you're using unfortunately does not support `Astro.clientAddress`.
   */
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  /**
   * @docs
   * @see
   * - [Enabling SSR in Your Project](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project)
   * - [Astro.clientAddress](https://docs.astro.build/en/reference/api-reference/#astroclientaddress)
   * @description
   * The `Astro.clientAddress` property is only available when [Server-side rendering](https://docs.astro.build/en/guides/server-side-rendering/) is enabled.
   *
   * To get the user's IP address in static mode, different APIs such as [Ipify](https://www.ipify.org/) can be used in a [Client-side script](https://docs.astro.build/en/guides/client-side-scripts/) or it may be possible to get the user's IP using a serverless function hosted on your hosting provider.
   */
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    message: "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  /**
   * @docs
   * @see
   * - [getStaticPaths()](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * @description
   * A [dynamic route](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) was matched, but no corresponding path was found for the requested parameters. This is often caused by a typo in either the generated or the requested path.
   */
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  /**
   * @docs
   * @message Route returned a `RETURNED_VALUE`. Only a Response can be returned from Astro files.
   * @see
   * - [Response](https://docs.astro.build/en/guides/server-side-rendering/#response)
   * @description
   * Only instances of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned inside Astro files.
   * ```astro title="pages/login.astro"
   * ---
   * return new Response(null, {
   *  status: 404,
   *  statusText: 'Not found'
   * });
   *
   * // Alternatively, for redirects, Astro.redirect also returns an instance of Response
   * return Astro.redirect('/login');
   * ---
   * ```
   *
   */
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  /**
   * @docs
   * @see
   * - [`client:media`](https://docs.astro.build/en/reference/directives-reference/#clientmedia)
   * @description
   * A [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) parameter is required when using the `client:media` directive.
   *
   * ```astro
   * <Counter client:media="(max-width: 640px)" />
   * ```
   */
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  /**
   * @docs
   * @message Unable to render `COMPONENT_NAME`. There are `RENDERER_COUNT` renderer(s) configured in your `astro.config.mjs` file, but none were able to server-side render `COMPONENT_NAME`.
   * @see
   * - [Frameworks components](https://docs.astro.build/en/core-concepts/framework-components/)
   * - [UI Frameworks](https://docs.astro.build/en/guides/integrations-guide/#official-integrations)
   * @description
   * None of the installed integrations were able to render the component you imported. Make sure to install the appropriate integration for the type of component you are trying to include in your page.
   *
   * For JSX / TSX files, [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/), [@astrojs/preact](https://docs.astro.build/en/guides/integrations-guide/preact/) or [@astrojs/solid-js](https://docs.astro.build/en/guides/integrations-guide/solid-js/) can be used. For Vue and Svelte files, the [@astrojs/vue](https://docs.astro.build/en/guides/integrations-guide/vue/) and [@astrojs/svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/) integrations can be used respectively
   */
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  /**
   * @docs
   * @see
   * - [addRenderer option](https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option)
   * - [Hydrating framework components](https://docs.astro.build/en/core-concepts/framework-components/#hydrating-interactive-components)
   * @description
   * Astro tried to hydrate a component on the client, but the renderer used does not provide a client entrypoint to use to hydrate.
   *
   */
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  /**
   * @docs
   * @see
   * - [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly)
   * @description
   *
   * `client:only` components are not run on the server, as such Astro does not know (and cannot guess) which renderer to use and require a hint. Like such:
   *
   * ```astro
   *	<SomeReactComponent client:only="react" />
   * ```
   */
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * The `params` property in `getStaticPaths`'s return value (an array of objects) should also be an object.
   *
   * ```astro title="pages/blog/[id].astro"
   * ---
   * export async function getStaticPaths() {
   *	return [
   *		{ params: { slug: "blog" } },
   * 		{ params: { slug: "about" } }
   * 	];
   *}
   *---
   * ```
   */
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * `getStaticPaths`'s return value must be an array of objects.
   *
   * ```ts title="pages/blog/[id].astro"
   * export async function getStaticPaths() {
   *	return [ // <-- Array
   *		{ params: { slug: "blog" } },
   * 		{ params: { slug: "about" } }
   * 	];
   *}
   * ```
   */
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [RSS Guide](https://docs.astro.build/en/guides/rss/)
   * @description
   * `getStaticPaths` no longer expose an helper for generating a RSS feed. We recommend migrating to the [@astrojs/rss](https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss)integration instead.
   */
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * Every route specified by `getStaticPaths` require a `params` property specifying the path parameters needed to match the route.
   *
   * For instance, the following code:
   * ```astro title="pages/blog/[id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: '1' } }
   * 	];
   * }
   * ---
   * ```
   * Will create the following route: `site.com/blog/1`.
   */
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * Since `params` are encoded into the URL, only certain types are supported as values.
   *
   * ```astro title="/route/[id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: '1' } } // Works
   * 		{ params: { id: 2 } } // Works
   * 		{ params: { id: false } } // Does not work
   * 	];
   * }
   * ---
   * ```
   *
   * In routes using [rest parameters](https://docs.astro.build/en/core-concepts/routing/#rest-parameters), `undefined` can be used to represent a path with no parameters passed in the URL:
   *
   * ```astro title="/route/[...id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: 1 } } // /route/1
   * 		{ params: { id: 2 } } // /route/2
   * 		{ params: { id: undefined } } // /route/
   * 	];
   * }
   * ---
   * ```
   */
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [Server-side Rendering](https://docs.astro.build/en/guides/server-side-rendering/)
   * @description
   * In [Static Mode](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode), all routes must be determined at build time. As such, dynamic routes must `export` a `getStaticPaths` function returning the different paths to generate.
   */
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  /**
   * @docs
   * @see
   * - [Named slots](https://docs.astro.build/en/core-concepts/astro-components/#named-slots)
   * @description
   * Certain words cannot be used for slot names due to being already used internally.
   */
  ReservedSlotName: {
    title: "Invalid slot name.",
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  /**
   * @docs
   * @see
   * - [Server-side Rendering](https://docs.astro.build/en/guides/server-side-rendering/)
   * - [Adding an Adapter](https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter)
   * @description
   * To use server-side rendering, an adapter needs to be installed so Astro knows how to generate the proper output for your targeted deployment platform.
   */
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    message: `Cannot use \`output: 'server'\` or \`output: 'hybrid'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  /**
   * @docs
   * @description
   * No import statement was found for one of the components. If there is an import statement, make sure you are using the same identifier in both the imports and the component usage.
   */
  NoMatchingImport: {
    title: "No import found for component.",
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * InvalidPrerenderExport: A `prerender` export has been detected, but its value cannot be statically analyzed.
   * @description
   * The `prerender` feature only supports a subset of valid JavaScript — be sure to use exactly `export const prerender = true` so that our compiler can detect this directive at build time. Variables, `let`, and `var` declarations are not supported.
   */
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    message: (prefix, suffix, isHydridOuput) => {
      const defaultExpectedValue = isHydridOuput ? "false" : "true";
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`${defaultExpectedValue}\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * InvalidComponentArgs: Invalid arguments passed to `<MyAstroComponent>` component.
   * @description
   * Astro components cannot be rendered manually via a function call, such as `Component()` or `{items.map(Component)}`. Prefer the component syntax `<Component />` or `{items.map(item => <Component {...item} />)}`.
   */
  InvalidComponentArgs: {
    title: "Invalid component arguments.",
    message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
  },
  /**
   * @docs
   * @see
   * - [Pagination](https://docs.astro.build/en/core-concepts/routing/#pagination)
   * @description
   * The page number parameter was not found in your filepath.
   */
  PageNumberParamNotFound: {
    title: "Page number param not found.",
    message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
    hint: "Rename your file to `[page].astro` or `[...page].astro`."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * - [Image component](https://docs.astro.build/en/guides/assets/#image--astroassets)
   * - [Image component#alt](https://docs.astro.build/en/guides/assets/#alt-required)
   * @description
   * The `alt` property allows you to provide descriptive alt text to users of screen readers and other assistive technologies. In order to ensure your images are accessible, the `Image` component requires that an `alt` be specified.
   *
   * If the image is merely decorative (i.e. doesn’t contribute to the understanding of the page), set `alt=""` so that screen readers know to ignore the image.
   */
  ImageMissingAlt: {
    title: "Missing alt property.",
    message: "The alt property is required.",
    hint: "The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information."
  },
  /**
   * @docs
   * @see
   * - [Image Service API](https://docs.astro.build/en/reference/image-service-reference/)
   * @description
   * There was an error while loading the configured image service. This can be caused by various factors, such as your image service not properly exporting a compatible object in its default export, or an incorrect path.
   *
   * If you believe that your service is properly configured and this error is wrong, please [open an issue](https://astro.build/issues/).
   */
  InvalidImageService: {
    title: "Error while loading image service.",
    message: "There was an error loading the configured image service. Please see the stack trace for more information."
  },
  /**
   * @docs
   * @message
   * Missing width and height attributes for `IMAGE_URL`. When using remote images, both dimensions are always required in order to avoid cumulative layout shift (CLS).
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * - [Image component#width-and-height](https://docs.astro.build/en/guides/assets/#width-and-height)
   * @description
   * For remote images, `width` and `height` cannot be inferred from the original file. As such, in order to avoid CLS, those two properties are always required.
   *
   * If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets).
   */
  MissingImageDimension: {
    title: "Missing image dimensions",
    message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are always required in order to avoid CLS.`,
    hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."
  },
  /**
   * @docs
   * @description
   * The built-in image services do not currently support optimizing all image formats.
   *
   * For unsupported formats such as SVGs and GIFs, you may be able to use an `img` tag directly:
   * ```astro
   * ---
   * import rocket from '../assets/images/rocket.svg';
   * ---
   *
   * <img src={rocket.src} width={rocket.width} height={rocket.height} alt="A rocketship in space." />
   * ```
   */
  UnsupportedImageFormat: {
    title: "Unsupported image format",
    message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
      ", "
    )} are supported by our image services.`,
    hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * The endpoint is prerendered with an `undefined` param so the generated path will collide with another route.
   *
   * If you cannot prevent passing `undefined`, then an additional extension can be added to the endpoint file name to generate the file with a different name. For example, renaming `pages/api/[slug].ts` to `pages/api/[slug].json.ts`.
   */
  PrerenderDynamicEndpointPathCollide: {
    title: "Prerendered dynamic endpoint has path collision.",
    message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
    hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(js|ts)/, (m) => `.json` + m)}\``
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * An image's `src` property is not valid. The Image component requires the `src` attribute to be either an image that has been ESM imported or a string. This is also true for the first parameter of `getImage()`.
   *
   * ```astro
   * ---
   * import { Image } from "astro:assets";
   * import myImage from "../assets/my_image.png";
   * ---
   *
   * <Image src={myImage} alt="..." />
   * <Image src="https://example.com/logo.png" width={300} height={300} alt="..." />
   * ```
   *
   * In most cases, this error happens when the value passed to `src` is undefined.
   */
  ExpectedImage: {
    title: "Expected src to be an image.",
    message: (options) => `Expected \`src\` property to be either an ESM imported image or a string with the path of a remote image. Received \`${options}\`.`,
    hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * `getImage()`'s first parameter should be an object with the different properties to apply to your image.
   *
   * ```ts
   * import { getImage } from "astro:assets";
   * import myImage from "../assets/my_image.png";
   *
   * const optimizedImage = await getImage({src: myImage, width: 300, height: 300});
   * ```
   *
   * In most cases, this error happens because parameters were passed directly instead of inside an object.
   */
  ExpectedImageOptions: {
    title: "Expected image options.",
    message: (options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`
  },
  /**
   * @docs
   * @message
   * Could not find requested image `IMAGE_PATH` at `FULL_IMAGE_PATH`.
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * Astro could not find an image you included in your Markdown content. Usually, this is simply caused by a typo in the path.
   *
   * Images in Markdown are relative to the current file. To refer to an image that is located in the same folder as the `.md` file, the path should start with `./`
   */
  MarkdownImageNotFound: {
    title: "Image not found.",
    message: (imagePath, fullImagePath) => `Could not find requested image \`${imagePath}\`${fullImagePath ? ` at \`${fullImagePath}\`.` : "."}`,
    hint: "This is often caused by a typo in the image path. Please make sure the file exists, and is spelled correctly."
  },
  /**
   * @docs
   * @description
   * Making changes to the response, such as setting headers, cookies, and the status code cannot be done outside of page components.
   */
  ResponseSentError: {
    title: "Unable to set response.",
    message: "The response has already been sent to the browser and cannot be altered."
  },
  /**
   * @docs
   * @description
   * Thrown when the middleware does not return any data or call the `next` function.
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware((context, _) => {
   * 	// doesn't return anything or call `next`
   * 	context.locals.someData = false;
   * });
   * ```
   */
  MiddlewareNoDataOrNextCalled: {
    title: "The middleware didn't return a response or call `next`.",
    message: "The middleware needs to either return a `Response` object or call the `next` function."
  },
  /**
   * @docs
   * @description
   * Thrown in development mode when middleware returns something that is not a `Response` object.
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware(() => {
   *   return "string"
   * });
   * ```
   */
  MiddlewareNotAResponse: {
    title: "The middleware returned something that is not a `Response` object.",
    message: "Any data returned from middleware must be a valid `Response` object."
  },
  /**
   * @docs
   * @description
   *
   * Thrown in development mode when `locals` is overwritten with something that is not an object
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware((context, next) => {
   *   context.locals = 1541;
   *   return next();
   * });
   * ```
   */
  LocalsNotAnObject: {
    title: "Value assigned to `locals` is not accepted.",
    message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
    hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * When using the default image services, `Image`'s and `getImage`'s `src` parameter must be either an imported image or an URL, it cannot be a filepath.
   *
   * ```astro
   * ---
   * import { Image } from "astro:assets";
   * import myImage from "../my_image.png";
   * ---
   *
   * <!-- GOOD: `src` is the full imported image. -->
   * <Image src={myImage} alt="Cool image" />
   *
   * <!-- BAD: `src` is an image's `src` path instead of the full image. -->
   * <Image src={myImage.src} alt="Cool image" />
   * ```
   */
  LocalImageUsedWrongly: {
    title: "ESM imported images must be passed as-is.",
    message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a filepath. Received \`${imageFilePath}\`.`
  },
  /**
   * @docs
   * @see
   * - [Astro.glob](https://docs.astro.build/en/reference/api-reference/#astroglob)
   * @description
   * `Astro.glob()` can only be used in `.astro` files. You can use [`import.meta.glob()`](https://vitejs.dev/guide/features.html#glob-import) instead to acheive the same result.
   */
  AstroGlobUsedOutside: {
    title: "Astro.glob() used outside of an Astro file.",
    message: (globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`,
    hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
  },
  /**
   * @docs
   * @see
   * - [Astro.glob](https://docs.astro.build/en/reference/api-reference/#astroglob)
   * @description
   * `Astro.glob()` did not return any matching files. There might be a typo in the glob pattern.
   */
  AstroGlobNoMatch: {
    title: "Astro.glob() did not match any files.",
    message: (globStr) => `\`Astro.glob(${globStr})\` did not return any matching files. Check the pattern for typos.`
  },
  /**
   * @docs
   * @see
   * - [Astro.redirect](https://docs.astro.build/en/reference/api-reference/#astroredirect)
   * @description
   * A redirect must be given a location with the `Location` header.
   */
  RedirectWithNoLocation: {
    title: "A redirect must be given a location with the `Location` header."
  },
  /**
   * @docs
   * @see
   * - [Dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
   * @description
   * A dynamic route param is invalid. This is often caused by an `undefined` parameter or a missing [rest parameter](https://docs.astro.build/en/core-concepts/routing/#rest-parameters).
   */
  InvalidDynamicRoute: {
    title: "Invalid dynamic route.",
    message: (route, invalidParam, received) => `The ${invalidParam} param for route ${route} is invalid. Received **${received}**.`
  },
  // No headings here, that way Vite errors are merged with Astro ones in the docs, which makes more sense to users.
  // Vite Errors - 4xxx
  /**
   * @docs
   * @see
   * - [Vite troubleshooting guide](https://vitejs.dev/guide/troubleshooting.html)
   * @description
   * Vite encountered an unknown error while rendering your project. We unfortunately do not know what happened (or we would tell you!)
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownViteError: {
    title: "Unknown Vite Error."
  },
  /**
   * @docs
   * @see
   * - [Type Imports](https://docs.astro.build/en/guides/typescript/#type-imports)
   * @description
   * Astro could not import the requested file. Oftentimes, this is caused by the import path being wrong (either because the file does not exist, or there is a typo in the path)
   *
   * This message can also appear when a type is imported without specifying that it is a [type import](https://docs.astro.build/en/guides/typescript/#type-imports).
   */
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  /**
   * @docs
   * @see
   * - [Glob Patterns](https://docs.astro.build/en/guides/imports/#glob-patterns)
   * @description
   * Astro encountered an invalid glob pattern. This is often caused by the glob pattern not being a valid file path.
   */
  InvalidGlob: {
    title: "Invalid glob pattern.",
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  /**
   * @docs
   * @description
   * Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error.
   */
  FailedToFindPageMapSSR: {
    title: "Astro couldn't find the correct page to render",
    message: "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error. Please file an issue."
  },
  /**
   * @docs
   * @kind heading
   * @name CSS Errors
   */
  // CSS Errors - 5xxx
  /**
   * @docs
   * @see
   * 	- [Styles and CSS](https://docs.astro.build/en/guides/styling/)
   * @description
   * Astro encountered an unknown error while parsing your CSS. Oftentimes, this is caused by a syntax error and the error message should contain more information.
   */
  UnknownCSSError: {
    title: "Unknown CSS Error."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * CSSSyntaxError: Missed semicolon<br/>
   * CSSSyntaxError: Unclosed string<br/>
   * @description
   * Astro encountered an error while parsing your CSS, due to a syntax error. This is often caused by a missing semicolon.
   */
  CSSSyntaxError: {
    title: "CSS Syntax Error."
  },
  /**
   * @docs
   * @kind heading
   * @name Markdown Errors
   */
  // Markdown Errors - 6xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error while parsing your Markdown. Oftentimes, this is caused by a syntax error and the error message should contain more information.
   */
  UnknownMarkdownError: {
    title: "Unknown Markdown Error."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * can not read an implicit mapping pair; a colon is missed<br/>
   * unexpected end of the stream within a double quoted scalar<br/>
   * can not read a block mapping entry; a multiline key may not be an implicit key
   * @description
   * Astro encountered an error while parsing the frontmatter of your Markdown file.
   * This is often caused by a mistake in the syntax, such as a missing colon or a missing end quote.
   */
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter."
  },
  /**
   * @docs
   * @see
   * - [Modifying frontmatter programmatically](https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically)
   * @description
   * A remark or rehype plugin attempted to inject invalid frontmatter. This occurs when "astro.frontmatter" is set to `null`, `undefined`, or an invalid JSON object.
   */
  InvalidFrontmatterInjectionError: {
    title: "Invalid frontmatter injection.",
    message: 'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
    hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information."
  },
  /**
   * @docs
   * @see
   * - [MDX installation and usage](https://docs.astro.build/en/guides/integrations-guide/mdx/)
   * @description
   * Unable to find the official `@astrojs/mdx` integration. This error is raised when using MDX files without an MDX integration installed.
   */
  MdxIntegrationMissingError: {
    title: "MDX integration missing.",
    message: (file) => `Unable to render ${file}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
    hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/"
  },
  // Config Errors - 7xxx
  /**
   * @docs
   * @see
   * - [Configuration Reference](https://docs.astro.build/en/reference/configuration-reference/)
   * @description
   * Astro encountered an unknown error loading your Astro configuration file.
   * This is often caused by a syntax error in your config and the message should offer more information.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownConfigError: {
    title: "Unknown configuration error."
  },
  /**
   * @docs
   * @see
   * - [--config](https://docs.astro.build/en/reference/cli-reference/#--config-path)
   * @description
   * The specified configuration file using `--config` could not be found. Make sure that it exists or that the path is correct
   */
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  /**
   * @docs
   * @see
   * - [Configuration reference](https://docs.astro.build/en/reference/configuration-reference/)
   * @description
   * Astro detected a legacy configuration option in your configuration file.
   */
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  /**
   * @docs
   * @kind heading
   * @name CLI Errors
   */
  // CLI Errors - 8xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error while starting one of its CLI commands. The error message should contain more information.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownCLIError: {
    title: "Unknown CLI Error."
  },
  /**
   * @docs
   * @description
   * `astro sync` command failed to generate content collection types.
   * @see
   * - [Content collections documentation](https://docs.astro.build/en/guides/content-collections/)
   */
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    message: (errorMessage) => `\`astro sync\` command failed to generate content collection types: ${errorMessage}`,
    hint: "Check your `src/content/config.*` file for typos."
  },
  /**
   * @docs
   * @kind heading
   * @name Content Collection Errors
   */
  // Content Collection Errors - 9xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error loading your content collections.
   * This can be caused by certain errors inside your `src/content/config.ts` file or some internal errors.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownContentCollectionError: {
    title: "Unknown Content Collection Error."
  },
  /**
   * @docs
   * @message
   * **Example error message:**<br/>
   * **blog** → **post.md** frontmatter does not match collection schema.<br/>
   * "title" is required.<br/>
   * "date" must be a valid date.
   * @description
   * A Markdown or MDX entry in `src/content/` does not match its collection schema.
   * Make sure that all required fields are present, and that all fields are of the correct type.
   * You can check against the collection schema in your `src/content/config.*` file.
   * See the [Content collections documentation](https://docs.astro.build/en/guides/content-collections/) for more information.
   */
  InvalidContentEntryFrontmatterError: {
    title: "Content entry frontmatter does not match schema.",
    message: (collection, entryId, error) => {
      return [
        `**${String(collection)} \u2192 ${String(
          entryId
        )}** frontmatter does not match collection schema.`,
        ...error.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` → `ENTRY_ID` has an invalid slug. `slug` must be a string.
   * @see
   * - [The reserved entry `slug` field](https://docs.astro.build/en/guides/content-collections/)
   * @description
   * An entry in `src/content/` has an invalid `slug`. This field is reserved for generating entry slugs, and must be a string when present.
   */
  InvalidContentEntrySlugError: {
    title: "Invalid content entry slug.",
    message: (collection, entryId) => {
      return `${String(collection)} \u2192 ${String(
        entryId
      )} has an invalid slug. \`slug\` must be a string.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  /**
   * @docs
   * @see
   * - [The reserved entry `slug` field](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs)
   * @description
   * A content collection schema should not contain the `slug` field. This is reserved by Astro for generating entry slugs. Remove `slug` from your schema. You can still use custom slugs in your frontmatter.
   */
  ContentSchemaContainsSlugError: {
    title: "Content Schema should not contain `slug`.",
    message: (collectionName) => `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${collectionName} collection schema.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  /**
   * @docs
   * @message A collection queried via `getCollection()` does not exist.
   * @description
   * When querying a collection, ensure a collection directory with the requested name exists under `src/content/`.
   */
  CollectionDoesNotExistError: {
    title: "Collection does not exist",
    message: (collectionName) => `The collection **${collectionName}** does not exist. Ensure a collection directory with this name exists.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on creating collections."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains a mix of content and data entries. All entries must be of the same type.
   * @see
   * - [Defining content collections](https://docs.astro.build/en/guides/content-collections/#defining-collections)
   * @description
   * A content collection cannot contain a mix of content and data entries. You must store entries in separate collections by type.
   */
  MixedContentDataCollectionError: {
    title: "Content and data cannot be in same collection.",
    message: (collection) => {
      return `**${collection}** contains a mix of content and data entries. All entries must be of the same type.`;
    },
    hint: "Store data entries in a new collection separate from your content collection."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains entries of type `ACTUAL_TYPE`, but is configured as a `EXPECTED_TYPE` collection.
   * @see
   * - [Defining content collections](https://docs.astro.build/en/guides/content-collections/#defining-collections)
   * @description
   * Content collections must contain entries of the type configured. Collections are `type: 'content'` by default. Try adding `type: 'data'` to your collection config for data collections.
   */
  ContentCollectionTypeMismatchError: {
    title: "Collection contains entries of a different type.",
    message: (collection, expectedType, actualType) => {
      return `${collection} contains ${expectedType} entries, but is configured as a ${actualType} collection.`;
    }
  },
  /**
   * @docs
   * @message `COLLECTION_ENTRY_NAME` failed to parse.
   * @description
   * Collection entries of `type: 'data'` must return an object with valid JSON (for `.json` entries) or YAML (for `.yaml` entries).
   */
  DataCollectionEntryParseError: {
    title: "Data collection entry failed to parse.",
    message: (entryId, errorMessage) => {
      return `**${entryId}** failed to parse: ${errorMessage}`;
    },
    hint: "Ensure your data entry is an object with valid JSON (for `.json` entries) or YAML (for `.yaml` entries)."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains multiple entries with the same slug: `SLUG`. Slugs must be unique.
   * @description
   * Content collection entries must have unique slugs. Duplicates are often caused by the `slug` frontmatter property.
   */
  DuplicateContentEntrySlugError: {
    title: "Duplicate content entry slug.",
    message: (collection, slug) => {
      return `**${collection}** contains multiple entries with the same slug: \`${slug}\`. Slugs must be unique.`;
    }
  },
  /**
   * @docs
   * @see
   * - [devalue library](https://github.com/rich-harris/devalue)
   * @description
   * `transform()` functions in your content config must return valid JSON, or data types compatible with the devalue library (including Dates, Maps, and Sets).
   */
  UnsupportedConfigTransformError: {
    title: "Unsupported transform in content config.",
    message: (parseError) => `\`transform()\` functions in your content config must return valid JSON, or data types compatible with the devalue library (including Dates, Maps, and Sets).
Full error: ${parseError}`,
    hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
  },
  // Generic catch-all - Only use this in extreme cases, like if there was a cosmic ray bit flip
  UnknownError: {
    title: "Unknown Error."
  }
};

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByTitle(title) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].title === title);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { name, title, message, stack, location, hint, frame } = props;
    this.title = title;
    if (name && name !== "Error") {
      this.name = name;
    } else if (this.title) {
      const errorData = (_a = getErrorDataByTitle(this.title)) == null ? void 0 : _a.name;
      if (errorData) {
        this.name = errorData;
      }
    }
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  var _a;
  const name = ((_a = moduleId == null ? void 0 : moduleId.split("/").pop()) == null ? void 0 : _a.replace(".astro", "")) ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...AstroErrorData.InvalidComponentArgs,
        message: AstroErrorData.InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "2.9.2";

function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult) => {
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroErrorData.AstroGlobUsedOutside,
        message: AstroErrorData.AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroErrorData.AstroGlobNoMatch,
        message: AstroErrorData.AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}

const escapeHTML = escape;
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}

var astro_island_prebuilt_default = `(()=>{var d;{let h={0:t=>t,1:t=>JSON.parse(t,a),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,a)),5:t=>new Set(JSON.parse(t,a)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},a=(t,e)=>{if(t===""||!Array.isArray(e))return e;let[r,n]=e;return r in h?h[r](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var o;if(!this.hydrator||!this.isConnected)return;let e=(o=this.parentElement)==null?void 0:o.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),n={},c=this.querySelectorAll("template[data-astro-template]");for(let s of c){let i=s.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[s.getAttribute("data-astro-template")||"default"]=s.innerHTML,s.remove())}for(let s of r){let i=s.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[s.getAttribute("name")||"default"]=s.innerHTML)}let l=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),a):{};await this.hydrator(this)(this.Component,l,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,r)=>{r.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(\`astro:\${r}\`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let n=this.getAttribute("renderer-url"),[c,{default:l}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),o=this.getAttribute("component-export")||"default";if(!o.includes("."))this.Component=c[o];else{this.Component=c;for(let s of o.split("."))this.Component=this.Component[s]}return this.hydrator=l,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();`;

const ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(
        result,
        directive
      )};${astro_island_prebuilt_default}</script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}</script>`;
  }
  return "";
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => {
  if (k[0] !== "-" && k[1] !== "-")
    return `${kebab(k)}:${v}`;
  if (kebab(k) !== k)
    return `${kebab(k)}:var(${k});${k}:${v}`;
  return `${k}:${v}`;
}).join(";");
function defineScriptVars(vars) {
  var _a;
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${(_a = JSON.stringify(value)) == null ? void 0 : _a.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
const iteratorQueue = [];
function queueIteratorBuffers(iterators) {
  if (iteratorQueue.length === 0) {
    setTimeout(() => {
      iteratorQueue.forEach((its) => its.forEach((it) => !it.isStarted() && it.buffer()));
      iteratorQueue.length = 0;
    });
  }
  iteratorQueue.push(iterators);
}
function bufferIterators(iterators) {
  const eagerIterators = iterators.map((it) => new EagerAsyncIterableIterator(it));
  queueIteratorBuffers(eagerIterators);
  return eagerIterators;
}
class EagerAsyncIterableIterator {
  #iterable;
  #queue = new Queue();
  #error = void 0;
  #next;
  /**
   * Whether the proxy is running in buffering or pass-through mode
   */
  #isBuffering = false;
  #gen = void 0;
  #isStarted = false;
  constructor(iterable) {
    this.#iterable = iterable;
  }
  /**
   * Starts to eagerly fetch the inner iterator and cache the results.
   * Note: This might not be called after next() has been called once, e.g. the iterator is started
   */
  async buffer() {
    if (this.#gen) {
      throw new Error("Cannot not switch from non-buffer to buffer mode");
    }
    this.#isBuffering = true;
    this.#isStarted = true;
    this.#gen = this.#iterable[Symbol.asyncIterator]();
    let value = void 0;
    do {
      this.#next = this.#gen.next();
      try {
        value = await this.#next;
        this.#queue.push(value);
      } catch (e) {
        this.#error = e;
      }
    } while (value && !value.done);
  }
  async next() {
    if (this.#error) {
      throw this.#error;
    }
    if (!this.#isBuffering) {
      if (!this.#gen) {
        this.#isStarted = true;
        this.#gen = this.#iterable[Symbol.asyncIterator]();
      }
      return await this.#gen.next();
    }
    if (!this.#queue.isEmpty()) {
      return this.#queue.shift();
    }
    await this.#next;
    return this.#queue.shift();
  }
  isStarted() {
    return this.#isStarted;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}
class Queue {
  constructor() {
    this.head = void 0;
    this.tail = void 0;
  }
  push(item) {
    if (this.head === void 0) {
      this.head = { item };
      this.tail = this.head;
    } else {
      this.tail.next = { item };
      this.tail = this.tail.next;
    }
  }
  isEmpty() {
    return this.head === void 0;
  }
  shift() {
    var _a, _b;
    const val = (_a = this.head) == null ? void 0 : _a.item;
    this.head = (_b = this.head) == null ? void 0 : _b.next;
    return val;
  }
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = links.join("\n") + styles.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead() {
  yield { type: "head" };
}
function* maybeRenderHead() {
  yield { type: "maybe-head" };
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

var _a$1;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a$1] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      const value = slots[name](result);
      this.slotValues[name] = () => value;
    }
  }
  async init(result) {
    this.returnValue = this.factory(result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init(this.result);
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
}
_a$1 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result._metadata.propagators.has(factory)) {
    result._metadata.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

var _a;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  async *[(_a = renderTemplateResultSym, Symbol.asyncIterator)]() {
    const { htmlParts, expressions } = this;
    let iterables = bufferIterators(expressions.map((e) => renderChild(e)));
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const iterable = iterables[i];
      yield markHTMLString(html);
      if (iterable) {
        yield* iterable;
      }
    }
  }
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!/<!doctype html/i.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response)
        return;
      str += chunkToString(result, chunk);
    }
  };
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    destination.write(chunk);
  }
  return str;
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(route == null ? void 0 : route.route, typeof factoryResult),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
}

async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    const bufferedIterators = bufferIterators(child.map((c) => renderChild(c)));
    for (const value of bufferedIterators) {
      yield markHTMLString(await value);
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
async function* renderSlot(result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(typeof slotted === "function" ? slotted(result) : slotted);
    yield* iterator;
  }
  if (fallback && !slotted) {
    yield* renderSlot(result, fallback);
  }
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  let iterator = renderSlot(result, slotted, fallback);
  for await (const chunk of iterator) {
    if (typeof chunk.type === "string") {
      if (instructions === null) {
        instructions = [];
      }
      instructions.push(chunk);
    } else {
      content += chunk;
    }
  }
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (typeof chunk.type === "string") {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      default: {
        if (chunk instanceof Response) {
          return "";
        }
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else {
    if (isSlotString(chunk)) {
      let out = "";
      const c = chunk;
      if (c.instructions) {
        for (const instr of c.instructions) {
          out += stringifyChunk(result, instr);
        }
      }
      out += chunk.toString();
      return out;
    }
    return chunk.toString();
  }
}
class HTMLParts {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 == null ? void 0 : output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else if (value === void 0) {
        return [PROP_TYPE.Value];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
const ASTRO_SLOT_EXP = /\<\/?astro-slot\b[^>]*>/g;
const ASTRO_STATIC_SLOT_EXP = /\<\/?astro-static-slot\b[^>]*>/g;
function removeStaticAstroSlot(html, supportsAstroStaticSlot) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b, _c;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props } = extractDirectives(_props, clientDirectives);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ??= e;
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      var _a2;
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else if (html && html.length > 0) {
        yield markHTMLString(
          removeStaticAstroSlot(html, ((_a2 = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _a2.supportsAstroStaticSlot) ?? false)
        );
      } else {
        yield "";
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = ((_c = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _c.supportsAstroStaticSlot) ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement$1("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}

typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";

function __astro_tag_component__(Component, rendererName) {
  if (!Component)
    return;
  if (typeof Component !== "function")
    return;
  Object.defineProperty(Component, Renderer, {
    value: rendererName,
    enumerable: false,
    writable: false
  });
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    const error = e;
    if (Component[Symbol.for("mdx-component")]) {
      throw createFormattedError({
        message: error.message,
        title: error.name,
        hint: `This issue often occurs when your MDX component encounters runtime errors.`,
        name: error.name,
        stack: error.stack
      });
    }
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
function createFormattedError({ message, name, stack, hint }) {
  const error = new Error(message);
  error.name = name;
  error.stack = stack;
  error.hint = hint;
  return error;
}
var server_default = {
  check,
  renderToStaticMarkup
};

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

export { __astro_tag_component__ as _, createComponent as a, addAttribute as b, createAstro as c, renderHead as d, renderComponent as e, renderSlot as f, deserializeManifest as g, maybeRenderHead as m, renderTemplate as r, server_default as s };
