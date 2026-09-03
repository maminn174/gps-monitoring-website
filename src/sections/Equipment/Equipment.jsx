import './Equipment.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section/index.js'
import DefaultCard from '@/components/DefaultCard/index.js'
import dutImage from '@/assets/images/equipments/dut.webp'
import tempImage from '@/assets/images/equipments/temp.webp'
import trackerBaseImage from '@/assets/images/equipments/tracker-base.webp'
import trackerCanImage from '@/assets/images/equipments/tracker-can.webp'
import trackerPrikurImage from '@/assets/images/equipments/tracker-prikur.webp'
import MarkerList from '@/components/MarkerList/index.js'
import Button from '@/components/Button/index.js'
import { Icon } from 'minista'

export default () => {
  const equipments = [
    {
      title: 'Базовые GPS трекеры',
      image: trackerBaseImage,
      variant: 'blue',
      isPopular: true,
      iconId: 'popular',
      iconText: 'Популярный\u00A0вариант',
      imageWidth: 258,
      imageHeight: 183,
      items: ['SMART S‑2421', 'SMART S‑2425', 'УМКА 312', 'УМКА 315'],
    },
    {
      title: 'Трекеры с CAN модулем',
      image: trackerCanImage,
      variant: 'yellow',
      imageWidth: 274,
      imageHeight: 192,
      items: ['УМКА 302', 'УМКА 312', 'SIGNAL S‑4752'],
    },
    {
      title: 'Трекеры в прикуриватель',
      image: trackerPrikurImage,
      variant: 'blue',
      isPopular: true,
      popularVariant: 'orange',
      iconText: 'Не\u00A0требует\u00A0монтажа',
      imageWidth: 245,
      imageHeight: 221,
      items: ['УМКА 310', 'FMB 920'],
    },
    {
      title: 'Датчики уровня топлива',
      image: dutImage,
      variant: 'gray',
      markerListVariant: 'compact',
      imageWidth: 300,
      imageHeight: 216,
      items: [
        'Проводной датчик Эскорт ТД‑150',
        'Беспроводной датчик Эскорт ТД‑BLE',
      ],
    },
    {
      title: 'Датчики температуры',
      image: tempImage,
      variant: 'gray',
      markerListVariant: 'compact',
      imageWidth: 239,
      imageHeight: 216,
      items: [
        'Проводной датчик Mielta 3402',
        'Беспроводной датчик Эскорт TL‑BLE',
      ],
    },
  ]

  return (
    <Section
      className="equipment"
      title="Оборудование для мониторинга транспорта"
      titleId="equipment-title"
    >
      <ul className="equipment__list">
        {equipments.map((equipment) => {
          const {
            iconId,
            iconText,
            isPopular,
            items,
            markerListVariant,
            popularVariant,
            status = 'В наличии',
            statusVariant = 'available',
            ...cardProps
          } = equipment

          return (
            <li className="equipment__item" key={equipment.title}>
              <DefaultCard
                {...cardProps}
                className="equipment__card"
                bodyClassName="equipment__body"
                imageClassName="equipment__image"
              >
                {isPopular && (
                  <span
                    className={clsx(
                      'equipment-icon',
                      popularVariant && `equipment-icon--${popularVariant}`
                    )}
                  >
                    {iconId && (
                      <Icon className="equipment-icon__icon" iconId={iconId} />
                    )}
                    {iconText}
                  </span>
                )}
                <MarkerList
                  className={clsx(
                    'equipment__marker-list',
                    markerListVariant &&
                      `equipment__marker-list--${markerListVariant}`
                  )}
                  items={items}
                />
                <span
                  className={clsx(
                    'equipment__status',
                    statusVariant && `equipment__status--${statusVariant}`
                  )}
                >
                  {status}
                </span>
              </DefaultCard>
            </li>
          )
        })}
        <li className="equipment__item equipment__item--cta">
          <div className="equipment__card equipment__card--cta">
            <h3 className="card-title">
              Подберём и установим необходимое решение под ваши задачи!
            </h3>
            <Button data-js-open-modal="" data-source="equipment-cta">
              <span>Оставить заявку</span>
            </Button>
          </div>
        </li>
      </ul>
    </Section>
  )
}
