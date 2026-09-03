import './EmptyCartPage.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <div className="empty-cart-page">
      <h2 className="empty-cart-page__title card-page">Ваша корзина пуста</h2>
      <p className="empty-cart-page__description page-description">
        Добавьте товары в корзину, чтобы оформить заявку
      </p>
      <Button
        className="empty-cart-page__button"
        href="/oborudovanie/gps-trekery-dlya-avtomobilya"
      >
        Перейти в каталог
      </Button>
    </div>
  )
}
