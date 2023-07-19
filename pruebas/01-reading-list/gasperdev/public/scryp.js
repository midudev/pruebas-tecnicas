if (document.startViewTransition) {
  window.navigation.addEventListener("navigate", async (event) => {
    const toUrl = new URL(event.destination.url);

    // Es una página externa? Si es así, lo ignoramos
    if (location.origin !== toUrl.origin) return;

    // Si es una navegación en el mismo dominio (origen)
    event.intercept({
      async handler() {
        try {
          // Vamos a cargar la página de destino utilizando fetch para obtener el HTML
          const response = await fetch(toUrl.pathname);
          const text = await response.text();
          // Quedarnos sólo con el contenido del HTML dentro de la etiqueta body utilizando una expresión regular
          const [, data] = text.match(/<body>([\s\S]*)<\/body>/i);
          console.log(data);
          // Utilizar la API de View Transition
          document.startViewTransition(() => {
            // Scroll hasta arriba
            document.body.innerHTML = data;
            document.documentElement.scrollTop = 0;
          });
        } catch (error) {
          console.error("Error al cargar la página:", error);
        }
      },
    });
  });
}
