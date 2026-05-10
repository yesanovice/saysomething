export default function WishCard({ wish }) {
  const formatted = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dhaka',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(wish.created_at))

  return (
    <div className="card">
      <p>{wish.text}</p>
      <span>{formatted}</span>
    </div>
  )
}
