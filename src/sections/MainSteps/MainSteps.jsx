import './MainSteps.scss'
import Section from '@/layouts/Section'
import Form from '@/components/Form'

export default () => {
  const steps = [
    {
      number: '1',
      title: 'Оставьте заявку',
      description: 'Наш менеджер свяжется с вами в течение 15 минут',
    },
    {
      number: '2',
      title: 'Подбор решения',
      description: 'Определимся с оборудованием и рассчитаем стоимость',
    },
    {
      number: '3',
      title: 'Выезд на монтаж',
      description:
        'Приедем, установим, настроим и покажем как работает система',
    },
    {
      number: '4',
      title: 'Мониторинг 24/7',
      description: 'Отслеживайте технику в режиме реального времени',
    },
  ]

  return (
    <Section
      className="main-steps"
      title="Как подключить мониторинг транспорта за 4 шага"
      titleId="main-steps-title"
    >
      <ul className="main-steps__grid">
        {steps.map(({ number, title, description }) => (
          <li className="main-steps__card" key={number}>
            <span className="main-steps__number">{number}</span>
            <h3 className="card-title">{title}</h3>
            <p className="main-steps__text">{description}</p>
          </li>
        ))}
      </ul>
      <Form
        className="main-steps__form js-form"
        fielsClassName="main-steps__input"
        buttonClassName="main-steps__button"
        mainClassName="main-steps__form-main"
        inputClassName="main-steps__form-input"
        formName="main-steps-form"
        formId="main-steps-form"
        idPrefix="main-steps"
        source="main-steps"
      />
    </Section>
  )
}
