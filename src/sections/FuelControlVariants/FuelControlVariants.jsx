import './FuelControlVariants.scss'
import Section from '@/layouts/Section'
import DefaultCard from '@/components/DefaultCard'
import dut from '@/assets/images/fuel-control-variant/dut-fuel-control-variant.webp'
import schdut from '@/assets/images/fuel-control-variant/schdut-fuel-control-variant.webp'
import can from '@/assets/images/fuel-control-variant/can-fuel-control-variant.webp'

export default () => {
  const cards = [
    {
      title: 'Датчик уровня топлива ДУТ',
      description:
        'Самый точный вариант контроля топлива в баке: фиксирует остаток, заправки, сливы и фактический расход',
      image: dut,
      imageWidth: 235,
      imageHeight: 186,
      number: '1',
      variant: 'yellow',
    },
    {
      title: 'GPS/ГЛОНАСС трекер с CAN-шиной',
      description:
        'Считывает штатные данные автомобиля: пробег, расход, уровень топлива, моточасы и работу двигателя',
      image: can,
      imageWidth: 263,
      imageHeight: 170,
      number: '2',
      variant: 'gray',
    },
    {
      title: 'Подключение к штатному датчику',
      description:
        'Подходит для базового контроля топлива автомобиля без врезки в бак, если штатный датчик даёт стабильные данные',
      image: schdut,
      imageWidth: 145,
      imageHeight: 233,
      number: '3',
      variant: 'yellow',
    },
  ]

  return (
    <Section
      className="fuel-control-variants"
      title="Варианты контроля топлива на транспорте"
      titleId="fuel-control-variants-title"
    >
      <ul className="fuel-control-variants__list">
        {cards.map(
          (
            {
              title,
              description,
              image,
              imageWidth,
              imageHeight,
              number,
              variant,
            },
            index
          ) => (
            <li className="fuel-control-variants__item" key={index}>
              <DefaultCard
                className="fuel-control-variants__card"
                mediaClassName="fuel-control-variants__media"
                imageClassName="fuel-control-variants__image"
                headerClassName="fuel-control-variants__header"
                numberClassName="fuel-control-variants__number"
                title={title}
                description={description}
                image={image}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                variant={variant}
                number={number}
              />
            </li>
          )
        )}
      </ul>
    </Section>
  )
}
