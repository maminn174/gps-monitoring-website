import './EquipmentHero.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const {
    product = props.tracker,
    productType = 'GPS трекер',
    priceDescription = '*Итоговая стоимость зависит от необходимого функционала и количества автомобилей',
  } = props

  const {
    id,
    title,
    description,
    image,
    modalDescription,
    status = 'В наличии',
    statusVariant = 'available',
  } = product

  return (
    <section className="container">
      <div className="equipment-hero__header">
        <h1 className="page-subtitle">
          {productType} {title}
        </h1>
      </div>
      <div className="equipment-hero__wrapper">
        <div className="equipment-hero__media">
          <img
            className="equipment-hero__image"
            src={image}
            alt={title}
            width={530}
            height={300}
            loading="eager"
          />
        </div>
        <div className="equipment-hero__body">
          <span
            className={clsx(
              'equipment-hero__status equipment__status',
              statusVariant && `equipment__status--${statusVariant}`
            )}
          >
            {status}
          </span>
          <p className="equipment-hero__description page-description">
            {description}
          </p>
          <div className="equipment-hero__price">
            <span className="equipment-hero__price-title card-title">
              Цена по запросу*
            </span>
            <p className="equipment-hero__price-description">
              {priceDescription}
            </p>
          </div>

          <div className="equipment-hero__actions">
            <Button
              className="equipment-hero__button"
              data-js-open-modal=""
              data-source={`equipment-hero__-${id}`}
              data-modal-title={`Купить ${productType.toLowerCase()} ${title}`}
              data-modal-description={
                modalDescription ||
                'Заполните форму для расчета стоимости оборудования и наши менеджеры перезвонят в течение 15 минут'
              }
              data-product-title={title}
              data-product-quantity="1"
            >
              Запросить цену
            </Button>
            <Button
              className="equipment-hero__button"
              variant="secondary"
              data-js-cart-button-add=""
              data-js-product-id={id}
            >
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
