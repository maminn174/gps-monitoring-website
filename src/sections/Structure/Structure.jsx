import './Structure.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import DefaultCard from '@/components/DefaultCard'
import StructureActionCard from '@/components/StructureActionCard'

export default (props) => {
  const { structures, className } = props

  const { title, titleId, items, result } = structures

  return (
    <Section
      className={clsx('structure', className)}
      title={title}
      titleId={titleId}
    >
      <ul className="structure__list">
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
            <li className="structure__item" key={index}>
              <DefaultCard
                className="structure__card"
                mediaClassName="structure__media"
                imageClassName="structure__image"
                headerClassName="structure__header"
                numberClassName="structure__number"
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
        <li className="structure__item structure__item--result">
          <StructureActionCard result={result} />
        </li>
      </ul>
    </Section>
  )
}
