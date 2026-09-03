import './MonitoringSystem.scss'
import Section from '@/layouts/Section'
import glonasssoftImage from '@/assets/images/monitoring-system/GS.svg'
import localImage from '@/assets/images/monitoring-system/vector_local.svg'
import DefaultCard from '@/components/DefaultCard'
import Lightbox from '@/components/Lightbox'
import Icon from '@/components/Icon'
import { Image } from 'minista'

const cards = [
  {
    title: 'GlonassSoft',
    description: 'Российская система мониторинга',
    image: glonasssoftImage,
    imageWidth: 151,
    imageHeight: 77,
  },
  {
    title: 'Local',
    description: 'ПО с российским сервером',
    image: localImage,
    imageWidth: 146,
    imageHeight: 83,
  },
]

const images = [
  '/src/assets/images/monitoring-system/screen1.webp',
  '/src/assets/images/monitoring-system/screen2.webp',
  '/src/assets/images/monitoring-system/screen3.webp',
  '/src/assets/images/monitoring-system/screen4.webp',
  '/src/assets/images/monitoring-system/screen5.webp',
]

export default () => {
  return (
    <Section
      className="monitoring-system"
      title="Платформы для GPS/ГЛОНАСС мониторинга транспорта"
      titleId="monitoring-system-title"
    >
      <div className="monitoring-system__inner">
        <ul className="monitoring-system__list">
          {cards.map((card) => (
            <li className="monitoring-system__item" key={card.title}>
              <DefaultCard
                {...card}
                className="monitoring-system__card"
                headerClassName="monitoring-system__header"
              />
            </li>
          ))}
        </ul>
        <div className="monitoring-system-slider" data-js-monitoring-slider="">
          <button
            className="monitoring-system-slider__button monitoring-system-slider__button--prev"
            aria-label="Предыдущий слайд"
            type="button"
            data-js-monitoring-slider-prev-button=""
          />
          <div
            className="monitoring-system-slider__viewport"
            data-js-monitoring-slider-viewport=""
          >
            <div
              className="monitoring-system-slider__track"
              data-js-monitoring-slider-track=""
            >
              {images.map((image) => (
                <div
                  className="monitoring-system-slider__slide"
                  data-js-monitoring-slider-slide=""
                  key={image}
                >
                  <button
                    className="monitoring-system-slider__zoom"
                    aria-label="Открыть изображение"
                    type="button"
                    data-js-lightbox-zoom-button=""
                  >
                    <Image
                      src={image}
                      alt="Скриншот системы мониторинга"
                      className="monitoring-system-slider__image"
                      width="1060"
                      height="597"
                      loading="lazy"
                      sizes="(max-width: 767px) calc(100vw - 88px), min(1060px, calc(100vw - 180px))"
                      breakpoints={[320, 480, 640, 800, 1060]}
                      resolution={[1, 2]}
                      quality={72}
                      data-js-slider-image=""
                    />
                    <span className="monitoring-system-slider__overlay">
                      <span className="monitoring-system-slider__icon">
                        <Icon
                          name="zoom"
                          className="monitoring-system-slider__svg"
                        />
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            className="monitoring-system-slider__button monitoring-system-slider__button--next"
            aria-label="Следующий слайд"
            type="button"
            data-js-monitoring-slider-next-button=""
          />
        </div>
        <Lightbox />
      </div>
    </Section>
  )
}
