function WorkflowTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Case intake & data fetch',
      desc: `A new case is opened. ChronHR automatically fetches all related data across your
connected sources — transactions, account history, counterparties, sanctions lists — and
centralizes it in one workspace. No manual export, no copy-paste.`,
      tools: [
        'CSV / SWIFT ingestion',
        'SQL connectors',
        'REST APIs',
        'Auto-normalization',
        'Duplicate detection',
      ],
    },
    {
      num: '02',
      title: 'Automatic tool generation',
      desc: `Based on the data fetched, ChronHR generates the relevant analysis tools
automatically. Each tool is tailored to the case — no configuration required.
Analysts can focus on interpreting results, not building dashboards.`,
      tools: [
        'Relationship graph',
        'Cash flow analysis',
        'User card',
        'Transaction timeline',
        'Network map',
        'Counterparty breakdown',
        'Sanctions screening',
      ],
    },
    {
      num: '03',
      title: 'Annotation & collaboration',
      desc: `As the analysis progresses, analysts can annotate directly on the data, flag
entities, add notes and communicate with teammates in context. Every decision is logged
with a full audit trail.`,
      tools: [
        'Inline annotations',
        'Team comments',
        'Case timeline',
        'Audit trail',
        'Entity flagging',
      ],
    },
    {
      num: '04',
      title: 'AI assistant',
      desc: `A built-in chatbot lets analysts ask questions directly about the case — summarize
activity, identify anomalies, compare patterns. It understands the data already
loaded and responds in context.`,
      tools: [
        'Case Q&A',
        'Anomaly detection',
        'Pattern comparison',
        'Natural language queries',
      ],
    },
    {
      num: '05',
      title: 'Assisted report writing',
      desc: `When the analysis is complete, ChronHR drafts the STR or LCTR automatically — pulling
from the case data, annotations and findings. Analysts review, adjust and submit
directly to FINTRAC. No blank page, no formatting errors.`,
      tools: [
        'STR generation',
        'LCTR generation',
        'FINTRAC compliance check',
        'One-click submission',
        'Version history',
      ],
    },
  ]

  return (
    <div className="workflow">
      <div className="section-label">How an analysis works</div>
      <h2>
        From case intake
        <br />
        <em>to submission.</em>
      </h2>

      <div className="timeline">
        {steps.map((step) => (
          <div key={step.num} className="step">
            <div className="step-meta">
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
            </div>
            <div className="step-content">
              <p className="step-desc">{step.desc}</p>
              <div className="tools">
                {step.tools.map((t) => (
                  <div key={t} className="tool">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowTimeline
