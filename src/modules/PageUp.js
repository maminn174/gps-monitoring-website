class PageUp {
  selectors = {
    pageUpButton: '[data-js-page-up]',
  }

  stateClasses = {
    isVisible: 'is-visible',
  }

  constructor() {
    this.pageUpButtonElement = document.querySelector(
      this.selectors.pageUpButton
    )

    this.bindEvents()
  }

  activateButton = () => {
    this.pageUpButtonElement.classList.toggle(
      this.stateClasses.isVisible,
      window.scrollY > 300
    )
  }

  scrollToTop = (event) => {
    event.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  bindEvents() {
    window.addEventListener('scroll', this.activateButton)
    this.pageUpButtonElement.addEventListener('click', this.scrollToTop)
  }
}

export default PageUp
