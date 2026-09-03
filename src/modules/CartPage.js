import loadEquipments from '@/modules/loadEquipments'

const escapeHTML = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

class CartPage {
  selectors = {
    cartPage: '[data-js-product-cart-page]',
    incrementButton: '[data-js-cart-increment]',
    decrementButton: '[data-js-cart-decrement]',
    quantity: '[data-js-cart-quantity]',
    cartItem: '[data-js-cart-item]',
    removeButton: '[data-js-cart-remove]',
    summaryCount: '[data-js-product-cart-summary-count]',
  }

  constructor() {
    this.cartPageElement = document.querySelector(this.selectors.cartPage)
    this.key = 'cart'
    if (!this.cartPageElement) {
      return
    }
    this.summaryCountElement = document.querySelector(
      this.selectors.summaryCount
    )

    this.renderCartItems()
    this.bindEvents()
  }

  getCartItems = async () => {
    const cartItems = this.getRawCartItems()

    if (cartItems.length === 0) {
      return []
    }

    const equipments = await loadEquipments()

    return cartItems
      .map((cartItem) => {
        const product = equipments.find((product) => product.id === cartItem.id)

        if (!product) {
          return null
        }

        return {
          id: cartItem.id,
          quantity: cartItem.quantity,
          title: product.title,
          image: product.image,
        }
      })
      .filter(Boolean)
  }

  getRawCartItems = () => {
    const savedCart = localStorage.getItem(this.key)

    if (!savedCart) {
      return []
    }

    try {
      const cartItems = JSON.parse(savedCart)

      return Array.isArray(cartItems)
        ? cartItems
            .map((item) => ({
              id: typeof item.id === 'string' ? item.id : '',
              quantity: Number.isInteger(item.quantity) ? item.quantity : 0,
            }))
            .filter((item) => item.id && item.quantity > 0)
        : []
    } catch {
      localStorage.removeItem(this.key)
      return []
    }
  }

  saveCartItems = (cartItems) => {
    localStorage.setItem(this.key, JSON.stringify(cartItems))
  }

  renderEmptyCart = () => `
  <div class="empty-cart-page">
    <h2 class="empty-cart-page__title card-page">Ваша корзина пуста</h2>
    <p class="empty-cart-page__description page-description">
      Добавьте товары в корзину, чтобы оформить заявку
    </p>
    <a class="button empty-cart-page__button" href="/oborudovanie/gps-trekery-dlya-avtomobilya">
      Перейти в каталог
    </a>
  </div>
`

  renderCartItem = (item) => `
  <div
      class="product-card-cart"
      data-js-cart-item=""
      data-js-product-id="${escapeHTML(item.id)}"
    >
     <div class="product-card-cart__media">
      <img
        class="product-card-cart__image"
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.title)}"
      >
    </div>
    <div class="product-card-cart__body">
      <h2 class="product-card-cart__title">${escapeHTML(item.title)}</h2>
      <div class="product-card-cart__actions">
        <div class="product-card-cart__quantity">
          <button
            class="product-card-cart__button product-card-cart__button--decrement"
            type="button"
            aria-label="Уменьшить количество"
            data-js-cart-decrement=""
          ></button>
          <span
            class="product-card-cart__button--count"
            data-js-cart-quantity=""
          >
            ${escapeHTML(item.quantity)}
          </span>
          <button
            class="product-card-cart__button product-card-cart__button--increment"
            type="button"
            aria-label="Увеличить количество"
            data-js-cart-increment=""
          ></button>
        </div>
        <button
          class="product-card-cart__remove-button"
          type="button"
          title="Удалить товар"
          aria-label="Удалить товар"
          data-js-cart-remove=""
        ></button>
      </div>
    </div>
  </div>
`

  renderCartItems = async () => {
    const cartItems = await this.getCartItems()

    if (cartItems.length === 0) {
      this.cartPageElement.innerHTML = this.renderEmptyCart()
      this.renderSummary()
      return
    }

    this.cartPageElement.innerHTML = cartItems
      .map((item) => this.renderCartItem(item))
      .join('')

    this.renderSummary()
  }

  incrementItem = (id) => {
    const cartItems = this.getRawCartItems()

    const item = cartItems.find((item) => item.id === id)
    if (!item) {
      return
    }
    item.quantity += 1
    this.saveCartItems(cartItems)
    return item.quantity
  }

  decrementItem = (id) => {
    const cartItems = this.getRawCartItems()

    const item = cartItems.find((item) => item.id === id)
    if (!item) {
      return
    }

    if (item.quantity <= 1) {
      this.removeItem(id)
      return 0
    }

    item.quantity -= 1
    this.saveCartItems(cartItems)
    return item.quantity
  }

  onIncrementButtonClick = (buttonElement) => {
    const cartItemElement = buttonElement.closest(this.selectors.cartItem)
    if (!cartItemElement) {
      return
    }

    const id = cartItemElement.dataset.jsProductId

    const newQuantity = this.incrementItem(id)
    if (newQuantity === undefined) {
      return
    }

    const quantityElement = cartItemElement.querySelector(
      this.selectors.quantity
    )
    if (!quantityElement) {
      return
    }
    quantityElement.textContent = newQuantity

    this.renderSummary()
  }

  onDecrementButtonClick = async (buttonElement) => {
    const cartItemElement = buttonElement.closest(this.selectors.cartItem)
    if (!cartItemElement) {
      return
    }

    const id = cartItemElement.dataset.jsProductId

    const newQuantity = this.decrementItem(id)
    if (newQuantity === undefined) {
      return
    }

    if (newQuantity === 0) {
      await this.renderCartItems()
      window.dispatchEvent(new CustomEvent('cart-updated'))
      return
    }

    const quantityElement = cartItemElement.querySelector(
      this.selectors.quantity
    )
    if (!quantityElement) {
      return
    }
    quantityElement.textContent = newQuantity
    this.renderSummary()
  }

  onCartPageClick = (event) => {
    const incrementButton = event.target.closest(this.selectors.incrementButton)

    if (incrementButton) {
      this.onIncrementButtonClick(incrementButton)
      return
    }

    const decrementButton = event.target.closest(this.selectors.decrementButton)

    if (decrementButton) {
      this.onDecrementButtonClick(decrementButton)
      return
    }

    const removeButton = event.target.closest(this.selectors.removeButton)

    if (removeButton) {
      this.onRemoveButtonClick(removeButton)
    }
  }

  removeItem = (id) => {
    const cartItems = this.getRawCartItems()

    const updatedItems = cartItems.filter((item) => item.id !== id)
    this.saveCartItems(updatedItems)
  }

  onRemoveButtonClick = async (buttonElement) => {
    const cartItemElement = buttonElement.closest(this.selectors.cartItem)
    if (!cartItemElement) {
      return
    }
    const id = cartItemElement.dataset.jsProductId
    this.removeItem(id)
    await this.renderCartItems()
    window.dispatchEvent(new CustomEvent('cart-updated'))
  }

  getSummaryCount = () => {
    const cartItems = this.getRawCartItems()
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  renderSummary = () => {
    const count = this.getSummaryCount()
    if (this.summaryCountElement) {
      this.summaryCountElement.textContent = `Итого ${count} товаров`
    }
  }

  bindEvents() {
    this.cartPageElement.addEventListener('click', this.onCartPageClick)
    window.addEventListener('cart-updated', this.renderCartItems)
  }
}

export default CartPage
