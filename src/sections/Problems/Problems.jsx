import './Problems.scss'
import Section from '@/layouts/Section/index.js'
import Button from '@/components/Button'
import ProblemCard from '@/components/ProblemCard'

export default (props) => {
  const { problems = [] } = props

  const { title, titleId, badgeIcon, imageClassName, items, actionTitle } =
    problems

  return (
    <Section className="problems" title={title} titleId={titleId}>
      <ul className="problems__list">
        {items.map((item) => (
          <li className="problems__item" key={item.title}>
            <ProblemCard
              {...item}
              badgeIcon={item.badgeIcon ?? badgeIcon}
              imageClassName={item.imageClassName ?? imageClassName}
            />
          </li>
        ))}
        <li className="problems__cta">
          <h3 className="problems__cta-title">{actionTitle}</h3>
          <Button data-js-open-modal="" data-source="problems-cta">
            Оставить заявку
          </Button>
        </li>
      </ul>
    </Section>
  )
}
