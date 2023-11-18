import User from "../../models/User.js";

const loginUsuario = async (username, clave) => {
    const respuestaBien = {
        status: "success",
        message: "Login correcto",
    };

    const respuestaMal = {
        status: "error",
        message: "Datos incorrectos",
    };

    try {
        const existeUsuario = await User.findOne({ username });

        if (!existeUsuario) {
            return {
                respuesta: respuestaMal,
                usuario: null,
            };
        }

        const passwordCorrecta = await existeUsuario.comprobarPassword(clave);

        if (!passwordCorrecta) {
            return {
                respuesta: respuestaMal,
                usuario: null,
            };
        }

        return {
            respuesta: respuestaBien,
            usuario: existeUsuario.username,
        };
    } catch (error) {
        return {
            respuesta: respuestaMal,
            usuario: null,
        };
    }
};

export default loginUsuario;
