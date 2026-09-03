export default (props) => {
  const { title } = props

  return (
    <button className="tab-button" type="button">
      {title}
    </button>
  )
}
