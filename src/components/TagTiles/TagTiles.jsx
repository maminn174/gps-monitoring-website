import './TagTiles.scss'
import Section from '@/layouts/Section'
import MoreBlock from '@/components/MoreBlock/MoreBlock'

export default (props) => {
  const { tagTiles } = props

  const titleId = 'tag-tiles-title'

  return (
    <Section
      className="tag-tiles"
      title="Смежные услуги и полезные разделы:"
      titleId={titleId}
      action={<MoreBlock label="Все услуги" href="/uslugi" />}
    >
      <div className="tag-tiles__inner">
        <ul className="tag-tiles__list">
          {tagTiles.map(({ label, href }, index) => (
            <li className="tag-tiles__item" key={index}>
              <a className="tag-tiles__link page-description" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
