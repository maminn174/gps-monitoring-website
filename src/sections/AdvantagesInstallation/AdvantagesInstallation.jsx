import './AdvantagesInstallation.scss'
import Section from '@/layouts/Section/index.js'
import drivers from '@/assets/images/advantages-installation/advantages-installation-drivers.webp'
import fuel from '@/assets/images/advantages-installation/advantages-installation-fuel.webp'
import phone from '@/assets/images/advantages-installation/advantages-installation-phone.webp'
import routes from '@/assets/images/advantages-installation/advantages-installation-routes.webp'
import DefaultCard from '../../components/DefaultCard'

export default () => {
  const cards = [
    {
      title: 'Экономия топлива до\u00A030%',
      description: 'Контроль топлива через ГЛОНАСС',
      image: fuel,
      imageWidth: 532,
      imageHeight: 355,
      variant: 'yellow',
    },
    {
      title: 'Контроль маршрутов',
      description: 'Отслеживание транспорта в реальном времени',
      image: routes,
      imageWidth: 532,
      imageHeight: 355,
      variant: 'blue',
    },
    {
      title: 'Контроль водителей',
      description: 'Контроль дисциплины и вождения',
      image: drivers,
      imageWidth: 532,
      imageHeight: 355,
      variant: 'gray',
    },
    {
      title: 'Мониторинг 24/7',
      description: 'Доступ к транспорту онлайн 24/7',
      image: phone,
      imageWidth: 326,
      imageHeight: 460,
      variant: 'dark',
    },
  ]

  return (
    <Section
      className="advantages-installation"
      title="Преимущества установки ГЛОНАСС для транспорта"
      titleId="advantages-installation-title"
    >
      <ul className="advantages-installation__list">
        {cards.map(
          (
            { title, description, image, imageWidth, imageHeight, variant },
            index
          ) => (
            <li className="advantages-installation__item" key={index}>
              <DefaultCard
                title={title}
                description={description}
                image={image}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                variant={variant}
                className="advantages-installation__card"
                imageClassName={`advantages-installation__image ${
                  image === phone ? 'advantages-installation__image--phone' : ''
                }`}
                headerClassName="advantages-installation__header"
                mediaClassName="advantages-installation__media"
              />
            </li>
          )
        )}
      </ul>
    </Section>
  )
}
