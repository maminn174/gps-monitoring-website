import './Company.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import Icon from '@/components/Icon'

export default () => {
  const cards = [
    {
      title: 'Мы',
      accentTitle: '-',
      variant: 'about',
      description:
        'Эксперты по внедрению систем для отслеживания' +
        'транспорта в режиме реального времени',
    },
    {
      title: '12',
      counter: 12,
      accentTitle: 'лет',
      variant: 'experience',
      description: 'Занимаемся установкой мониторинга',
    },
    {
      title: '100',
      counter: 100,
      accentTitle: '%',
      variant: 'guarantee',
      description: 'Гарантия на весь период сотрудничества',
    },

    {
      title: '16',
      counter: 16,
      accentTitle: '+',
      variant: 'branches',
      description: 'Филиалов по России',
    },
    {
      title: '20 000',
      counter: 20000,
      accentTitle: '+',
      variant: 'equipment',
      description: 'Установленного оборудования',
    },
    {
      title: 'Под',
      accentTitle: 'ключ',
      variant: 'turnkey',
      description:
        'Подберём решение, приедем, установим, покажем как пользоваться',
    },
    {
      title: 'Установка по всей',
      accentTitle: 'России',
      variant: 'regions',
      description:
        'В Москве, Санкт-Петербурге, Краснодаре, Екатеринбурге, Челябинске, Тюмени, Нижнем Новгороде, Ростове-на-Дону, Казани, Уфе, Саратове, Самаре, Перми, Новосибирске, Волгограде, Воронеже, а также выезжаем в командировки в любой регион',
    },
  ]

  return (
    <Section
      className="company"
      title="Почему нам доверяют мониторинг транспорта"
      titleId="company-title"
    >
      <ul className="company__grid" data-js-number-animation="">
        <li className="company__background-logo" aria-hidden="true">
          <Icon
            name="LogoGlonass"
            className="company__background-logo-icon"
            hasFill
          />
        </li>
        {cards.map(({ title, accentTitle, variant, description, counter }) => (
          <li
            className={clsx('company__card', `company__card--${variant}`)}
            key={title}
          >
            <div className="company__headline">
              <span
                className="company__title"
                data-js-number-animation-counter={counter}
              >
                {title}
              </span>
              <span className="company__accent">{accentTitle}</span>
            </div>
            <p className="company__text">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
