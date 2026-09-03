import './Services.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import installationGlonassBackground from '@/assets/images/services/services-installation.webp'
import fuelBackground from '@/assets/images/services/services-fuel.webp'
import blockingBackground from '@/assets/images/services/engine.webp'
import temperatureBackground from '@/assets/images/services/temperature.webp'
import canBackground from '@/assets/images/services/can.webp'
import employeesBackground from '@/assets/images/services/employees.webp'
import Button from '../../components/Button'

export default () => {
  const services = [
    {
      title: 'Установка ГЛОНАСС',
      href: '/ustanovka-glonass',
      badge: 'ХИТ',
      variant: 'blue',
      items: [
        'Готовый к работе GPS-трекер',
        'Выездное подключение',
        'Контроль местоположения, скорости, пробега и\u00A0моточасов',
        'Формирование отчётов',
        'Настройка геозон',
        'Мобильное приложение',
        'Ретрансляция данных',
        'История перемещений',
        'Настройка уведомлений',
      ],
      backgroundImage: installationGlonassBackground,
    },
    {
      title: 'Контроль топлива',
      href: '/kontrol-rashoda-topliva',
      description: 'Все, что входит в «Базовый пакет», а также:',
      variant: 'yellow',
      items: [
        'Подключение датчика топлива или подключение к штатному',
        'Проведение тарировки',
        'Доп. отчёты по топливу',
        'Информация обо всех топливных операциях',
        'Уведомления о сливах, заправках по SMS/почте',
      ],
      backgroundImage: fuelBackground,
    },
    {
      title: 'Удаленная блокировка',
      description: 'Все, что входит в «Базовый пакет», а также:',
      variant: 'gray',
      items: [
        'Подключение реле блокировки',
        'Возможность дистанционно заблокировать двигатель',
        'Доп. защита автомобиля',
        'Настройка автоматической блокировки',
      ],
      backgroundImage: blockingBackground,
    },
    {
      title: 'Контроль температуры',
      description: 'Все, что входит в «Базовый пакет», а также:',
      variant: 'blue',
      items: [
        'Подключение температурного датчика',
        'Отслеживание температурного режима в рефрижераторе',
        'Доп. отчёты по температуре',
        'Уведомления об изменениях температуры',
      ],
      backgroundImage: temperatureBackground,
    },
    {
      title: 'Контроль по CAN',
      description: 'Все, что входит в «Базовый пакет», а также:',
      variant: 'yellow',
      items: [
        'Контроль всех параметров, передаваемых по CAN',
        'Не влияет на гарантию ТС',
      ],
      backgroundImage: canBackground,
    },
    {
      title: 'Мониторинг сотрудников',
      variant: 'gray',
      items: [
        'Персональный трекер или приложение на телефон',
        'Контроль местоположения сотрудника',
        'Составление оптимальных маршрутов',
        'Уведомления о задержках и нарушениях',
        'Передача статуса работы',
      ],
      backgroundImage: employeesBackground,
    },
  ]

  const ServiceCard = ({
    title,
    description,
    href,
    badge,
    variant,
    items,
    backgroundImage,
  }) => (
    <article
      className={clsx('services__card', `services__card--${variant}`)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {badge && <span className="services__badge">{badge}</span>}
      <h3 className="card-title">
        {href ? (
          <a className="services__card-link" href={href}>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      {description && <p className="services__text">{description}</p>}

      <ul className="services__list">
        {items.map((item) => (
          <li className="services__item" key={item}>
            {item}
          </li>
        ))}
      </ul>

      <div className="services__actions">
        <Button
          className="services__button"
          data-js-open-modal=""
          data-source="services-price"
        >
          Узнать цену
        </Button>
        {href && (
          <Button href={href} className="services__link" variant="secondary">
            Подробнее
          </Button>
        )}
      </div>
    </article>
  )

  return (
    <Section
      className="services"
      title="Услуги по мониторингу транспорта"
      titleId="services-title"
    >
      <div className="services__scroller">
        <div className="services__cards">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </Section>
  )
}
