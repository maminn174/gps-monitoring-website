import SitemapSection from '@/sections/SitemapSection'

export const metadata = {
  title: 'Карта сайта',
  description:
    'Карта сайта ГЛОНАСС: услуги, решения, оборудование, контакты и документы.',
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <SitemapSection />
    </>
  )
}
