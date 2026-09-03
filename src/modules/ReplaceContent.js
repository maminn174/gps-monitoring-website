import RegionConfig from '@/modules/RegionConfig'

class ReplaceContent {
  selectors = {
    address: '[data-js-utm-replace-address]',
    mainText: '[data-js-utm-replace-text]',
    city: '[data-js-utm-replace-city]',
  }

  constructor() {
    this.addressElements = document.querySelectorAll(this.selectors.address)
    this.cityElements = document.querySelectorAll(this.selectors.city)
    this.mainTextElements = document.querySelectorAll(this.selectors.mainText)

    if (!this.hasElements()) {
      return
    }

    this.init()
  }

  hasElements = () => {
    return (
      this.addressElements.length ||
      this.cityElements.length ||
      this.mainTextElements.length
    )
  }

  getCampaignCodeFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const rawCampaignCode = searchParams.get('cm_id')

    return rawCampaignCode?.slice(0, 9)
  }

  saveCampaignCode = (campaignCode) => {
    if (campaignCode && RegionConfig.campaignToRegion[campaignCode]) {
      localStorage.setItem(RegionConfig.storageKey, campaignCode)
    }
  }

  getCurrentRegion = () => {
    const campaignCodeFromUrl = this.getCampaignCodeFromUrl()

    this.saveCampaignCode(campaignCodeFromUrl)

    const savedCampaignCode = localStorage.getItem(RegionConfig.storageKey)
    const campaignCode = campaignCodeFromUrl || savedCampaignCode
    const regionKey = RegionConfig.campaignToRegion[campaignCode]

    return RegionConfig.regionData[regionKey]
  }

  replaceContent = (currentRegion) => {
    this.addressElements.forEach((element) => {
      element.textContent = currentRegion.address
    })

    this.mainTextElements.forEach((element) => {
      element.textContent = currentRegion.text
    })

    this.cityElements.forEach((element) => {
      element.textContent = currentRegion.city
    })
  }

  init() {
    const currentRegion = this.getCurrentRegion()

    if (!currentRegion) {
      return
    }

    this.replaceContent(currentRegion)
  }
}

export default ReplaceContent
