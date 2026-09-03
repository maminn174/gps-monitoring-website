import clsx from 'clsx'
import Section from '@/layouts/Section'
import Retranslation from '@/components/Retranslation'

export default (props) => {
  const { className, aboutRetranslations } = props
  const { title, titleId, ...retranslationProps } = aboutRetranslations

  return (
    <Section
      className={clsx('about-retranslation', className)}
      title={title}
      titleId={titleId}
    >
      <Retranslation {...retranslationProps} />
    </Section>
  )
}
