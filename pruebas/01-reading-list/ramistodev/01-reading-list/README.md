# 📚 Reading List App

¡Bienvenido a tu gestor de libros de lectura! Esta aplicación te permite organizar, filtrar y gestionar tu lista de lectura de forma sencilla y visual.

---

## 🚀 Despliegue

La aplicación está desplegada y accesible públicamente en:

👉 [https://reading-list-ramistodev.netlify.app](https://reading-list-ramistodev.netlify.app)

---

## 🛠️ Instalación y uso local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ramistodev/midudev-reading-list.git
   cd ./midudev-reading-list/pruebas/01-reading-list/ramistodev/01-reading-list
   ```
2. **Instala las dependencias:**
   ```bash
   pnpm install
   # o npm install
   ```
3. **Inicia la app en modo desarrollo:**
   ```bash
   pnpm run dev
   # o npm run dev
   ```
4. **Ejecuta los tests:**
   ```bash
   pnpm run test
   # o npm run test
   ```
5. **Build para producción:**
   ```bash
   pnpm run build
   # o npm run build
   ```

---

## 📂 Estructura del proyecto

```
├── public/
├── src/
│   ├── components/
│   │   ├── HeroSection/
│   │   └── ReadingList/
│   │       ├── BookCard/
│   │       ├── BookOpt/
│   │       └── BookStatus/
│   ├── context/
│   ├── hooks/
│   ├── Icons/
│   ├── App.tsx
│   ├── main.tsx
│   └── types.d.ts
├── books.json
├── README.md
└── ...
```

- **components/**: Componentes visuales y de interacción.
- **context/**: Contexto global para gestión de estado de libros.
- **hooks/**: Custom hooks para lógica reutilizable.
- **books.json**: Base de datos local de libros (¡ampliada y mejorada!).

---

## 📖 books.json y escalabilidad

El archivo `books.json` contiene la base de datos de libros. **Ha sido modificado y ampliado** para incluir más libros, portadas reales y géneros variados, permitiendo una experiencia de filtrado y exploración mucho más rica.

> **Escalabilidad automática:**
>
> El sistema de filtrado de géneros y páginas es **dinámico y escalable**. Si en `books.json` se añade un libro con un género nuevo o un número de páginas fuera del rango actual, **el filtro lo detecta automáticamente** y lo añade a las opciones de filtrado, sin necesidad de modificar el código. Así, la app siempre se adapta a los datos y crece de forma automática.

---

## 🧩 Funcionalidades principales

- **Visualización de libros disponibles** y **lista de lectura**.
- **Filtrado por género** y **por número de páginas**.
- **Añadir y quitar libros** de la lista de lectura.
- **Persistencia en localStorage** y **sincronización entre pestañas** (si abres la app en dos pestañas, los cambios se reflejan en ambas).
- **Contador de libros** disponibles y seleccionados.
- **Transiciones y animaciones** para una experiencia fluida.
- **Modo oscuro** por defecto.
- **Test unitarios** con Vitest y Testing Library.

---

## 🏗️ Componentes y lógica clave

### Contexto global

- **BooksProvider**: Provee el estado global de libros, lista de lectura, género seleccionado, páginas máximas y sincronización con localStorage.
- **BooksContext**: Contexto React para acceder a los datos y funciones globales.

### Hooks personalizados

- **useBooks**: Lógica de filtrado de libros por estado, género y páginas.
- **useBooksContext**: Acceso seguro al contexto global.
- **useBookCard, useBookOpt, useBookStatus, useHeroSection**: Lógica específica para cada componente visual.

### Componentes principales

- **HeroSection**: Portada de bienvenida y scroll a la lista de libros.
- **ReadingList**: Sección principal que agrupa filtros, estado y tarjetas de libros.
- **BookCard**: Tarjeta visual de cada libro, con animaciones y overlay para añadir/quitar.
- **BookOpt**: Filtros de género y páginas.
- **BookStatus**: Navegación entre libros disponibles y seleccionados.

---

## 🧪 Testing

- Los tests están en los mismos directorios que los componentes, usando Vitest y Testing Library.
- Para lanzar los tests:
  ```bash
  pnpm run test
  ```
- Ejemplo de test: comprobar que un libro se añade correctamente a la lista de lectura.

---

## 👨‍💻 Buenas prácticas y notas para desarrolladores

- **Código modular y limpio**: Separación clara entre lógica (hooks) y presentación (componentes).
- **Tipado estricto con TypeScript**.
- **Contexto global** para evitar prop-drilling.
- **Sincronización entre pestañas** usando el evento `storage`.
- **books.json ampliado** para pruebas de UI y filtros.
- **Fácil de extender**: puedes añadir más filtros, vistas o integraciones.

---

## 📬 Contacto

¿Tienes dudas, sugerencias o quieres contribuir? ¡Abre un issue o contacta conmigo!

---

¡Gracias por probar la Reading List App! 🚀
