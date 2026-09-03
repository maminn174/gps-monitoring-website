import './CompanyPageHero.scss'
import Breadcrumbs from '../../components/Breadcrumbs'
import Icon from '@/components/Icon'

export default ({ breadcrumbs = [] }) => {
  return (
    <section className="main company-page container">
      <div className="company-page">
        <div className="company-page__wrapper">
          <Breadcrumbs items={breadcrumbs} isContainer={false} />
          <div className="company-page__header">
            <h1 className="page-title">О компании</h1>
            <span className="company-page__ages">
              <Icon name="checkmark" hasFill />
              12 лет на рынке
            </span>
          </div>
          <p className="company-page__text">
            Мы устанавливаем системы GPS/ГЛОНАСС мониторинга транспорта уже
            более 12 лет. За это время подключили более 20 000 автомобилей и
            реализовали свыше 3 500 проектов — от небольших компаний до крупных
            автопарков. Работаем в 16+ городах и используем проверенное
            оборудование. Система точно показывает местоположение транспорта,
            помогает контролировать маршруты и работу водителей.
            <br />
            <br />
            Наша задача — чтобы вы получили понятный результат. В среднем
            клиенты снижают расход топлива на 15–30% и уменьшают лишние поездки.
            Подбираем решение под задачи бизнеса, устанавливаем оборудование и
            настраиваем систему за 1–3 дня. После подключения помогаем
            разобраться в работе, настраиваем отчёты и остаёмся на связи. Многие
            клиенты работают с нами годами за счёт стабильной работы и
            поддержки.
          </p>
        </div>
      </div>
    </section>
  )
}
