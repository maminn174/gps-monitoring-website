import Section from '@/layouts/Section'
import Catalog from '../Catalog'
import { gpsTrackers } from '@/page-data/gps-trackers.data'
import MoreBlock from '../../components/MoreBlock'

const relatedProductIds = [
  'glonasssoft-umka-315-r2',
  'glonasssoft-umka-312-ra2v2',
  'glonasssoft-umka-304',
  'glonasssoft-umka-302-bac2',
  'glonasssoft-umka-310lj',
]

export default ({ currentProductId } = {}) => {
  const relatedProducts = relatedProductIds
    .map((id) => gpsTrackers.find((product) => product.id === id))
    .filter((product) => product && product.id !== currentProductId)

  return (
    <Section
      className="related-products"
      title="Похожее оборудование:"
      titleId="related-products-title"
      action={
        <MoreBlock
          label="Все GPS трекеры"
          href="/oborudovanie/gps-trekery-dlya-avtomobilya"
        />
      }
    >
      <Catalog
        products={relatedProducts}
        withFilters={false}
        variant="related"
      />
    </Section>
  )
}
