import './SeoBlock.scss'
import Section from '@/layouts/Section'
import MarkerList from '@/components/MarkerList'

export default (props) => {
  const { seoText } = props

  const { title, firstParagraph, secondParagraph, items = [] } = seoText

  return (
    <Section className="seo-block" title={title} titleId="seo-block-title">
      <div className="seo-block__inner">
        <p className="seo-block__text page-description">{firstParagraph}</p>
        <p className="seo-block__text page-description">{secondParagraph}</p>
        <MarkerList items={items} />
      </div>
    </Section>
  )
}
