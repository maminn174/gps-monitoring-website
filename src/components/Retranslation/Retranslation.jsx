import './Retranslation.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    firstParagraph,
    secondParagraph,
    mainColor,
    retranslationIcon,
    items = [],
    summaryText,
  } = props

  return (
    <div
      className={clsx(
        'retranslation',
        mainColor && `retranslation--${mainColor}`,
        className
      )}
    >
      <div className="retranslation__body">
        <p className="retranslation__description page-description">
          {firstParagraph}
        </p>
        <p className="retranslation__description page-description">
          {secondParagraph}
        </p>
        <ul className="retranslation__list">
          {items.map((item) => (
            <li className="retranslation__item" key={item}>
              <span className="retranslation__badge page-description">
                <Icon
                  className="retranslation__icon"
                  name="circle-alert"
                  hasFill
                />
                {item}
              </span>
            </li>
          ))}
        </ul>
        <span className="retranslation__summary page-description">
          <Icon
            className="retranslation__summary-icon"
            name="checkmark"
            hasFill
          />
          {summaryText}
        </span>
      </div>
      <div className="retranslation__media">
        <Icon
          className="retranslation__logo"
          name={retranslationIcon}
          hasFill
        />
      </div>
    </div>
  )
}
