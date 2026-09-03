import './MainProblemCardAction.scss'
import clsx from 'clsx'
import DefaultCard from '@/components/DefaultCard'
import MarkerList from '@/components/MarkerList'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    actionTitle,
    actionDescription,
    actionItems,
    actionImage,
    actionImageAlt,
  } = props

  return (
    <DefaultCard
      className={clsx('main-problem-card-action', className)}
      variant="dark"
      title={actionTitle}
      description={actionDescription}
      image={actionImage}
      imageAlt={actionImageAlt}
      imageWidth={271}
      imageHeight={418}
      bodyClassName="main-problem-card-action__body"
      mediaClassName="main-problem-card-action__media"
    >
      <MarkerList
        className="main-problem-card-action__list"
        items={actionItems}
      />
      <Button
        className="main-problem-card-action__button"
        data-js-open-modal=""
        data-source="main-problem-card-action"
      >
        <span>Оставить заявку</span>
      </Button>
    </DefaultCard>
  )
}
