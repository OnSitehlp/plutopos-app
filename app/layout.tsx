import { Roboto } from 'next/font/google'
import './ui/globals.css'

export const metadata = {
  title: 'Pluto Pos',
  description: 'Aplicación Ventas Inventario',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
