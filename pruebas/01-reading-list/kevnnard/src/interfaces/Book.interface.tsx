/**
 * ↓↓ BookSliceProps - /INTERFACE/ __ PARA TIPAR DATOS DE ESTADOS GLOBALES CON REDUX TOOLKIT ↓↓
 */
export interface BookSliceProps {
  error: any;
  /**
   * ↓↓ @param oneBook - /STRING/ __ ESTADO PARA LIBRO DESTACADO EN BANNER PRINCIPAL - SE DEBE INGRESAR UN ISBN  ↓↓
   */
  oneBook: null | BookProps;
  /**
   * ↓↓ filter - /OBJECT/ __ ESTADO GLOBAL PARA FILTROS DE LIBROS DISPONIBLES ↓↓
   */
  filter: {
    /**
     * ↓↓ genre - /STRING/ __ ESTADO DEL FILTRO POR GENERO  ↓↓
     */
    gender: string;
    /**
     * ↓↓ pages - /NUMBER - FLOAT/ __  ESTADO DEL FILTRO POR NUMERO DE PAGINAS ↓↓
     */
    pages: number;
    /**
     * ↓↓ title - /STRING/ __ ESTADO DEL FILTO POR NOMBRE DEL LIBRO ↓↓
     */
    title: string;
  };
  /**
   * ↓↓ booksAvailable - /ARRAY/ __ ESTADO GLOBAL PARA GUARDAR LIBROS DISPONIBLES Y PERSISTIRLOS ↓↓
   */
  booksAvailable: Array<BookProps>;
  /**
   * ↓↓ booksToRead - /ARRAY/ __ ESTADO GLOBAL PARA GUARDAR LIBROS EN LA LISTA DE LIBBROS POR LEER Y PERSISTIRLOS ↓↓
   */
  booksToRead: Array<BookProps>;
}
/** ***********************************************************  **/

/**
 * ↓↓ FeaturedInterface - /INTERFACE/ __ PARA TIPAR DATOS DE COMPONENTE DE BANNER DESTACADO ↓↓
 */
export interface FeaturedInterface {
  /**
   * ↓↓ ISBN - /STRING/ __  PARA IDENTIFICAR UN LIBRO EN EL COMPONENTE FEATURED ↓↓
   */
  ISBN: string;
}
/** ***********************************************************  **/

/**
 * ↓↓ BookProps - /INTERFACE/ __ PARA TIPAR DATOS DE 1 LIBRO(BOOK) ↓↓
 */
export interface BookProps {
  /**
   * ↓↓ book - /OBJECT/ __ OBJETO DE ESTADO DE 1 LIBRO ↓↓
   */
  book: {
    /**
     * ↓↓ ISBN - /STRING/ __  PARA IDENTIFICADOR UNICO DE UN LIBRO ↓↓
     */
    ISBN: string;
    /**
     * ↓↓ author - /OBJECT/ __  OBJETO PARA TIPAR DATOS DE UN AUTOR ↓↓
     */
    author: {
      /**
       * ↓↓ name - /STRING/ __  NOMBRE DEL AUTOR DEL LIBRO ↓↓
       */
      name: string;
      /**
       * ↓↓ otherBooks - /ARRAY/ __ LISTA DE OTROS LIBROS ESCRITOS POR EL AUTOR  ↓↓
       */
      otherBooks: Array<string>;
    };
    /**
     * ↓↓ cover - /STRING/ __ lINK PARA PORTADA DE 1 LIBRO  ↓↓
     */
    cover: string;
    /**
     * ↓↓ genre - /STRING/ __ GENERO DE UN LIBRO [ TERROR - FANTASIA ... ]  ↓↓
     */
    genre: string;
    /**
     * ↓↓ pages - /NUMBER - FLOAT/ __ NUMERO ESPECIFICO DE LAS PAGINAS QUE CONTIENE 1 LIBRO  ↓↓
     */
    pages: number;
    /**
     * ↓↓ synopsis - /STRING/ __ DESCRIPCION CORTA DE  1 LIBRO  ↓↓
     */
    synopsis: string;
    /**
     * ↓↓ title - /STRING/ __ TITULO DE LA OBRA O DE 1 LIBRO  ↓↓
     */
    title: string;
    /**
     * ↓↓ year - /NUMBER/ __ AÑO DE PUBLICACION DE 1 LIBRO  ↓↓
     */
    year: number;
  };
  /**
   * ↓↓ starts ? OPCIONAL - /ARRAY/ __ LISTA DE VERDADERO O FALSO PARA IDENTIFICAR LA PRIORIDAD DEL LIBRO ↓↓
   * //    ⭐                   //    ⭐   ⭐⭐   ⭐⭐⭐ //
   * //    ↓↓      ↓↓      ↓↓   //    ↓↓     ↓↓      ↓↓    //
   * // [ TRUE , FALSE , FALSE] // [ TRUE , TRUE , TRUE]   //
   */
  starts?: Array<boolean>;
  /**
   * ↓↓ priority ? OPCIONAL - /NUMBER/ __ NUMERO DE PRIORIDAD DEPENDERA DE LA LISTA starts DE ESTRELLAS ASIGNADAS 1 o 2 o 3   ↓↓
   */
  priority?: number;
}
/** ***********************************************************  **/
