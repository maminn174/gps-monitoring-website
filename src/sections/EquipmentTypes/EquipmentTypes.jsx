import './EquipmentTypes.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import DefaultCard from '@/components/DefaultCard'
export default function EquipmentTypes(props) {
  const { className, equipments } = props

  const { title, titleId, items } = equipments

  return (
    <Section
      className={clsx('equipment-types', className)}
      title={title}
      titleId={titleId}
    >
      <ul className="equipment-types__list">
        {items.map(
          ({
            title,
            description,
            image,
            imageAlt,
            imageWidth,
            imageHeight,
            variant,
          }) => (
            <li className="equipment-types__item" key={title}>
              <DefaultCard
                className="equipment-types__card"
                mediaClassName="equipment-types__media"
                imageClassName="equipment-types__image"
                headerClassName="equipment-types__header"
                title={title}
                description={description}
                image={image}
                imageAlt={imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                variant={variant}
              />
            </li>
          )
        )}
      </ul>
    </Section>
  )
}
