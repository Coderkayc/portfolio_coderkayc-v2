import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import Cursor from '../components/Cursor'

export const metadata = {
  title: 'Ovaga Casmir Kosi | Software Developer',
  description:
    'Software Developer building fast, reliable web applications with Next.js, Node.js, Express and MongoDB.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
