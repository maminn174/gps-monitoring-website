class Slider {
  selectors = {
    root: '[data-js-monitoring-slider]',
    buttonPrev: '[data-js-monitoring-slider-prev-button]',
    buttonNext: '[data-js-monitoring-slider-next-button]',
    track: '[data-js-monitoring-slider-track]',
    slide: '[data-js-monitoring-slider-slide]',
    viewport: '[data-js-monitoring-slider-viewport]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.buttonPrevElement = this.rootElement.querySelector(
      this.selectors.buttonPrev
    )
    this.buttonNextElement = this.rootElement.querySelector(
      this.selectors.buttonNext
    )
    this.trackElement = this.rootElement.querySelector(this.selectors.track)
    this.slideElements = this.rootElement.querySelectorAll(this.selectors.slide)
    this.viewportElement = this.rootElement.querySelector(
      this.selectors.viewport
    )

    this.currentIndex = 0

    this.bindEvents()
    this.updateSlider()
  }

  calculateOffset() {
    const viewportWidth = this.viewportElement.offsetWidth
    return -(this.currentIndex * viewportWidth)
  }

  updateSlider() {
    const offset = this.calculateOffset()
    this.trackElement.style.transform = `translateX(${offset}px)`
  }

  showPrevSlide() {
    this.currentIndex--

    if (this.currentIndex < 0) {
      this.currentIndex = this.slideElements.length - 1
    }

    this.updateSlider()
  }

  showNextSlide() {
    this.currentIndex++

    if (this.currentIndex >= this.slideElements.length) {
      this.currentIndex = 0
    }

    this.updateSlider()
  }

  bindEvents() {
    this.buttonPrevElement.addEventListener('click', () => this.showPrevSlide())
    this.buttonNextElement.addEventListener('click', () => this.showNextSlide())

    window.addEventListener('resize', () => this.updateSlider())
  }
}

export default Slider
