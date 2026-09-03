import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return <div className={clsx(className, 'tabs-content')}>TabsContent</div>
}
