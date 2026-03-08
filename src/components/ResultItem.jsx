export default function ResultItem({ name, value }) {
  return (
    <div className="result-item">
      <div className="result-name">{name}</div>
      <div className="result-val">{value}</div>
    </div>
  )
}