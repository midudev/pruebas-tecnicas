import {
  Links,
  LiveReload,
  Meta,
  Link,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import MenuBooks from "./Components/navegation/menuBooks";
import StylesMenu from '~/styles/menu.css';
import StylesIndex from '~/styles/index.css';
import { useState } from "react";

export default function App() {

  const [listReading, setListReading] = useState([]);

  const addListReading = (data) => {
    setListReading([
      ...listReading,
      data,
    ]);
  }


  return (
    <Document>
      <Outlet
        context={
          [
            addListReading,
            listReading
          ]
        }
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MenuBooks />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function meta() {
  return [
    {
      title: 'Lista de libros'
    },
    {
      description: 'El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas de tu elección.'
    },
    {
      charset: 'UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'stylesheet',
      href: StylesMenu
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'proconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,900;1,600&display=swap'
    },
    {
      rel: 'stylesheet',
      href: StylesIndex
    }
  ];
}


export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document >
        <div className="error">
          <h1>{`${error.status} ${error.statusText}`}</h1>
          <p>{error.data}</p>
          <Link to="/">back to home</Link>
        </div>
      </Document>
    );
  } else {
    return (
      <Document >
        <div className="error">
          <p>{error.message}</p>
          <p>{error.stack}</p>
          <Link to="/">back to home</Link>
        </div>
      </Document>
    );
  }
}
