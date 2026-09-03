import './Hero.scss'
import MarkerList from '@/components/MarkerList/index.js'
import { Icon, Image } from 'minista'
import Button from '@/components/Button/index.js'
import HeroIntegrations from '../../components/HeroIntegrations'

const defaultTopIcons = [
  {
    iconId: 'routes',
    className: 'hero__icons-button--top hero__icons-button--top-1',
  },
  {
    iconId: 'graph',
    className: 'hero__icons-button--top hero__icons-button--top-2',
  },
  {
    iconId: 'settings',
    className: 'hero__icons-button--top hero__icons-button--top-3',
  },
]

export default ({
  heroContent = {},
  titleId = 'hero-title',
  integrations = [],
}) => {
  const {
    title,
    description,
    items = [],
    image,
    topIcons = defaultTopIcons,
  } = heroContent

  const leftIcons = [
    {
      iconId: 'location',
      className: 'hero__icons-button--accent hero__icons-button--left-1',
    },
    {
      iconId: 'fuel',
      className: 'hero__icons-button--accent hero__icons-button--left-2',
    },
    {
      iconId: 'speed',
      className: 'hero__icons-button--accent hero__icons-button--left-3',
    },
  ]

  return (
    <section aria-labelledby={titleId}>
      <div className="hero container">
        <div className="hero__body">
          <div className="hero__content">
            <h1 className="page-title" id={titleId}>
              {title}
            </h1>
            <p className="hero__description">{description}</p>
            <MarkerList items={items} />
          </div>
          <div className="hero__actions">
            <Button
              className="hero__button"
              data-js-open-modal=""
              data-source="hero"
            >
              <span>Оставить заявку</span>
            </Button>
            <Button
              className="hero__button"
              variant="secondary"
              data-js-open-modal=""
              data-source="hero-calculation"
            >
              <span>Рассчитать стоимость</span>
            </Button>
          </div>
        </div>
        <div className="hero__media">
          <Image
            className="hero__image"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={image.loading ?? 'eager'}
            decoding="async"
            sizes="(max-width: 767px) calc(100vw - 40px), 600px"
            breakpoints={[360, 480, 640, 704]}
            resolution={[1, 2]}
            quality={76}
          />
          <div className="hero__icons hero__icons--left">
            {leftIcons.map(({ iconId, className }) => (
              <span className={`hero__icons-button ${className}`} key={iconId}>
                <Icon className="hero__icon" iconId={iconId} />
              </span>
            ))}
          </div>
          <div className="hero__icons hero__icons--top">
            {topIcons.map(({ iconId, className }) => (
              <span className={`hero__icons-button ${className}`} key={iconId}>
                <Icon className="hero__icon" iconId={iconId} />
              </span>
            ))}
          </div>
          <HeroIntegrations integrations={integrations} />
        </div>
      </div>
    </section>
  )
}
