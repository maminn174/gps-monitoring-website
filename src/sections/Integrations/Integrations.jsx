import './Integrations.scss'
import autoparkImage from '@/assets/images/integrations/autopark.webp'
import oneCImage from '@/assets/images/integrations/1C.webp'
import MarkerList from '@/components/MarkerList'
import advantumIcon from '@/assets/icons/advantum.svg'
import rnisIcon from '@/assets/icons/rnis.svg'
import systemIcon from '@/assets/icons/system.svg'
import x5Icon from '@/assets/icons/x5.svg'
import aoglonassIcon from '@/assets/icons/aoglonass.svg'
import Section from '@/layouts/Section'

export default () => {
  const items = [
    'Путевые листы ТС',
    'Контроль прохождения ТО',
    'Учет поступления и расхода ГСМ',
    'Автозаполнение печатных форм',
  ]

  const retranslationIcons = [
    {
      icon: rnisIcon,
      alt: 'Ретрансляция в РНИС',
    },
    {
      icon: advantumIcon,
      alt: 'Ретрансляция в Адвантум',
    },
    {
      icon: aoglonassIcon,
      alt: 'Ретрансляция в АО ГЛОНАСС',
    },
    {
      icon: x5Icon,
      alt: 'Ретрансляция в X5 Retail Group',
    },
    {
      icon: systemIcon,
      alt: 'Ретрансляция в другие системы',
    },
  ]

  return (
    <Section
      className="integrations"
      title="Интеграции и ретрансляции в любые системы"
      titleId="integrations-title"
    >
      <div className="integration">
        <img
          src={autoparkImage}
          alt="Автопарк в системе мониторинга транспорта"
          className="integration__image"
          width="230"
          height="165"
          loading="lazy"
        />
        <div className="integration__brand">
          <span className="integration__label">Интеграция</span>
          <img
            src={oneCImage}
            alt="1С интеграция"
            className="integration__logo"
            width="150"
            height="100"
            loading="lazy"
          />
        </div>
        <MarkerList className="integration__list" items={items} />
        <span className="integration__badge">Рекомендуем</span>
      </div>

      <div className="retranslations">
        <p className="retranslations__text list-ring">
          Устанавливаем устройства и передаём данные заказчику или в
          государственные системы:
        </p>
        <ul className="retranslations__list">
          {retranslationIcons.map(({ icon, alt }) => (
            <li className="retranslations__card" key={icon}>
              <img
                src={icon}
                alt={alt}
                className="retranslations__image"
                width="146"
                height="75"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
