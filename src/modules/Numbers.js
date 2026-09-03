class Numbers {
  selectors = {
    root: '[data-js-number-animation]',
    counter: '[data-js-number-animation-counter]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.counterElements = this.rootElement.querySelectorAll(
      this.selectors.counter
    )
    this.duration = 1500
    this.numberFormatter = new Intl.NumberFormat('ru-RU')

    this.bindEvents()
  }

  animateCounter = (element, endValue) => {
    const startTime = performance.now()

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / this.duration, 1)
      const currentValue = Math.round(endValue * progress)

      element.textContent = this.numberFormatter.format(currentValue)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    requestAnimationFrame(update)
  }

  onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }

      this.counterElements.forEach((element) => {
        const endValue = Number(element.dataset.jsNumberAnimationCounter)
        this.animateCounter(element, endValue)
      })
      observer.unobserve(entry.target)
    })
  }

  bindEvents() {
    const observer = new IntersectionObserver(this.onIntersect, {
      threshold: 0.3,
    })
    observer.observe(this.rootElement)
  }
}

export default Numbers
