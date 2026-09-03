import './EquipmentDescription.scss'
import ProductDescription from '@/components/Tabs/TabsContent/components/ProductDescription'
import Tabs from '@/components/Tabs'
import ProductSpecifications from '@/components/Tabs/TabsContent/components/ProductSpecifications'
const EquipmentDescription = (props) => {
  const {
    tracker,
    tabsTitle = 'Описание GPS трекера',
    descriptionTitle = 'Подробное описание GPS трекера',
  } = props

  const tabItems = [
    {
      title: 'Описание',
      isActive: true,
      children: <ProductDescription tracker={tracker} />,
    },
    {
      title: 'Характеристики',
      children: <ProductSpecifications tracker={tracker} />,
    },
  ]
  const titleId = 'equipment-description-title'
  return (
    <section
      className="equipment-description container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        {descriptionTitle}
      </h2>
      <Tabs title={tabsTitle} items={tabItems} />
    </section>
  )
}

export default EquipmentDescription
