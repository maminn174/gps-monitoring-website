import CartPage from '../components/CartPage'

export const metadata = {
  title: 'Корзина',
  description:
    'Корзина выбранного GPS/ГЛОНАСС оборудования для отправки заявки: проверьте позиции и количество перед запросом стоимости.',
  robots: 'noindex, nofollow',
}

export default () => {
  return <CartPage />
}
