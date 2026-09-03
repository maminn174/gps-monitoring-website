import './TypesTransport.scss'
import Section from '@/layouts/Section/index.js'
import Button from '@/components/Button/index.js'
import carImage from '@/assets/images/types-transport/legkovoy.webp'
import truckImage from '@/assets/images/types-transport/gruzovoy.webp'
import specialCarImage from '@/assets/images/types-transport/special.webp'
import busImage from '@/assets/images/types-transport/bus.webp'
import taxiImage from '@/assets/images/types-transport/types-transport-taxi.webp'
import commercialCarImage from '@/assets/images/types-transport/commercial.webp'
import TransportCard from '@/components/TransportCard/index.js'

export default () => {
  const transports = [
    {
      title: 'Легковой',
      image: carImage,
      imageWidth: 391,
      imageHeight: 258,
      backgroundColor: 'dark',
    },
    {
      title: 'Грузовой',
      image: truckImage,
      imageWidth: 250,
      imageHeight: 220,
      backgroundColor: 'blue',
    },
    {
      title: 'Спецтехника',
      image: specialCarImage,
      imageWidth: 310,
      imageHeight: 208,
      backgroundColor: 'yellow',
    },
    {
      title: 'Коммерческий',
      image: commercialCarImage,
      imageWidth: 246,
      imageHeight: 201,
      backgroundColor: 'gray',
    },
    {
      title: 'Такси',
      image: taxiImage,
      imageWidth: 271,
      imageHeight: 199,
      backgroundColor: 'gray',
    },
    {
      title: 'Пассажирский',
      image: busImage,
      imageWidth: 236,
      imageHeight: 187,
      backgroundColor: 'gray',
    },
  ]

  const firstGridCards = transports.slice(0, 3)
  const secondGridCards = transports.slice(3)

  return (
    <Section
      className="types-transport"
      title="Мониторинг транспорта для любого типа техники"
      titleId="types-transport-title"
    >
      <div className="types-transport__inner">
        <ul className="types-transport__list types-transport__list--top">
          {firstGridCards.map((transport) => (
            <li className="types-transport__item" key={transport.title}>
              <TransportCard {...transport} />
            </li>
          ))}
        </ul>
        <ul className="types-transport__list types-transport__list--bottom">
          {secondGridCards.map((transport) => (
            <li className="types-transport__item" key={transport.title}>
              <TransportCard {...transport} />
            </li>
          ))}
          <li className="types-transport__item">
            <div className="types-transport__card types-transport__card--action">
              <div className="types-transport__content">
                <h3 className="card-title">И другой</h3>
                <p className="types-transport__text">
                  Свяжитесь с нами и мы подберём решение под ваш запрос
                </p>
              </div>
              <Button
                className="types-transport__button"
                data-js-open-modal=""
                data-source="types-transport-other"
              >
                <span>Оставить заявку</span>
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  )
}
