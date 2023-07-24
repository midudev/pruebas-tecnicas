import { Dispatch, SetStateAction } from "react";

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

/**
 * ↓↓ DataBookInterface - /INTERFACE/ __ PARA TIPAR DATOS DE UN COMPONENTE Y PASAR PROPIEDADES ↓↓
 */
export interface DataBookInterface {
  /**
   * ↓↓ index - /NUMBER/ __ NUMERO DE INDICE DEL LIBRO SELECCIONADO ↓↓
   */
  index: number;
  /**
   * ↓↓ item - /BookProps/ __ TIPADO PARA DATOS DE 1 LIBRO ↓↓
   */
  item: BookProps;
  /**
   * ↓↓ dataStatus - /BOOLEAN/ __ ESTADO VERDADERIO O FALSE PARA MOSTRAR O ESCONDER DATOS DE UN LIBRO ↓↓
   */
  dataStatus: boolean;
  /**
   * ↓↓ setDataStatus - /DISPATCH STATE/ __ FUNCION PARA CAMBIAR ESTADO DE VERDADERO O FALSO PARA MOSTRAR O ESCONDER DATOS DE 1 LIBRO ↓↓
   */
  setDataStatus: Dispatch<SetStateAction<boolean>>;
  /**
   * ↓↓ accessKey - /NUMBER or UNDEFINED/ __ ESTADO DE NUMERO DE INDICE DEL LIBRO PARA PODER IDENTIFICAR 1 LIBRO Y MOSTRAR SUS DATOS ↓↓
   */
  accessKey: number | undefined;
  /**
   * ↓↓ setAccessKey - /DISPATCH STATE/ __ FUNCION PARA GUARDAR INDICE EN EL QUE SE ENCUENTRA LA ACCION DE MOSTRAR  ↓↓
   */
  setAccessKey: Dispatch<SetStateAction<any>>;
}
