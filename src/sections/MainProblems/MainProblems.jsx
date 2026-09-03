import './MainProblems.scss'
import Section from '@/layouts/Section/index.js'
import DefaultCard from '@/components/DefaultCard/index.js'
import MainProblemCardAction from '@/components/MainProblemCardAction'

export default (props) => {
  const { data } = props

  const { title, titleId, items = [], actionElements = {} } = data

  return (
    <Section className="main-problems" title={title} titleId={titleId}>
      <ul className="main-problems__list">
        {items.map((item) => {
          if (item.type === 'action') {
            return (
              <li
                className="main-problems__item main-problems__item--action"
                key="main-problems-action"
              >
                <MainProblemCardAction {...actionElements} />
              </li>
            )
          }
          return (
            <li className="main-problems__item" key={item.title}>
              <DefaultCard
                mediaClassName="main-problems__media"
                className="main-problems__card"
                {...item}
              />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
