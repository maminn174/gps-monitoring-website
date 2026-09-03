import './Advantages.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import mapPinIcon from '@/assets/images/advantages/map-pin.webp'
import headphonesIcon from '@/assets/images/advantages/headphones.webp'
import guaranteeIcon from '@/assets/images/advantages/guarantee.webp'
import calendarIcon from '@/assets/images/advantages/calendar.webp'

export default (props) => {
  const { itemsCount, variant, title, items } = props

  const defaultAdvantages = [
    {
      text: 'Монтаж на удобной вам территории',
      icon: mapPinIcon,
      width: 32,
      height: 43,
    },
    {
      text: 'Техническая поддержка работает ежедневно',
      icon: headphonesIcon,
      width: 47,
      height: 47,
    },
    {
      text: '100% гарантия на весь период сотрудничества',
      icon: guaranteeIcon,
      width: 47,
      height: 47,
    },
    {
      text: 'Быстрый монтаж в\u00a0кратчайшие сроки',
      icon: calendarIcon,
      width: 43,
      height: 44,
    },
  ]

  const advantages = items?.length ? items : defaultAdvantages
  const visibleAdvantages = itemsCount
    ? advantages.slice(0, itemsCount)
    : advantages

  return (
    <Section
      className="advantages"
      title={title}
      titleId="advantages-title"
      titleClassName="visually-hidden"
    >
      <div className="advantages__inner">
        <ul
          className={clsx(
            'advantages__list',
            variant && `advantages__list--${variant}`
          )}
        >
          {visibleAdvantages.map(({ icon, text, width, height }, index) => {
            const fallback = defaultAdvantages[index % defaultAdvantages.length]

            return (
              <li className="advantages__item" key={text}>
                <span className="advantages__icon-wrapper">
                  <img
                    className="advantages__icon"
                    alt=""
                    src={icon ?? fallback.icon}
                    width={width ?? fallback.width}
                    height={height ?? fallback.height}
                    loading="lazy"
                  />
                </span>
                <p className="advantages__text">{text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
