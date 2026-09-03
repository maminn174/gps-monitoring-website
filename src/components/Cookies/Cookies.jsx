import './Cookies.scss'

export default () => {
  return (
    <div className="cookies" data-js-cookies="">
      <p className="cookies__text">
        Мы собираем файлы cookie и применяем{' '}
        <a
          href="/cookies"
          className="cookies__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          рекомендательные технологии
        </a>
      </p>
      <button
        className="cookies__button"
        type="button"
        data-js-cookies-button=""
      >
        Хорошо
      </button>
    </div>
  )
}
