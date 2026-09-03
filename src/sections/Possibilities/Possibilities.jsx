import './Possibilities.scss'
import Section from '@/layouts/Section/index.js'
import DefaultCard from '@/components/DefaultCard/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const { cards } = props

  const {
    title,
    titleId,
    items,
    actionTitle = 'Подберём решение под ваши задачи и транспорт!',
    actionButtonText = 'Получить решение',
    actionText = 'Быстрый расчёт в день обращения',
  } = cards

  return (
    <Section className="possibilities" title={title} titleId={titleId}>
      <ul className="possibilities__list">
        {items.map((item) => (
          <li className="possibilities__item" key={item.title}>
            <DefaultCard
              {...item}
              mediaClassName="possibilities__media"
              imageClassName="possibilities__image"
              headerClassName="possibilities__header"
              titleClassName="possibilities__title"
              imageWidth={120}
              imageHeight={120}
              mediaBefore={<span className="possibilities__red-rectangle" />}
            />
          </li>
        ))}
        <li className="possibilities__item possibilities__item--action">
          <h3 className="possibilities__action-title">{actionTitle}</h3>
          <div className="possibilities__action-content">
            <Button
              className="possibilities__button"
              data-js-open-modal=""
              data-source="possibilities-cta"
            >
              <span>{actionButtonText}</span>
            </Button>
            <p className="possibilities__action-text">{actionText}</p>
          </div>
        </li>
      </ul>
    </Section>
  )
}
