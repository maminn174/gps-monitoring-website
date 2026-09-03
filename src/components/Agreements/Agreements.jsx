import './Agreements.scss'

export default (props) => {
  const { idPrefix } = props

  const pdId = `${idPrefix}-agreement-pd`
  const adsId = `${idPrefix}-agreement-ads`

  return (
    <div className="agreements">
      <div className="agreements__wrapper">
        <input
          type="checkbox"
          name="agreement-pd"
          id={pdId}
          className="agreements__checkbox"
          required
        />
        <label htmlFor={pdId} className="agreements__label" data-consent="pd">
          Я соглашаюсь на обработку{' '}
          <a
            href="/soglasie-personalnye-dannye"
            className="agreements__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            персональных данных
          </a>{' '}
          в&nbsp;соответствии с
          <a
            href="/privacy"
            className="agreements__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;политикой конфиденциальности
          </a>
        </label>
      </div>
      <div className="agreements__wrapper">
        <input
          type="checkbox"
          name="agreement-ads"
          id={adsId}
          className="agreements__checkbox"
        />
        <label htmlFor={adsId} className="agreements__label" data-consent="ads">
          Я согласен(а) на получение{' '}
          <a
            href="/soglasie-rassylku"
            className="agreements__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            информационных и рекламных рассылок
          </a>
        </label>
      </div>
    </div>
  )
}
