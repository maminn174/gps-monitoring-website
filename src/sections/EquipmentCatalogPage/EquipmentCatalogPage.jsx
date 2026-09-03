import './EquipmentCatalogPage.scss'
import Catalog from '@/sections/Catalog'

export default (props) => {
  const {
    title = 'GPS трекеры для автомобиля',
    lead = (
      <>
        Подберём GPS/GSM трекер для авто, автономный маяк с аккумулятором,
        магнитный трекер или устройство в прикуриватель для личной машины,
        служебного транспорта, такси, доставки и автопарка
      </>
    ),
    products,
    withFilters = true,
    catalogTitle = title,
    variant,
  } = props

  return (
    <div className="equipment-catalog-page container">
      <div className="equipment-catalog-page__header">
        <h1 className="page-subtitle">{title}</h1>
      </div>
      <p className="equipment-catalog-page__lead page-description">{lead}</p>
      <Catalog
        products={products}
        withFilters={withFilters}
        title={catalogTitle}
        variant={variant}
      />
    </div>
  )
}
