import connectionDB from "../config/data/database";
import crearReview from "../config/services/review/crearReview.js";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { id, user, rating, description, ISBN } = req.body;
            await connectionDB()

            const data = await crearReview(id, user, rating, description, ISBN);
            
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