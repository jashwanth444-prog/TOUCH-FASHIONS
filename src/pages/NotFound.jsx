import BackButton from '../components/BackButton'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1 className="page-title">We couldn&rsquo;t find that page</h1>
        <p className="lede">
          The link may be out of date. Browse the collections from the homepage instead.
        </p>
        <div className="not-found-actions">
          <BackButton to="/" label="Back to Home" />
        </div>
      </div>
    </section>
  )
}
