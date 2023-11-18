import User from "../../models/User.js";

const crearUsuario = async (username, clave) => {
  const respuestaBien = {
    status: "success",
    message:
      "Usuario creado correctamente, revisa tu email para confirmar tu cuenta",
  };

  const respuestaMal = {
    status: "error",
    message: "Error al crear el usuario",
  };

  const respuestaExiste = {
    status: "error",
    message: "Ya existe un usuario con ese correo electrónico",
  };

  try {
    const existeUsuario = await User.findOne({ username });

    if (existeUsuario) {
      return {
        respuesta: respuestaExiste,
        usuario: null,
      };
    }
    
    const nuevoUsuario = new User({ username, clave });

    const usuarioAlmacenado = await nuevoUsuario.save();

    if (!usuarioAlmacenado) {
      return {
        respuesta: respuestaMal,
        usuario: null,
      };
    }

    return {
      respuesta: respuestaBien,
      usuario: usuarioAlmacenado.username,
    };
  } catch (error) {
    return {
      respuesta: respuestaMal,
      usuario: null,
    };
  }
};

export default crearUsuario;
