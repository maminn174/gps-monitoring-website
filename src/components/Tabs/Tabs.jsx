import './Tabs.scss'
import clsx from 'clsx'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import getTabsElementsIdsFromTitle from './utils/getTabsElementsIdsFromTitle'

export default (props) => {
  const { className, title, items = [] } = props

  return (
    <>
      <div className={clsx('tabs', className)} data-js-tabs="">
        <TabsNavigation title={title} items={items} />
        <div className="tabs__body">
          {items.map((item, index) => {
            const { title, children, isActive } = item

            const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

            return (
              <div
                className={clsx('tabs__content', {
                  'is-active': isActive,
                })}
                id={contentId}
                aria-labelledby={buttonId}
                role="tabpanel"
                data-js-tabs-content=""
                key={index}
              >
                {children}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
