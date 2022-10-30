import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="logHi"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `console.log('Hi')` }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
