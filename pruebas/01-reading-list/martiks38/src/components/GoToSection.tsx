import goToSectionStyle from '@/assets/styles/Components/GoToSection.module.css'

export function GoToSection({ message, tag }: { message: string; tag: `#${string}` }) {
  return (
    <a href={tag} className={goToSectionStyle.skipBanner}>
      {message}
    </a>
  )
}
