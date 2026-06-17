type SectionHeadingProps = {
  title: string
  align?: 'center' | 'left'
  accentWord?: string
}

export function SectionHeading({
  title,
  align = 'center',
  accentWord,
}: SectionHeadingProps) {
  const headingClass = `section-heading section-heading--${align}`

  if (!accentWord || !title.includes(accentWord)) {
    return <h2 className={headingClass}>{title}</h2>
  }

  const [before, after] = title.split(accentWord)

  return (
    <h2 className={headingClass}>
      {before}
      <span className="section-heading__accent">{accentWord}</span>
      {after}
    </h2>
  )
}
