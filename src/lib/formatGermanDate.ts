export default function formatGermanDate(date: Date) {
  return new Date(date).toLocaleDateString('de', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
}
