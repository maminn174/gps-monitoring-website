import './Catalog.scss'
import ProductCard from '@/components/ProductCard'
import Filters from '@/components/Filters'
import { gpsTrackers } from '@/page-data/gps-trackers.data'
import clsx from 'clsx'

export default (props) => {
  const {
    products = gpsTrackers,
    withFilters = true,
    variant,
    title = 'Каталог GPS трекеров для автомобиля',
  } = props

  return (
    <section
      className={clsx(
        'catalog',
        variant && `catalog--${variant}`,
        !withFilters && 'catalog--without-filters'
      )}
      aria-labelledby="catalog-title"
    >
      <h2 id="catalog-title" className="visually-hidden">
        {title}
      </h2>
      <div className="catalog__wrapper">
        {withFilters && <Filters products={products} />}
        <ul className="catalog__grid">
          {products.map((product) => {
            const vehicleTypes = product.vehicleTypes || []
            const tasks = product.tasks || []

            return (
              <li
                className="catalog__item"
                key={product.id}
                data-js-product-card=""
                data-manufacturer={product.manufacturer}
                data-vehicle-types={vehicleTypes.join(',')}
                data-tasks={tasks.join(',')}
              >
                <ProductCard product={product} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
