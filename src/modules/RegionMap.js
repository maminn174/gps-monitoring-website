class RegionMap {
  selectors = {
    container: '[data-js-render-map]',
    renderMapTimeout: '[data-js-render-map-timeout]',
  }

  constructor() {
    this.containerElement = document.querySelector(this.selectors.container)
    if (!this.containerElement) {
      return
    }

    this.init()
  }

  renderMap = () => {
    this.containerElement.hidden = true
  }

  init() {
    if (document.querySelector(this.selectors.renderMapTimeout)) {
      setTimeout(() => {
        this.renderMap()
      }, 3000)

      return
    }

    this.renderMap()
  }
}

export default RegionMap
