export default (props) => {
  const { tracker } = props

  return (
    <table className="product-specifications__table">
      <tbody className="product-specifications__body">
        {tracker.documents.map(({ title, file }) => (
          <tr className="product-specifications__item" key={file}>
            <th scope="row" className="product-specifications__title">
              {title}
            </th>
            <td className="product-specifications__description">
              <a
                className="product-specifications__download"
                href={file}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть PDF
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
