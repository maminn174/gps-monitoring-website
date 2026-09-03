import loadEquipments from '@/modules/loadEquipments'

class FormValidation {
  selectors = {
    root: '[data-js-form]',
    phoneInput: '[name="phone"]',
    nameInput: '[name="name"]',
    checkboxPd: '[name="agreement-pd"]',
    checkboxAds: '[name="agreement-ads"]',
    checkboxPdText: '[data-consent="pd"]',
    checkboxAdsText: '[data-consent="ads"]',
    submitButton: '[type="submit"]',
  }

  constructor() {
    this.rootElements = document.querySelectorAll(this.selectors.root)
    this.key = 'cart'

    this.bindEvents()
  }

  onPhoneInput = (phoneInputElement) => {
    let digits = phoneInputElement.value.replace(/[^0-9]/g, '')
    let hasCountryCode = false

    if (digits[0] === '8' || digits[0] === '7') {
      digits = digits.slice(1)
      hasCountryCode = true
    }

    digits = digits.slice(0, 10)

    let formattedPhoneNumber = ''
    if (digits.length > 0 || hasCountryCode) {
      formattedPhoneNumber += `+7 (${digits.slice(0, 3)}`
    }
    if (digits.length > 3) {
      formattedPhoneNumber += `) ${digits.slice(3, 6)}`
    }
    if (digits.length > 6) {
      formattedPhoneNumber += `-${digits.slice(6, 8)}`
    }
    if (digits.length > 8) {
      formattedPhoneNumber += `-${digits.slice(8, 10)}`
    }

    phoneInputElement.value = formattedPhoneNumber
    phoneInputElement.setCustomValidity('')
  }

  onFormSubmit = async (event, formElement) => {
    event.preventDefault()

    const phoneInputElement = formElement.querySelector(
      this.selectors.phoneInput
    )
    const submitButtonElement = formElement.querySelector(
      this.selectors.submitButton
    )
    const phone = phoneInputElement.value.replace(/[^0-9]/g, '')
    const formName = formElement.dataset.formName
    const isCartForm = formName === this.key

    if (phone.length !== 11) {
      phoneInputElement.setCustomValidity('Введите корректный номер телефона')
    } else {
      phoneInputElement.setCustomValidity('')
    }

    if (!formElement.reportValidity()) {
      return
    }

    const initialButtonText = submitButtonElement.textContent

    try {
      submitButtonElement.disabled = true
      submitButtonElement.textContent = 'Отправляем'

      if (isCartForm) {
        await this.getCartItems()
      }

      formElement.reset()
      window.showSuccessModal()

      if (isCartForm) {
        localStorage.removeItem(this.key)
        window.dispatchEvent(new CustomEvent('cart-updated'))
      }
    } catch {
      alert('Не удалось отправить заявку. Попробуйте еще раз')
    } finally {
      submitButtonElement.disabled = false
      submitButtonElement.textContent = initialButtonText
    }
  }

  getRawCartItems = () => {
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

  getCartItems = async () => {
    const cartItems = this.getRawCartItems()

    if (cartItems.length === 0) {
      return []
    }

    const equipments = await loadEquipments()

    return cartItems
      .map((cartItem) => {
        const product = equipments.find((product) => product.id === cartItem.id)

        if (!product) {
          return null
        }

        return `${product.title} - ${cartItem.quantity} шт.`
      })
      .filter(Boolean)
  }

  bindEvents() {
    this.rootElements.forEach((formElement) => {
      const phoneInputElement = formElement.querySelector(
        this.selectors.phoneInput
      )

      phoneInputElement?.addEventListener('input', () => {
        this.onPhoneInput(phoneInputElement)
      })

      formElement.addEventListener('submit', (event) => {
        this.onFormSubmit(event, formElement)
      })
    })
  }
}

export default FormValidation
