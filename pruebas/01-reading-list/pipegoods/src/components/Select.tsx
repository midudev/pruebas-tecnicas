import { useBookContext } from '../store/useBookContext';

export default function Select() {
    const { genres, selectedGenre, setSelectedGenre } = useBookContext();

    return (
        <select
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
            <option value="">Todos los géneros</option>
            {genres.map((genre) => (
                <option key={genre} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
}
