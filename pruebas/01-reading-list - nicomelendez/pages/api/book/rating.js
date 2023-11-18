import connectionDB from "../config/data/database";
import Review from "../config/models/Review.js"
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { ISBN } = req.body;
            await connectionDB()

            const reviewsToBook = await Review.find({ ISBN });

            if (reviewsToBook.length === 0) {
                return res.status(200).json({ averageRating: 0 });
            }

            const totalRating = reviewsToBook.reduce(
                (sum, review) => sum + parseInt(review.rating),
                0
            );
            const averageRating = totalRating / reviewsToBook.length;

            return res.status(200).json({ averageRating });

        } catch (error) {
            return res.status(500).json({ averageRating: 0 });
        }
    } else {
        return res.status(405).json({
            averageRating: 0
        });
    }


}