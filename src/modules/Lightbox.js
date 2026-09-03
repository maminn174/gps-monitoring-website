class Lightbox {
  selectors = {
    root: '[data-js-lightbox]',
    image: '[data-js-lightbox-image]',
    overlay: '[data-js-lightbox-overlay]',
    closeButton: '[data-js-lightbox-close]',
    zoomButton: '[data-js-lightbox-zoom-button]',
  }

  stateClasses = {
    isOpen: 'is-open',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.imageElement = this.rootElement.querySelector(this.selectors.image)
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.closeButtonElement = this.rootElement.querySelector(
      this.selectors.closeButton
    )
    this.zoomButtonElements = document.querySelectorAll(
      this.selectors.zoomButton
    )
    this.placeholderSrc =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    this.bindEvents()
  }

  openLightbox = (imageSrc, imageAlt) => {
    this.imageElement.src = imageSrc
    this.imageElement.alt = imageAlt
    this.rootElement.classList.add(this.stateClasses.isOpen)
    document.body.style.overflow = 'hidden'
  }

  closeLightbox = () => {
    this.rootElement.classList.remove(this.stateClasses.isOpen)
    document.body.style.overflow = ''
    this.imageElement.src = this.placeholderSrc
    this.imageElement.alt = ''
  }

  bindEvents() {
    this.zoomButtonElements.forEach((button) => {
      button.addEventListener('click', () => {
        const image = button.querySelector('[data-js-slider-image]')
        this.imageElement.src = image.src
        this.imageElement.alt = image.alt

        this.openLightbox(image.src, image.alt)
      })
    })

    this.closeButtonElement.addEventListener('click', this.closeLightbox)
    this.overlayElement.addEventListener('click', this.closeLightbox)

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox()
      }
    })
  }
}

export default Lightbox
