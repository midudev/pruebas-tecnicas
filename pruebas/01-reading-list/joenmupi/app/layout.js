import ThemeMui from './components/themeMui'
import '../styles/globals.css'

export const metadata = {
  title: 'FakeLib',
  description: 'Challenge junior developer for midudev',
  generator: 'Next.js',
  applicationName: 'FakeLib',
  referrer: 'origin-when-cross-origin',
  keywords: ['FakeLib', 'Challenge', 'midudev'],
  colorScheme: 'dark',
  creator: 'jose mundo',
  publisher: 'jose mundo',
  openGraph: {
    title: 'FakeLib',
    description: 'Challenge junior developer for midudev',
    // url: 'https://www.goftvisualize.com',
    siteName: 'FakeLib',
    images: {
      url: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      with: 2000,
      height: 1333,
      alt: 'FakeLib thumbnail'
    }
  },
  alternates: {
    languages: {
      'en-US': '/'
    }
  },
  icons: {
    icon: '/favicon.ico'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeMui>
          {children}
        </ThemeMui>
      </body>
    </html>
  )
}
