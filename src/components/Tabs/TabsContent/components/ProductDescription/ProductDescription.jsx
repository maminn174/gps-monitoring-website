import './ProductDescription.scss'
import MarkerList from '@/components/MarkerList'

export default (props) => {
  const { tracker } = props

  const renderDescription = (description) => {
    if (!description) {
      return null
    }

    if (Array.isArray(description)) {
      return description.map((paragraph, index) => (
        <p
          className="product-description__description"
          key={`${index}-${paragraph}`}
        >
          {paragraph}
        </p>
      ))
    }

    return <p className="product-description__description">{description}</p>
  }

  return (
    <div className="product-description">
      {tracker.extendedDescription.map(
        ({ title, description, items = [] }, index) => (
          <section
            className="product-description__section"
            key={title || `${index}-${description?.[0] || items[0]}`}
          >
            {title && <h3 className="product-description__title">{title}</h3>}
            {renderDescription(description)}
            {items.length > 0 && (
              <MarkerList items={items} className="product-description__list" />
            )}
          </section>
        )
      )}
    </div>
  )
}
