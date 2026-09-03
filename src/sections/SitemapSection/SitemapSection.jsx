import './SitemapSection.scss'
import SitemapList from '@/components/SitemapList'
import { sitemapItems } from '@/page-data/sitemap.data'

export default () => {
  return (
    <section className="sitemap-section container">
      <h1 className="sitemap-list__title page-subtitle">Карта сайта</h1>
      <SitemapList className="site-map__list" items={sitemapItems} />
    </section>
  )
}
