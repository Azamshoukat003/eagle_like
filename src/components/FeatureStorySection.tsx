type FeatureStorySectionProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  reverse?: boolean
  compact?: boolean
}

export function FeatureStorySection({
  title,
  description,
  imageSrc,
  imageAlt = '',
  reverse = false,
  compact = false,
}: FeatureStorySectionProps) {
  const paragraphs = description
    .split('\n')
    .map((part) => part.trim())
    .filter(Boolean)
  const titleLines = title.split('\n')

  return (
    <section
      className={`feature-story${reverse ? ' feature-story--reverse' : ''}${
        compact ? ' feature-story--compact' : ''
      }`}
    >
      <div className="feature-story__copy">
        <h3>
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h3>
        <div className="feature-story__body">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="feature-story__media">
        <img className="feature-story__image" src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}
