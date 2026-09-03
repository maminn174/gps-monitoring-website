import './Lightbox.scss'

export default () => {
  return (
    <div className="lightbox" id="image-lightbox" data-js-lightbox="">
      <div className="lightbox__overlay" data-js-lightbox-overlay=""></div>
      <div className="lightbox__content">
        <button
          className="lightbox__close"
          data-js-lightbox-close=""
          type="button"
          aria-label="Закрыть изображение"
        >
          ×
        </button>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
          alt=""
          className="lightbox__image"
          data-js-lightbox-image=""
          loading="lazy"
        />
      </div>
    </div>
  )
}
