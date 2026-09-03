class Modal {
  selectors = {
    root: '[data-js-modal]',
    openButton: '[data-js-open-modal]',
    closeButton: '[data-js-modal-close]',
    overlay: '[data-js-modal-overlay]',
    successCloseButton: '[data-js-success-close]',
    title: '[data-js-modal-title]',
    description: '[data-js-modal-description]',
  }

  stateClasses = {
    isOpen: 'is-open',
    isLock: 'is-lock',
    isSuccess: 'is-success',
  }

  closeAnimationDuration = 400

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.openButtonElements = document.querySelectorAll(
      this.selectors.openButton
    )
    this.closeButtonElement = this.rootElement.querySelector(
      this.selectors.closeButton
    )
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.successCloseButtonElement = this.rootElement.querySelector(
      this.selectors.successCloseButton
    )
    this.titleElement = this.rootElement.querySelector(this.selectors.title)
    this.descriptionElement = this.rootElement.querySelector(
      this.selectors.description
    )
    this.defaultTitleNodes = this.cloneChildNodes(this.titleElement)
    this.defaultDescriptionNodes = this.cloneChildNodes(this.descriptionElement)
    this.closeTimeoutId = null

    this.bindEvents()

    window.showSuccessModal = this.showSuccessModal
  }

  cloneChildNodes = (element) =>
    element ? [...element.childNodes].map((node) => node.cloneNode(true)) : []

  restoreChildNodes = (element, nodes) => {
    if (!element) {
      return
    }

    element.replaceChildren(...nodes.map((node) => node.cloneNode(true)))
  }

  openModal = () => {
    clearTimeout(this.closeTimeoutId)
    this.rootElement.hidden = false
    this.rootElement.classList.add(this.stateClasses.isOpen)
    document.documentElement.classList.add(this.stateClasses.isLock)
  }

  closeModal = () => {
    this.rootElement.classList.remove(this.stateClasses.isOpen)
    document.documentElement.classList.remove(this.stateClasses.isLock)
    delete this.rootElement.dataset.source
    delete this.rootElement.dataset.productTitle
    delete this.rootElement.dataset.productQuantity
    clearTimeout(this.closeTimeoutId)
    this.closeTimeoutId = setTimeout(() => {
      this.resetModalState()
      this.rootElement.hidden = true
    }, this.closeAnimationDuration)
  }

  resetModalState = () => {
    this.rootElement.classList.remove(this.stateClasses.isSuccess)

    this.restoreChildNodes(this.titleElement, this.defaultTitleNodes)
    this.restoreChildNodes(
      this.descriptionElement,
      this.defaultDescriptionNodes
    )
  }

  showSuccessModal = () => {
    this.rootElement.classList.add(this.stateClasses.isSuccess)
    this.openModal()
  }

  onOpenButtonClick = (event) => {
    const button = event.currentTarget
    const source = button.dataset.source
    const modalTitle = button.dataset.modalTitle
    const modalDescription = button.dataset.modalDescription

    const productTitle = button.dataset.productTitle
    const productQuantity = button.dataset.productQuantity

    if (productTitle) {
      this.rootElement.dataset.productTitle = productTitle
    }

    if (productQuantity) {
      this.rootElement.dataset.productQuantity = productQuantity
    }

    this.resetModalState()

    if (modalTitle && this.titleElement) {
      this.titleElement.textContent = modalTitle
    }

    if (modalDescription && this.descriptionElement) {
      this.descriptionElement.textContent = modalDescription
    }

    this.rootElement.dataset.source = source
    this.openModal()
  }

  onDocumentKeydown = (event) => {
    if (event.key === 'Escape') {
      this.closeModal()
    }
  }

  bindEvents() {
    this.openButtonElements.forEach((buttonElement) => {
      buttonElement.addEventListener('click', this.onOpenButtonClick)
    })

    this.closeButtonElement?.addEventListener('click', this.closeModal)

    this.overlayElement?.addEventListener('click', this.closeModal)

    this.successCloseButtonElement?.addEventListener('click', this.closeModal)

    document.addEventListener('keydown', this.onDocumentKeydown)
  }
}

export default Modal
