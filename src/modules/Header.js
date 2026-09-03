class Header {
  selectors = {
    root: '[data-js-header]',
    panel: '[data-js-header-panel]',
    burgerButton: '[data-js-header-burger-button]',
    overlay: '[data-js-header-overlay]',
    cross: '[data-js-header-cross]',
    menuLinks: '[data-js-header-menu-link]',
    menuItemsWithSubmenu: '[data-js-header-menu-item]',
    menuToggles: '[data-js-header-menu-toggle]',
    subMenu: '[data-js-header-submenu]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
    menuOpen: 'menu-open',
    isOpen: 'is-open',
  }

  stateAttributes = {
    ariaExpanded: 'aria-expanded',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.panelElement = this.rootElement.querySelector(this.selectors.panel)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.crossElement = this.rootElement.querySelector(this.selectors.cross)
    this.menuLinksElements = this.rootElement.querySelectorAll(
      this.selectors.menuLinks
    )
    this.menuItemsWithSubmenu = this.rootElement.querySelectorAll(
      this.selectors.menuItemsWithSubmenu
    )
    this.menuTogglesElements = this.rootElement.querySelectorAll(
      this.selectors.menuToggles
    )
    this.desktopMediaQuery = window.matchMedia('(min-width: 1200px)')
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.rootElement.classList.toggle(this.stateClasses.menuOpen)
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.panelElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)

    const isMenuOpen = this.panelElement.classList.contains(
      this.stateClasses.isActive
    )

    this.burgerButtonElement.setAttribute(
      this.stateAttributes.ariaExpanded,
      String(isMenuOpen)
    )
  }

  closeBurgerMenu = () => {
    this.rootElement.classList.remove(this.stateClasses.menuOpen)
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    this.panelElement.classList.remove(this.stateClasses.isActive)
    document.documentElement.classList.remove(this.stateClasses.isLock)
    this.burgerButtonElement.setAttribute(
      this.stateAttributes.ariaExpanded,
      'false'
    )
  }

  onDocumentKeydown = (event) => {
    if (event.key === 'Escape') {
      this.closeBurgerMenu()
      this.closeAllSubmenus()
    }
  }

  onMenuLinkClick = (event) => {
    const menuItem = event.currentTarget.closest(
      this.selectors.menuItemsWithSubmenu
    )
    const isSubMenuLink = event.currentTarget.closest(this.selectors.subMenu)

    if (menuItem && !isSubMenuLink && !this.desktopMediaQuery.matches) {
      event.preventDefault()
      this.toggleSubmenu(menuItem)
      return
    }

    this.closeBurgerMenu()
  }

  openSubmenu = (menuItem) => {
    const toggle = menuItem.querySelector(this.selectors.menuToggles)

    menuItem.classList.add(this.stateClasses.isOpen)

    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true')
    }
  }

  closeSubmenu = (menuItem) => {
    const toggle = menuItem.querySelector(this.selectors.menuToggles)

    menuItem.classList.remove(this.stateClasses.isOpen)

    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false')
    }
  }

  closeAllSubmenus = (exceptMenuItem = null) => {
    this.menuItemsWithSubmenu.forEach((menuItem) => {
      if (menuItem !== exceptMenuItem) {
        this.closeSubmenu(menuItem)
      }
    })
  }

  toggleSubmenu = (menuItem) => {
    const isOpen = menuItem.classList.contains(this.stateClasses.isOpen)

    this.closeAllSubmenus(menuItem)

    if (isOpen) {
      this.closeSubmenu(menuItem)
    } else {
      this.openSubmenu(menuItem)
    }
  }

  onSubmenuToggleClick = (event) => {
    event.preventDefault()

    const menuItem = event.currentTarget.closest(
      this.selectors.menuItemsWithSubmenu
    )

    if (menuItem) {
      this.toggleSubmenu(menuItem)
    }
  }

  onSubmenuMouseEnter = (event) => {
    if (!this.desktopMediaQuery.matches) {
      return
    }

    this.openSubmenu(event.currentTarget)
  }

  onSubmenuMouseLeave = (event) => {
    if (!this.desktopMediaQuery.matches) {
      return
    }

    this.closeSubmenu(event.currentTarget)
  }

  onDocumentClick = (event) => {
    if (!this.rootElement.contains(event.target)) {
      this.closeAllSubmenus()
    }
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)

    document.addEventListener('keydown', this.onDocumentKeydown)

    this.overlayElement.addEventListener('click', this.closeBurgerMenu)

    this.crossElement.addEventListener('click', this.closeBurgerMenu)

    this.menuLinksElements.forEach((link) => {
      link.addEventListener('click', this.onMenuLinkClick)
    })

    this.menuTogglesElements.forEach((toggle) => {
      toggle.addEventListener('click', this.onSubmenuToggleClick)
    })

    this.menuItemsWithSubmenu.forEach((menuItem) => {
      menuItem.addEventListener('mouseenter', this.onSubmenuMouseEnter)
      menuItem.addEventListener('mouseleave', this.onSubmenuMouseLeave)
    })

    document.addEventListener('click', this.onDocumentClick)
  }
}

export default Header
