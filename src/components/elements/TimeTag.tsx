export default function TimeTag({ date }: { date: string }) {
  return (
    <time dateTime={date}>
      {new Date(date).toLocaleString('en-GB', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </time>
  )
}
