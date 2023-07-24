/**
 * ↓↓ IconInterface - /INTERFACE/ __ PARA TIPAR DATOS DE COMPONENTE DE ICONOS ↓↓
 */
export interface IconInterface {
  /**
   * ↓↓ icon - /STRING/ __ IDENTIFICADOR UNICO DE ICONOS EN IconsCatlog  ↓↓
   */
  icon: string;
  /**
   * ↓↓ isSolid ? OPCIONAL - /BOOLEAN/ __ ESTADO VERDADERO O FALSO PARA AGREGAR RELLENO O NO A UN ICONO  ↓↓
   */
  isSolid?: boolean;
  /**
   * ↓↓ isSolid ? OPCIONAL - /NUMBER/ __ NUMERO ENTERO O FLOTANTE PARA DETERMIDAR EL GROSOR DEL ICONO  ↓↓
   */
  strokeWidth?: number;
  /**
   * ↓↓ className ? OPCIONAL - /PARAMETER/ __ PARAMETRO DE CLASSNAME PARA AGREGAR CLASES PROPIAS IMPORTANTE EL TAMAÑO DEL ICONO  ↓↓
   */
  className?: string;
  /**
   * ↓↓ fill - /STRING/ __ NUMERO HEXADECIMAL PARA AGREGAR UN COLOR AL ICONO ↓↓
   */
  fill: string;
  /**
   * ↓↓ onClick  ? OPCIONAL - /FUNCTION/ __ PARAMETRO DE FUNCION PARA AGREGAR ACCIONES A INTERACTUAR CON UN ICONO ↓↓
   */
  onClick?: () => void;
}
