type BenefitsHeadingProps = {
  title: string
  align?: 'center' | 'left'
  accentWord?: string
}

export function BenefitsHeading({
  title,
  align = 'center',
  accentWord,
}: BenefitsHeadingProps) {
  const headingClass = `benefits-heading benefits-heading--${align}`

  if (!accentWord || !title.includes(accentWord)) {
    return <h2 className={headingClass}>{title}</h2>
  }

  const [before, after] = title.split(accentWord)

  return (
    <h2 className={headingClass}>
      {before}
      <span className="benefits-heading__accent">{accentWord}</span>
      {after}
    </h2>
  )
}
