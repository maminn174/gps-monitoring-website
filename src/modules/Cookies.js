class Cookies {
  selectors = {
    root: '[data-js-cookies]',
    cookiesButton: '[data-js-cookies-button]',
  }

  stateClasses = {
    isAccepted: 'is-accepted',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.cookiesButtonElement = this.rootElement.querySelector(
      this.selectors.cookiesButton
    )

    this.init()
  }

  isAccepted = () => {
    return document.cookie
      .split('; ')
      .some((row) => row.startsWith('cookie_consent=accepted'))
  }

  acceptCookies = () => {
    this.rootElement.classList.add(this.stateClasses.isAccepted)
  }

  setCookie = () => {
    document.cookie =
      'cookie_consent=accepted; max-age=31536000; path=/; SameSite=Lax'
  }

  init = () => {
    if (this.isAccepted()) {
      this.acceptCookies()
      return
    }
    this.bindEvents()
  }

  bindEvents() {
    this.cookiesButtonElement.addEventListener('click', () => {
      this.acceptCookies()
      this.setCookie()
    })
  }
}

export default Cookies
