import Review from "../../models/Review.js";

async function listarReview(ISBN, pageNumber) {
    const respuestaBien = {
        status: "success",
        message: "Review encontradas",
    };

    const respuestaMal = {
        status: "error",
        message: "No hay reviews",
    };

    try {
        const reviewsPerPage = 3;
        const skipAmount = (pageNumber - 1) * reviewsPerPage;

        const listaDeReviews = await Review.find()
            .where("ISBN")
            .equals(ISBN)
            .select('-_id')
            .skip(skipAmount)
            .limit(reviewsPerPage);

        // Consulta adicional para obtener el contador total
        const totalReviews = await Review.find().where("ISBN").equals(ISBN).countDocuments();

        if (listaDeReviews.length <= 0) {
            return {
                respuesta: respuestaMal,
                listaDeReviews: null,
            };
        }
        return {
            respuesta: respuestaBien,
            listaDeReviews,
            contador: totalReviews, // Utilizamos el contador total obtenido en la consulta adicional
        };
    } catch (error) {
        return {
            respuesta: respuestaMal,
            listaDeReviews: null,
        };
    }
}

export default listarReview;