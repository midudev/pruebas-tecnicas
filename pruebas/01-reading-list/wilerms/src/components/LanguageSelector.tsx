const languages = {
  en: { name: 'English', flag: '🇬🇧', slang: 'en-US' },
  es: { name: 'Spanish', flag: '🇪🇸', slang: 'es-ES' },
  de: { name: 'Deutch', flag: '🇩🇪', slang: 'de-GE' },
  fr: { name: 'French', flag: '🇫🇷', slang: 'fr-FR' },
  it: { name: 'Italian', flag: '🇮🇹', slang: 'it-IT' },
  jp: { name: 'Japanese', flag: '🇯🇵', slang: 'ja_JP' },
  ko: { name: 'Korean', flag: '🇰🇷', slang: 'ko_KR' },
  zh_CN: { name: 'Chinese CN', flag: '🇨🇳', slang: 'zh_CN' },
  zh_TW: { name: 'Chinese TW', flag: '🇨🇳', slang: 'zh_TW' }
}

const LanguageSelector = () => {
  return (
    <button title="Español" className=" w-[35px] h-[35px] rounded-full flex items-center justify-center text-2xl">
      🇪🇸
    </button>
  )
}

export default LanguageSelector
