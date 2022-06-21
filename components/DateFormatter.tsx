import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time className="text-gray-600" dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}