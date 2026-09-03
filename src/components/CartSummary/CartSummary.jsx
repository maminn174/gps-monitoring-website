import './CartSummary.scss'
import Form from '@/components/Form'

export default () => {
  return (
    <div className="cart-summary">
      <div
        className="cart-summary__count card-title"
        data-js-product-cart-summary-count
      ></div>
      <div className="page-description">
        Оформите заказ и наши менеджеру рассчитают для вас конечную стоимость
      </div>
      <Form
        className="cart-summary__form"
        formName="cart"
        formId="cart-form"
        idPrefix="cart"
      />
    </div>
  )
}
