class Cart {
  selectors = {
    cart: '[data-js-cart-button]',
    addCartButton: '[data-js-cart-button-add]',
  }

  constructor() {
    this.cartElement = document.querySelector(this.selectors.cart)
    if (!this.cartElement) {
      return
    }
    this.addCartButtonElements = document.querySelectorAll(
      this.selectors.addCartButton
    )
    this.key = 'cart'
    this.bindEvents()
    this.updateAddButtons()
    this.updateCartCounter()
  }

  getItems = () => {
    const savedItems = localStorage.getItem(this.key)

    if (!savedItems) {
      return []
    }

    try {
      const items = JSON.parse(savedItems)

      return Array.isArray(items) ? items : []
    } catch {
      localStorage.removeItem(this.key)
      return []
    }
  }

  saveItems = (cartItems) => {
    localStorage.setItem(this.key, JSON.stringify(cartItems))
  }

  addItem = (id) => {
    const cartItems = this.getItems()

    const hasItem = cartItems.some((item) => item.id === id)

    if (!hasItem) {
      cartItems.push({ id, quantity: 1 })
      this.saveItems(cartItems)
    }
  }

  onAddCartButtonClick = (event) => {
    const buttonElement = event.currentTarget
    const id = event.currentTarget.dataset.jsProductId
    const cartItems = this.getItems()
    const hasItem = cartItems.some((item) => item.id === id)

    if (hasItem) {
      window.location.href = '/cart'
      return
    }
    this.addItem(id)
    this.updateAddButton(buttonElement)
    this.updateCartCounter()
  }

  updateAddButton = (buttonElement) => {
    const id = buttonElement.dataset.jsProductId
    const cartItems = this.getItems()
    const hasItem = cartItems.some((item) => item.id === id)

    if (hasItem) {
      buttonElement.textContent = 'Перейти в корзину'
    }
  }

  updateAddButtons = () => {
    this.addCartButtonElements.forEach((buttonElement) => {
      this.updateAddButton(buttonElement)
    })
  }

  updateCartCounter = () => {
    const cartItems = this.getItems()
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    this.cartElement.dataset.count = count
    this.cartElement.dataset.hasItems = count > 0 ? 'true' : 'false'
  }

  bindEvents() {
    this.addCartButtonElements.forEach((addCartButtonElement) => {
      addCartButtonElement.addEventListener('click', this.onAddCartButtonClick)
    })
    window.addEventListener('cart-updated', this.updateCartCounter)
  }
}

export default Cart
