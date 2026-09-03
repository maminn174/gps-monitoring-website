import './ProductCard.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default ({ product }) => {
  const {
    id,
    title,
    image,
    description,
    url,
    modalDescription = 'Заполните форму для расчета стоимости оборудования и наши менеджеры перезвонят в течение 15 минут',
    status = 'В наличии',
    statusVariant = 'available',
  } = product

  return (
    <article className="product-card">
      <h3 className="product-card__title">
        <a className="product-card__link" href={url}>
          {title}
        </a>
      </h3>

      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={image}
          alt={title}
          width={212}
          height={120}
          loading="lazy"
        />
        <span
          className={clsx(
            'product-card__status equipment__status',
            statusVariant && `equipment__status--${statusVariant}`
          )}
        >
          {status}
        </span>
      </div>
      <p className="product-card__price">Цена по запросу</p>
      <p className="product-card__description">{description}</p>
      <div className="product-card__actions">
        <Button
          className="product-card__button"
          data-js-open-modal=""
          data-source={`product-card-${id}`}
          data-modal-title={`Заказ ${title}`}
          data-modal-description={modalDescription}
          data-product-title={title}
          data-product-quantity="1"
        >
          Купить
        </Button>
        <Button
          className="product-card__button"
          variant="secondary"
          data-js-cart-button-add=""
          data-js-product-id={id}
        >
          В корзину
        </Button>
      </div>
    </article>
  )
}
