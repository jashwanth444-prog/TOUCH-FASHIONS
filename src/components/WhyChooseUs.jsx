import { IconLayers, IconShirt, IconStar, IconWhatsApp } from './Icons'

const features = [
  {
    id: 'quality-styles',
    title: 'Quality Styles',
    description: 'Carefully chosen pieces with a clean, classic finish.',
    Icon: IconStar,
  },
  {
    id: 'comfortable-fits',
    title: 'Comfortable Fits',
    description: 'Cut and fabrics that feel right through the day.',
    Icon: IconShirt,
  },
  {
    id: 'multiple-collections',
    title: 'Multiple Collections',
    description: 'Casual, formal and sports wear, each kept distinct.',
    Icon: IconLayers,
  },
  {
    id: 'whatsapp-enquiry',
    title: 'Easy WhatsApp Enquiry',
    description: 'Ask about any style directly on WhatsApp.',
    Icon: IconWhatsApp,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section section--dark" id="why-us" aria-labelledby="why-us-title">
      <div className="container">
        <header className="section-head section-head--light">
          <p className="eyebrow">The Shopping Fashions Difference</p>
          <h2 className="section-title" id="why-us-title">
            Why Shop With Us
          </h2>
        </header>

        <div className="features-grid">
          {features.map(({ id, title, description, Icon }) => (
            <article className="feature" key={id}>
              <span className="feature-icon">
                <Icon size={26} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
