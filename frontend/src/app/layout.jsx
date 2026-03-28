import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import Cursor from '../components/Cursor'

export const metadata = {
  title: 'Coderkayc_Portfolio',
  description: 'Backend Developer specialising in Node.js, Express, MongoDB and scalable API design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
