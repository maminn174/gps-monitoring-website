import clsx from 'clsx'
import '../MarkerList/MarkerList.scss'
import './SitemapList.scss'

const SitemapList = ({ className, items = [] }) => (
  <>
    <ul className={clsx('marker-list sitemap-list', className)}>
      {items.map(({ label, href, children }) => (
        <li className="marker-item sitemap-list__item" key={href}>
          <a className="sitemap-list__link" href={href}>
            {label}
          </a>

          {children?.length > 0 && (
            <SitemapList className="sitemap-list__children" items={children} />
          )}
        </li>
      ))}
    </ul>
  </>
)

export default SitemapList
