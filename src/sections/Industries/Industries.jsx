import './Industries.scss'
import Section from '@/layouts/Section/index.js'
import clsx from 'clsx'
import TransportCard from '@/components/TransportCard'
import ActionCardWithDescription from '../../components/ActionCardWithDescription'

export default (props) => {
  const { data } = props

  const { title, titleId, items, actionItems } = data

  return (
    <Section className="industries" title={title} titleId={titleId}>
      <ul className="industries__list">
        {items.map(
          (
            { title, image, imageAlt, variant, imageWidth, imageHeight },
            index
          ) => (
            <li
              className={clsx(
                'industries__item',
                `industries__item--${variant}`
              )}
              key={index}
            >
              <TransportCard
                className="industries__card"
                imageClassName="industries__image"
                titleClassName="industries__title"
                title={title}
                image={image}
                imageAlt={imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
              />
            </li>
          )
        )}
        <li className="industries__item industries__item--action">
          <ActionCardWithDescription {...actionItems} />
        </li>
      </ul>
    </Section>
  )
}
