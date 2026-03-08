import { useState, useEffect, useRef } from 'react'
import '../styles/pricing.css'
import CtaBand from '../components/CtaBand'

export default function Pricing() {
  // sliders state
  const [analysts, setAnalysts] = useState(5)
  const [cases, setCases] = useState(20)
  const [hours, setHours] = useState(6)
  const [cost, setCost] = useState(85)

  // derived values
  const totalHours = analysts * cases * hours
  const savedHours = Math.round(totalHours / 2)
  const costCurrent = totalHours * cost
  const costAfter = savedHours * cost
  const savings = costCurrent - costAfter

  const savingsRef = useRef(null)

  useEffect(() => {
    // simple pulse animation when savings changes
    const el = savingsRef.current
    if (el) {
      el.style.transform = 'scale(1.03)'
      const id = setTimeout(() => (el.style.transform = 'scale(1)'), 200)
      return () => clearTimeout(id)
    }
  }, [savings])

  const fmt = (n) => n.toLocaleString('en-CA')

  return (
    <div>
      {/* header copied from HTML snippet */}
      <div className="page-header">
        <div>
          <div className="eyebrow">Pricing</div>
          <h1>
            Know your ROI
            <br />
            <em>before you sign.</em>
          </h1>
        </div>
        <p className="header-desc">
          AML analysis is expensive. Between analyst hours, manual data prep and
          report rework — the costs add up fast. See exactly how much ChronHR
          saves your team.
        </p>
      </div>

      {/* calculator */}
      <div className="calc-section">
        <div className="section-label">ROI Calculator</div>
        <h2>
          How much are you
          <br />
          <em>leaving on the table?</em>
        </h2>

        <div className="calc-grid">
          {/* inputs */}
          <div className="calc-inputs">
            <Slider
              label="Number of analysts"
              value={analysts}
              min={1}
              max={50}
              unit="analysts"
              desc="Full-time AML analysts on your team"
              onChange={setAnalysts}
            />
            <Slider
              label="Cases per analyst / month"
              value={cases}
              min={5}
              max={100}
              unit="cases"
              desc="Average number of cases handled per analyst monthly"
              onChange={setCases}
            />
            <Slider
              label="Hours per case (today)"
              value={hours}
              min={2}
              max={20}
              unit="h / case"
              desc="Average time to complete one full analysis today"
              onChange={setHours}
            />
            <Slider
              label="Analyst hourly cost"
              value={cost}
              min={40}
              max={200}
              unit="$ / h"
              desc="Fully loaded cost including salary and overhead"
              onChange={setCost}
            />
          </div>

          {/* results */}
          <div className="calc-results">
            <div className="results-label">Your numbers</div>
            <div className="result-items">
              <ResultItem name="Hours spent on analysis / month" value={`${fmt(totalHours)} h`} />
              <ResultItem name="Hours saved with ChronHR (2×)" value={`${fmt(savedHours)} h`} />
              <ResultItem name="Current monthly cost" value={`$${fmt(costCurrent)}`} />
              <ResultItem name="Cost with ChronHR" value={`$${fmt(costAfter)}`} />
            </div>
            <div className="savings-block">
              <div className="savings-pretitle">Monthly savings</div>
              <div className="savings-amount" ref={savingsRef}>
                <span className="currency">$</span>
                <span>{fmt(savings)}</span>
              </div>
              <div className="savings-sub">Based on 2× faster analysis — conservative estimate</div>
            </div>
          </div>
        </div>
      </div>

      {/* reuse existing CtaBand for consistency */}
      <CtaBand />
    </div>
  )
}

function Slider({ label, value, min, max, unit, desc, onChange }) {
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

function ResultItem({ name, value }) {
  return (
    <div className="result-item">
      <div className="result-name">{name}</div>
      <div className="result-val">{value}</div>
    </div>
  )
}
