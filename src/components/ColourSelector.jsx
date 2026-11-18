import { getColourSwatch } from '../data/products'

/**
 * Colour selector. Only the colours supplied by the product are shown,
 * nothing is pre-selected, and the chosen colour is clearly marked.
 */
export default function ColourSelector({ colours, value, onChange, error }) {
  if (!colours || !colours.length) return null

  return (
    <fieldset className="option-group">
      <legend className="option-label">
        Colour
        {value ? <span className="option-selected"> — {value}</span> : null}
      </legend>

      <div className="colour-options" role="radiogroup" aria-label="Colour">
        {colours.map((name) => {
          const selected = value === name
          return (
            <button
              key={name}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`colour-option${selected ? ' is-selected' : ''}`}
              onClick={() => onChange(name)}
            >
              <span
                className="colour-swatch"
                style={{ backgroundColor: getColourSwatch(name) }}
                aria-hidden="true"
              />
              <span className="colour-name">{name}</span>
            </button>
          )
        })}
      </div>
      {error && (
        <p className="option-error" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}
