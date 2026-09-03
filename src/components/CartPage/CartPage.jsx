import './CartPage.scss'

import EmptyCartPage from './EmptyCartPage'
import CartPageSummary from '../CartSummary'
import ProductCardCart from '../ProductCardCart'
export default () => {
  return (
    <div className="cart-page container">
      <h1 className="cart-page__title page-subtitle">Корзина</h1>
      <template>
        <EmptyCartPage />
        <ProductCardCart
          item={{
            id: 'template',
            quantity: 1,
            title: '',
            image: '',
          }}
        />
      </template>
      <div className="cart-page__wrapper">
        <div
          className="cart-page__list product-card-cart__list"
          data-js-product-cart-page=""
        ></div>
        <CartPageSummary />
      </div>
    </div>
  )
}
