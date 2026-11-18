/**
 * Size selector driven by the central configuration in src/data/sizes.js.
 * Nothing is pre-selected: the customer must choose.
 */
export default function SizeSelector({ sizeSet, value, onChange, error }) {
  if (!sizeSet) return null

  return (
    <fieldset className="option-group">
      <legend className="option-label">
        {sizeSet.label}
        {value ? <span className="option-selected"> — {value}</span> : null}
      </legend>

      <div className="size-options" role="radiogroup" aria-label={sizeSet.label}>
        {sizeSet.options.map((option) => {
          const selected = value === option
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`size-option${selected ? ' is-selected' : ''}`}
              onClick={() => onChange(option)}
            >
              {option}
            </button>
          )
        })}
      </div>

      {sizeSet.note && <p className="option-note">{sizeSet.note}</p>}
      {error && (
        <p className="option-error" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}
