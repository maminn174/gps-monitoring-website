import './MarkerList.scss'
import clsx from 'clsx'

const MarkerList = ({ className, items = [] }) => (
  <ul className={clsx('marker-list', className)}>
    {items.map((item) => {
      const isObject = typeof item === 'object' && item !== null

      return (
        <li className="marker-item" key={isObject ? item.label : item}>
          {isObject ? (
            <>
              <strong>{item.label}</strong> {item.description}
            </>
          ) : (
            item
          )}
        </li>
      )
    })}
  </ul>
)

export default MarkerList
