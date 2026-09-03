import './ProductCardCart.scss'

export default ({ item }) => {
  return (
    <div
      className="product-card-cart"
      data-js-cart-item=""
      data-js-product-id={item.id}
    >
      <div className="product-card-cart__media">
        <img
          className="product-card-cart__image"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="product-card-cart__body">
        <h2 className="product-card-cart__title">{item.title}</h2>
        <div className="product-card-cart__actions">
          <div className="product-card-cart__quantity">
            <button
              className="product-card-cart__button product-card-cart__button--decrement"
              type="button"
              aria-label="Уменьшить количество"
              data-js-cart-decrement=""
            ></button>
            <span
              className="product-card-cart__button--count"
              data-js-cart-quantity=""
            >
              {item.quantity}
            </span>
            <button
              className="product-card-cart__button product-card-cart__button--increment"
              type="button"
              aria-label="Увеличить количество"
              data-js-cart-increment=""
            ></button>
          </div>
          <button
            className="product-card-cart__remove-button"
            type="button"
            title="Удалить товар"
            aria-label="Удалить товар"
            data-js-cart-remove=""
          ></button>
        </div>
      </div>
    </div>
  )
}
