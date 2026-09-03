import './InstallationExample.scss'
import { Fragment } from 'react'
import Section from '@/layouts/Section'
import clsx from 'clsx'

import MarkerList from '@/components/MarkerList'

const defaultTitle = 'Примеры внедрения мониторинга транспорта'

export default (props) => {
  const { examples = [], title = defaultTitle } = props

  return (
    <Section
      className="installation-example"
      title={title}
      titleId="installation-example-title"
    >
      <div className="installation-example__tabs">
        {examples.map(({ label, id, checked }) => (
          <Fragment key={id}>
            <input
              type="radio"
              name="example-tab"
              id={id}
              defaultChecked={checked}
            />
            <label htmlFor={id}>{label}</label>
          </Fragment>
        ))}

        {examples.map(
          ({
            contentId,
            gallery,
            model,
            tasksItems,
            equipment,
            time,
            description,
          }) => (
            <div
              className="installation-example__content"
              id={contentId}
              key={contentId}
            >
              <div className="installation-example__gallery">
                {gallery.map(
                  ({
                    image,
                    alt,
                    variant,
                    imageWidth = 210,
                    imageHeight = 140,
                  }) => (
                    <img
                      key={image}
                      className={clsx(
                        'installation-example__image',
                        variant && `installation-example__image--${variant}`
                      )}
                      alt={alt}
                      src={image}
                      width={imageWidth}
                      height={imageHeight}
                      loading="lazy"
                    />
                  )
                )}
              </div>
              <dl className="installation-example__details">
                <div className="installation-example__details-group">
                  <dt className="installation-example__details-term">
                    Марка, модель:
                  </dt>
                  <dd className="installation-example__details-value">
                    {model}
                  </dd>
                </div>

                <div className="installation-example__details-group">
                  <dt className="installation-example__details-term">
                    Изначальные задачи:
                  </dt>
                  <dd className="installation-example__details-value">
                    <MarkerList
                      items={tasksItems}
                      className="installation-example__details-list"
                    />
                  </dd>
                </div>

                <div className="installation-example__details-group">
                  <dt className="installation-example__details-term">
                    Что установили?
                  </dt>
                  <dd className="installation-example__details-value">
                    <MarkerList
                      className="installation-example__details-list"
                      items={equipment}
                    />
                  </dd>
                </div>

                <div className="installation-example__details-group">
                  <dt className="installation-example__details-term">
                    Время монтажа:
                  </dt>
                  <dd className="installation-example__details-value">
                    {time}
                  </dd>
                </div>

                <div className="installation-example__details-group">
                  <dt className="installation-example__details-term">
                    Описание установки:
                  </dt>
                  <dd className="installation-example__details-value">
                    {description}
                  </dd>
                </div>
              </dl>
            </div>
          )
        )}
      </div>
    </Section>
  )
}
