import './MoreBlock.scss'

export default (props) => {
  const { href, label } = props

  return (
    <div className="more-block">
      <a className="more-block__link" href={href}>
        {label}
      </a>
      <svg
        className="more-block__icon"
        fill="currentColor"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        id="right-arrow"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="primary"
          d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z"
        ></path>
      </svg>
    </div>
  )
}
