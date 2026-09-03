import './DataTransfer.scss'
import Section from '@/layouts/Section'
import DataTransferCard from '../../components/DataTransferCard'

export default (props) => {
  const { data } = props

  const { title, titleId, items = [], className } = data

  return (
    <Section className="data-transfer" title={title} titleId={titleId}>
      <ul className="data-transfer__list">
        {items.map((item, index) => (
          <li className="data-transfer__item" key={index}>
            <DataTransferCard className={className} {...item} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
