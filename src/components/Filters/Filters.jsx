import './Filters.scss'
import Button from '../Button'

export default ({ products }) => {
  const manufacturers = [
    ...new Set(products.map((product) => product.manufacturer)),
  ]
  const vehicleTypes = [
    ...new Set(products.flatMap((product) => product.vehicleTypes)),
  ]
  const tasks = [...new Set(products.flatMap((product) => product.tasks))]

  return (
    <aside className="filters" aria-label="Фильтры товаров">
      <Button
        className="filters__toggle"
        data-js-product-filters-toggle=""
        aria-controls="product-filters"
        aria-expanded="false"
        variant="secondary"
      >
        Фильтры
      </Button>
      <form
        className="filters__form"
        id="product-filters"
        data-js-product-filters=""
      >
        <fieldset className="filters__field">
          <legend className="filters__label">Производитель:</legend>

          {manufacturers.map((manufacturer) => (
            <label className="filters__checkbox" key={manufacturer}>
              <input
                className="filters__checkbox-input"
                type="checkbox"
                name="manufacturer"
                value={manufacturer}
                data-js-product-filter=""
              />
              <span>{manufacturer}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className="filters__field">
          <legend className="filters__label">Задачи:</legend>

          {tasks.map((task) => (
            <label className="filters__checkbox" key={task}>
              <input
                className="filters__checkbox-input"
                type="checkbox"
                name="tasks"
                value={task}
                data-js-product-filter=""
              />
              <span>{task}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="filters__field">
          <legend className="filters__label">Тип техники:</legend>

          {vehicleTypes.map((vehicleType) => (
            <label className="filters__checkbox" key={vehicleType}>
              <input
                className="filters__checkbox-input"
                type="checkbox"
                name="vehicleTypes"
                value={vehicleType}
                data-js-product-filter=""
              />
              <span>{vehicleType}</span>
            </label>
          ))}
        </fieldset>

        <Button
          className="filters__button"
          data-js-product-filters-show=""
          aria-live="polite"
        >
          Показать товары
        </Button>
        <Button
          variant="secondary"
          type="reset"
          data-js-product-filters-reset=""
        >
          Сбросить
        </Button>
      </form>
    </aside>
  )
}
