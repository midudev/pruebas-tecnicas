import connectionDB from "../config/data/database";
import listarReview from "../config/services/review/listarReview";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { ISBN, pageNumber } = req.body;
            await connectionDB()

            const data = await listarReview(ISBN, pageNumber);

            return res.status(200).json({ data });

        } catch (error) {
            return res.status(500).json({ data });
        }
    } else {
        return res.status(405).json({
            status: "error",
            message: "Método no permitido",
            data: null,
        });
    }


}