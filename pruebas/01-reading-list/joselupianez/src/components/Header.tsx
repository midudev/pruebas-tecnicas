import { useTranslation } from 'react-i18next';
import { LANGUAGES } from "../constants/languages"

const Header = () => {
    const { t, i18n } = useTranslation()

    const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        void i18n.changeLanguage(event.target.value)
    }

    return (
        <header className="border-b border-neutral-700">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-center py-6">
                    <section className="flex flex-row gap-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span className="text-2xl font-bold">
                            {t("title")}
                        </span>
                    </section>
                    <select defaultValue={i18n.language.split("-")[0]} onChange={onChangeLanguage} className="bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-md font-bold">
                        {LANGUAGES.map(({ code, label }) => (
                            <option key={code} value={code} className="px-4 py-2 text-sm hover:bg-neutral-700">
                                {label}
                            </option>
                        ))}
                    </select>
                </div> 
            </div>
        </header>
    )

}

export default Header
