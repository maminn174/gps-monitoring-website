import Button from '@/components/Button'

export const metadata = {
  title: 'Страница не найдена | ГЛОНАСС GPS мониторинг',
  description:
    'Запрашиваемая страница не найдена. Перейдите на главную страницу сайта ГЛОНАСС или воспользуйтесь навигацией, чтобы продолжить.',
  robots: 'noindex, follow',
  isNotFoundPage: true,
}

export default () => {
  return (
    <>
      <div className="error">
        <div className="error__header">
          <h1 className="error__title">
            Ошибка <span className="hero__accent">404</span>
          </h1>
          <p className="error__text">
            Страница, которую вы ищете, не существует
          </p>
        </div>
        <Button href="/" className="error__button">
          Вернуться на главную
        </Button>
      </div>
    </>
  )
}
