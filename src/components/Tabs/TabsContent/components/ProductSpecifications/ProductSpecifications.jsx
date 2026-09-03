import './ProductSpecifications.scss'

export default (props) => {
  const { tracker } = props

  const {
    manufacturer,
    simCount,
    connections,
    gpsAntenna,
    bluetooth,
    voltage,
    battery,
    input,
    output,
    memory,
    accelerometer,
    protection,
    sizes,
    weight,
    systems,
    country,
    ecoDriving,
    connection,
    specifications: customSpecifications,
  } = tracker

  const specifications = customSpecifications || [
    {
      label: 'Навигационные системы',
      value: systems,
    },
    {
      label: 'Стандарты связи',
      value: connection,
    },
    {
      label: 'Интерфейсы',
      value: connections,
    },
    {
      label: 'Входы',
      value: input,
    },
    {
      label: 'Выходы',
      value: output,
    },
    {
      label: 'Напряжение питания, В',
      value: voltage,
    },
    {
      label: 'Встроенная АКБ',
      value: battery,
    },
    {
      label: 'Антенны',
      value: gpsAntenna,
    },
    {
      label: 'Память',
      value: memory,
    },
    {
      label: 'Акселерометр',
      value: accelerometer,
    },
    {
      label: 'EcoDriving (стиль вождения)',
      value: ecoDriving,
    },
    {
      label: 'Bluetooth',
      value: bluetooth,
    },
    {
      label: 'Количество SIM-карт',
      value: simCount,
    },
    {
      label: 'Степень защиты оболочки',
      value: protection,
    },
    {
      label: 'Размеры',
      value: sizes,
    },
    {
      label: 'Вес',
      value: weight,
    },
    {
      label: 'Производитель',
      value: manufacturer,
    },
    {
      label: 'Страна-производитель',
      value: country,
    },
  ]

  const formatValue = (value) =>
    Array.isArray(value) ? value.join(', ') : value
  const isFilledValue = (value) =>
    value !== undefined &&
    value !== null &&
    value !== '' &&
    value !== 'Уточняется по модификации'
  const visibleSpecifications = specifications.filter(({ value }) =>
    isFilledValue(value)
  )

  return (
    <table className="product-specifications__table">
      <tbody className="product-specifications__body">
        {visibleSpecifications.map(({ label, value }) => (
          <tr className="product-specifications__item" key={label}>
            <th scope="row" className="product-specifications__title">
              {label}
            </th>
            <td className="product-specifications__description">
              {formatValue(value)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
