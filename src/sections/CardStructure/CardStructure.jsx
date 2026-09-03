import './CardStructure.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import DefaultCard from '@/components/DefaultCard'

export default (props) => {
  const { structures, className } = props

  const { title, titleId, items } = structures

  return (
    <Section
      className={clsx('card-structure', className)}
      title={title}
      titleId={titleId}
    >
      <ul className="card-structure__list">
        {items.map(
          (
            {
              title,
              description,
              image,
              imageAlt,
              imageWidth,
              imageHeight,
              variant,
              number,
            },
            index
          ) => (
            <li className="card-structure__item" key={index}>
              <DefaultCard
                className="card-structure__card"
                mediaClassName="card-structure__media"
                imageClassName="card-structure__image"
                headerClassName="card-structure__header"
                numberClassName="card-structure__number"
                title={title}
                description={description}
                image={image}
                imageAlt={imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                variant={variant}
                number={number}
              />
            </li>
          )
        )}
      </ul>
    </Section>
  )
}
