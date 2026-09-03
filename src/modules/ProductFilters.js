class ProductFilters {
  selectors = {
    form: '[data-js-product-filters]',
    field: '[data-js-product-filter]',
    product: '[data-js-product-card]',
    showButton: '[data-js-product-filters-show]',
    resetButton: '[data-js-product-filters-reset]',
    toggle: '[data-js-product-filters-toggle]',
  }

  stateClasses = {
    isChanged: 'is-changed',
    isOpen: 'is-open',
  }

  constructor() {
    this.formElement = document.querySelector(this.selectors.form)

    if (!this.formElement) {
      return
    }

    this.fieldElements = this.formElement.querySelectorAll(this.selectors.field)
    this.productElements = document.querySelectorAll(this.selectors.product)
    this.resetButtonElement = this.formElement.querySelector(
      this.selectors.resetButton
    )
    this.showButtonElement = this.formElement.querySelector(
      this.selectors.showButton
    )
    this.toggleElement = document.querySelector(this.selectors.toggle)

    this.bindEvents()
    this.updateShowButton()
  }

  getFilters = () => {
    const formData = new FormData(this.formElement)

    return {
      manufacturer: formData.getAll('manufacturer'),
      vehicleTypes: formData.getAll('vehicleTypes'),
      tasks: formData.getAll('tasks'),
    }
  }

  getProductValues = (productElement, key) =>
    productElement.dataset[key]?.split(',').filter(Boolean) || []

  getMatchedProducts = () => {
    const filters = this.getFilters()

    return [...this.productElements].filter((productElement) => {
      const isManufactureOk =
        filters.manufacturer.length === 0 ||
        filters.manufacturer.includes(productElement.dataset.manufacturer)

      const productVehicleTypes = this.getProductValues(
        productElement,
        'vehicleTypes'
      )

      const isVehicleTypesOk =
        filters.vehicleTypes.length === 0 ||
        filters.vehicleTypes.some((vehicleType) =>
          productVehicleTypes.includes(vehicleType)
        )

      const productTasks = this.getProductValues(productElement, 'tasks')

      const isTasksOk =
        filters.tasks.length === 0 ||
        filters.tasks.some((task) => productTasks.includes(task))

      return isManufactureOk && isVehicleTypesOk && isTasksOk
    })
  }

  updateShowButton = () => {
    const matchedProductsCount = this.getMatchedProducts().length

    this.showButtonElement.textContent = `Показать ${matchedProductsCount} товаров`
  }

  filterProducts = () => {
    const matchedProducts = this.getMatchedProducts()

    this.productElements.forEach((productElement) => {
      productElement.hidden = !matchedProducts.includes(productElement)
    })

    this.formElement.classList.remove(this.stateClasses.isChanged)
    this.closeFilters()
  }

  updateChangedState = () => {
    const hasSelectedFilters = [...this.fieldElements].some(
      (fieldElement) => fieldElement.checked
    )

    this.formElement.classList.toggle(
      this.stateClasses.isChanged,
      hasSelectedFilters
    )
  }

  closeFilters = () => {
    this.formElement.classList.remove(this.stateClasses.isOpen)
    this.toggleElement?.setAttribute('aria-expanded', 'false')
  }

  bindEvents() {
    this.fieldElements.forEach((fieldElement) => {
      fieldElement.addEventListener('input', () => {
        this.updateShowButton()
        this.updateChangedState()
      })
      fieldElement.addEventListener('change', () => {
        this.updateShowButton()
        this.updateChangedState()
      })
    })

    this.showButtonElement?.addEventListener('click', this.filterProducts)

    this.resetButtonElement?.addEventListener('click', () => {
      setTimeout(() => {
        this.updateShowButton()
        this.updateChangedState()

        this.productElements.forEach((productElement) => {
          productElement.hidden = false
        })
      })
    })
  }
}

export default ProductFilters
