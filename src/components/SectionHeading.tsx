export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12 text-center">
      <span className="text-sm font-semibold tracking-widest text-lilac-500 uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display mt-2 text-3xl font-bold text-lilac-800 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
