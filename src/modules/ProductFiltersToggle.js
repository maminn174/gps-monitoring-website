class ProductFiltersToggle {
  selectors = {
    toggle: '[data-js-product-filters-toggle]',
    form: '[data-js-product-filters]',
  }

  stateClasses = {
    isOpen: 'is-open',
  }

  constructor() {
    this.toggleElement = document.querySelector(this.selectors.toggle)
    this.formElement = document.querySelector(this.selectors.form)

    if (!this.toggleElement || !this.formElement) {
      return
    }

    this.bindEvents()
  }

  onToggleClick = () => {
    const isOpen = this.formElement.classList.toggle(this.stateClasses.isOpen)

    this.toggleElement.setAttribute('aria-expanded', String(isOpen))
  }

  bindEvents() {
    this.toggleElement.addEventListener('click', this.onToggleClick)
  }
}

export default ProductFiltersToggle
