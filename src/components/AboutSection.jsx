export default function AboutSection() {
  return (
    <section className="section section--grey" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media">
          <img
            src="/assets/images/about.jpg"
            alt="Full-colour men's clothing in the store"
            loading="lazy"
            width="900"
            height="600"
          />
        </div>

        <div className="about-body">
          <p className="eyebrow">Our Store</p>
          <h2 className="section-title" id="about-title">
            About Shopping Fashions
          </h2>
          <p className="about-copy">
            Welcome to Shopping Fashions, your destination for stylish men&rsquo;s clothing. We
            bring together classic designs, comfortable fits and fashionable collections for
            everyday wear, professional occasions and active lifestyles.
          </p>
          <div className="about-divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
