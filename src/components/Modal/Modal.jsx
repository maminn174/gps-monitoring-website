import './Modal.scss'
import Form from '@/components/Form'

export default () => {
  return (
    <div
      className="modal"
      id="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-js-modal=""
      hidden
    >
      <div className="modal__overlay" data-js-modal-overlay=""></div>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          aria-label="Закрыть окно"
          data-js-modal-close=""
        >
          ×
        </button>
        <div className="modal__header">
          <h2 className="modal__title" id="modal-title" data-js-modal-title="">
            Заявка на подключение GPS
            <br />
            ГЛОНАСС мониторинга
          </h2>
          <p className="modal__text" data-js-modal-description="">
            Заполните форму и наши менеджеры
            <br />
            свяжутся с вами в течение 15 минут
          </p>
        </div>
        <Form
          className="modal__form js-form"
          inputClassName="modal__input"
          buttonClassName="modal__button"
          formName="modal-form"
          formId="modal-form"
          idPrefix="modal"
          source="modal"
        />
        <div className="modal__success" aria-live="polite">
          <h2 className="modal__title">
            Заявка на мониторинг транспорта отправлена
          </h2>
          <p className="modal__text">
            Ожидайте звонка, менеджер свяжется с вами в&nbsp;течение 15 минут
          </p>
          <button
            className="modal__close-button button"
            type="button"
            data-js-success-close=""
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}
