import './CartButton.scss'
import Icon from '@/components/Icon'
export default () => {
  return (
    <a
      className="cart-button"
      title="Корзина"
      aria-label="Корзина"
      href="/cart"
      data-count="0"
      data-js-cart-button=""
      data-has-items="false"
    >
      <Icon name="cart" hasFill />
    </a>
  )
}
