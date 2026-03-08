export default function Slider({ label, value, min, max, unit, desc, onChange }) {
  return (
    <div className="slider-group">
      <div className="slider-header">
        <div className="slider-label">{label}</div>
        <div className="slider-value">
          {value} <span>{unit}</span>
        </div>
      </div>
      <div className="slider-desc">{desc}</div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  )
}