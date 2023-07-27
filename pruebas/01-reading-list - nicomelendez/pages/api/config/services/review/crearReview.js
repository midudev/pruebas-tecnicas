import Review from "../../models/Review.js";

const crearReview = async (id, user, rating, description, ISBN) => {
    const respuestaBien = {
        status: "success",
        message:
            "Review creada correctamente",
    };

    const respuestaMal = {
        status: "error",
        message: "Error al crear la review",
    };

    const respuestaExiste = {
        status: "error",
        message: "Ya existe un Review con ese usuario",
    };

    try {
        const existeReview = await Review.findOne({ id });

       
        if (existeReview) {
            return {
                respuesta: respuestaExiste,
                review: null,
            };
        }

        const nuevaReview = new Review({ id, user, rating, description, ISBN });

        const reviewAlmacenada = await nuevaReview.save();

        if (!reviewAlmacenada) {
            return {
                respuesta: respuestaMal,
                review: null,
            };
        }

        return {
            respuesta: respuestaBien,
            review: {
                user,
                rating,
                description,
                ISBN,
                id
            }
        };
    } catch (error) {
      
        return {
            respuesta: respuestaMal,
            review: null,
        };
    }
};

export default crearReview;
