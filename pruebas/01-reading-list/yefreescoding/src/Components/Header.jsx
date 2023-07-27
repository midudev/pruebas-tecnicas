import SearchForm from './SearchForm';
import SocialMediaIcons from './socialMediaIcons';

export default function Header() {
  const navLinks = [
    {
      url: 'https://github.com/yefreescoding/First-web-page-but-only-HTML.git',
      name: 'github repo',
    },
    {
      url: 'https://yefreevaldezdev.vercel.app',
      name: 'portfolio',
    },
  ];

  return (
    <header className="flex flex-col">
      <div className="py-4 px-4 mb-4 md:px-16 flex gap-4 flex-wrap justify-center md:justify-between items-center">
        <nav className="basis-[20em] grow flex gap-4 items-center justify-center md:justify-start">
          <span className="font-extrabold">Lee-hoy</span>
          <ul className="flex justify-center md:justify-start items-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className="lowercase" href={link.url}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SearchForm />
        <SocialMediaIcons />
      </div>
      <section
        className="py-4 px- md:px-16 flex flex-col justify-between md:h-[40rem]"
        aria-label="Portada del sitio web"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="text flex flex-col justify-center gap-4">
            <span className="p-2 text-sm rounded-xl border bg-gray-100 w-fit">
              {'🚀'} Esta es la solución pruebas técnicas de{' '}
              <a
                className="hover:underline text-blue-600"
                href="https://github.com/midudev/pruebas-tecnicas.git"
              >
                Midudev
              </a>{' '}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold my-4 bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">
              No leas mañana lo que puedas leer hoy.
            </h1>
            <p className="w-full md:w-[24em] text-xl font-bold text-gray-500">
              Cada libro ha sido personalmente seleccionado para el disfrute de
              los amantes a la lectura. desde fantasia, hasta historias reales.
              Amor, y terror.
            </p>
          </div>
          <img
            src="/cover-img/cover-2.avif"
            alt=""
            className="w-full object-cover"
          />
        </div>
        {/* <p className="text-gray-600 text-lg">
          Una colección como ninguna otra. Aquí encontrarás los libros más
          sorprendentes, cautivadores y extraordinarios. -Échales un vistazo, te
          garantizamos un placer de lectura en línea.
        </p> */}
      </section>
    </header>
  );
}
