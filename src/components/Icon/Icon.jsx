import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'

export default (props) => {
  const { className, name, hasFill = false, ariaLabel } = props
  const isDecorative = ariaLabel === undefined

  return (
    <span
      className={clsx('icon', className)}
      aria-hidden={isDecorative ? true : undefined}
      aria-label={ariaLabel}
      role={isDecorative ? undefined : 'img'}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}
