import './Clients.scss'
import Section from '@/layouts/Section'
import legalsImage from '@/assets/images/clients/urlica.webp'
import individualsImage from '@/assets/images/clients/fizlica.webp'
import MarkerList from '@/components/MarkerList'
import clsx from 'clsx'

export default () => {
  const clients = [
    {
      title: 'Юридические лица',
      image: legalsImage,
      imageWidth: 194,
      imageHeight: 198,
      variant: 'yellow',
      items: [
        'Работаем по 100% предоплате по счету и договору',
        'Предоставляем необходимые документы после установки',
      ],
    },
    {
      title: 'Физические лица',
      image: individualsImage,
      imageWidth: 147,
      imageHeight: 202,
      variant: 'blue',
      items: [
        'Оплата по факту установки и проверки работы оборудования',
        'Удобным способом: переводом или наличными',
      ],
    },
  ]

  return (
    <Section
      className="clients"
      title="Мониторинг транспорта для компаний и частных владельцев"
      titleId="clients-title"
    >
      <div className="clients__inner">
        <ul className="clients__cards">
          {clients.map(
            ({ title, image, items, variant, imageHeight, imageWidth }) => (
              <li
                className={clsx('clients__card', `clients__card--${variant}`)}
                key={title}
              >
                <div className="clients__content">
                  <h3 className="card-title">{title}</h3>
                  <MarkerList className="clients__list" items={items} />
                </div>
                <img
                  src={image}
                  alt={title}
                  className="clients__image"
                  width={imageWidth}
                  height={imageHeight}
                  loading="lazy"
                />
              </li>
            )
          )}
        </ul>
      </div>
    </Section>
  )
}
