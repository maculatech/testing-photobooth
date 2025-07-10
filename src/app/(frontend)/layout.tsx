import './styles.css'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ClientLayout from '@/app/components/layout/ClientLayout'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayload({ config })
  
  // Fetch both header and footer data in parallel
  const [headerData, footerData] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }) 
  ])

  return (
    <html lang="en">
      <body>
        <ClientLayout headerData={headerData} footerData={footerData}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}