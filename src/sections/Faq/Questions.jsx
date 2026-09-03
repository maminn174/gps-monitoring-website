import './Questions.scss'
import Section from '../../layouts/Section'
import AccordionGroup from '../../components/AccordionGroup'
import Accordion from '../../components/Accordion'

export default (props) => {
  const { data = {} } = props

  const { title, items = [] } = data

  if (!items.length) {
    return null
  }

  return (
    <Section className="faq" title={title} titleId="faq-title">
      <AccordionGroup>
        {items.map(({ answer, question }, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p className="questions__text">{answer}</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

/*{
  items.map(({ answer, question }, index) => (
    <details className="faq__item" key={index}>
      <summary className="faq__question">
        {question}
        <span className="faq__icon"></span>
      </summary>
      <div className="faq__answer">
        <p className="faq__answer-text">{answer}</p>
      </div>
    </details>
  ))
}*/
