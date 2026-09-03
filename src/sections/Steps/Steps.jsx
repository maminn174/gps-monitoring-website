import './Steps.scss'
import Section from '@/layouts/Section'
import StepsCard from '../../components/StepsCard'
import StepsActionCard from '../../components/StepsCard/StepsCardAction'

export default (props) => {
  const { data } = props

  const { title, titleId, items, result } = data

  const listClassName =
    items.length === 4 ? 'steps__list steps__list--four' : 'steps__list'

  return (
    <Section className="steps" title={title} titleId={titleId}>
      <ul className={listClassName}>
        {items.map((item, index) => (
          <li className="steps__item" key={index}>
            <StepsCard items={item} />
          </li>
        ))}
        <li className="steps__item steps__item--result">
          <StepsActionCard result={result} />
        </li>
      </ul>
    </Section>
  )
}
