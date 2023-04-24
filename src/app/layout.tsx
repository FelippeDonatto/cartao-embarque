import '../styles/globals.css'
import { Rubik } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Cartão de embarque'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={rubik.className}>
      <body className='bg-gradient-to-t from-violet-800 to-violet-400 w-full h-screen text-black'>{children}</body>
    </html>
  )
}
