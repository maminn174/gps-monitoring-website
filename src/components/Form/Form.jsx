import './Form.scss'
import clsx from 'clsx'
import Button from '@/components/Button/index'
import Agreements from '@/components/Agreements'

export default (props) => {
  const {
    className,
    inputClassName,
    buttonClassName,
    mainClassName,
    formName,
    formId,
    idPrefix = formId,
    source,
  } = props

  const nameId = `${idPrefix}-name`
  const phoneId = `${idPrefix}-phone`

  return (
    <form
      className={clsx('form', className)}
      id={formId}
      data-form-name={formName}
      data-js-form=""
    >
      <div className={clsx('form__main', mainClassName)}>
        <label htmlFor={nameId} className="visually-hidden">
          Имя или название компании
        </label>
        <input
          type="text"
          className={clsx('input', inputClassName)}
          id={nameId}
          name="name"
          placeholder="Имя или название компании"
        />
        <label htmlFor={phoneId} className="visually-hidden">
          Телефон
        </label>
        <input
          type="tel"
          className={clsx('input', inputClassName)}
          id={phoneId}
          name="phone"
          placeholder="+7 (999) 999-99-99"
          required
        />
        <Button className={buttonClassName} type="submit" data-source={source}>
          Оставить заявку
        </Button>
      </div>

      <Agreements idPrefix={idPrefix} />
    </form>
  )
}
