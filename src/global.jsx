import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import Favicon from '@/assets/favicons/favicon.ico'
import manifest from '@/assets/favicons/site.webmanifest'
import Modal from '@/components/Modal'
import Cookies from '@/components/Cookies'
import PageUp from '@/components/PageUp'
import Breadcrumbs from './components/Breadcrumbs'

export default (props) => {
  const {
    children,
    title,
    description,
    ogType = 'website',
    ogImage,
    ogImageAlt,
    url,
    robots = 'index, follow',
    breadcrumbs = [],
    breadcrumbsPlacement = 'default',
    isNotFoundPage = false,
  } = props

  const siteName = 'ГЛОНАСС GPS мониторинг транспорта'
  const defaultOgImage = '/images/og-image.webp'
  const normalizePath = (path) =>
    typeof path === 'string' && path !== '/' ? path.replace(/\/+$/, '') : path
  const normalizedUrl = normalizePath(url || '/')
  const isHomePage = normalizedUrl === '/'
  const shouldRenderPageMeta = !isNotFoundPage
  const pageOgImage = ogImage || defaultOgImage

  return (
    <>
      <Head htmlAttributes={{ lang: 'ru' }}>
        <title>{title}</title>
        <meta name="description" content={description} />

        {shouldRenderPageMeta && <link rel="canonical" href={normalizedUrl} />}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content={robots} />

        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {shouldRenderPageMeta && (
          <meta property="og:url" content={normalizedUrl} />
        )}
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:image:alt" content={ogImageAlt || siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={pageOgImage} />

        <script src="/src/main.js" type="module" />
        <link rel="icon" href={Favicon} type="image/x-icon" />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={normalizedUrl} />
      <Content>
        {!isHomePage && breadcrumbsPlacement !== 'section' && (
          <Breadcrumbs items={breadcrumbs} />
        )}
        {children}
      </Content>
      <Footer />
      <Modal />
      <Cookies />
      <PageUp />
    </>
  )
}
