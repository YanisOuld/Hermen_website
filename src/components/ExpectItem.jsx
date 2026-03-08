export default function ExpectItem({ number, title, desc }) {
  return (
    <div className="expect-item">
      <div className="expect-num">{number}</div>
      <div className="expect-text">
        <div className="expect-title">{title}</div>
        <div className="expect-desc">{desc}</div>
      </div>
    </div>
  )
}