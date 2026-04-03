export type NeedArea =
  | 'security-trust'
  | 'data-quality'
  | 'performance-reliability'
  | 'rag-pipeline'
  | 'compliance-governance'
  | 'prompt-engineering'
  | 'cicd-devops'
  | 'developer-productivity'
  | 'observability-cost'
  | 'agent-safety';

export type Category =
  | 'Security'
  | 'Data'
  | 'Quality'
  | 'Performance'
  | 'Observability'
  | 'Governance'
  | 'Agents'
  | 'DevOps'
  | 'RAG'
  | 'LLM Ops';

export interface Utility {
  id: string;
  name: string;
  description: string;
  category: Category;
  needArea: NeedArea;
  phase: string[];
}

export const NEED_AREA_LABELS: Record<NeedArea, string> = {
  'security-trust':            'Security & Trust',
  'data-quality':              'Data Quality & Lineage',
  'performance-reliability':   'Performance & Reliability',
  'rag-pipeline':              'RAG Pipeline Quality',
  'compliance-governance':     'Compliance & Governance',
  'prompt-engineering':        'Prompt Engineering Discipline',
  'cicd-devops':               'CI/CD Gates & DevOps',
  'developer-productivity':    'Developer Productivity & Testing',
  'observability-cost':        'Observability & Cost Control',
  'agent-safety':              'Agent Safety & Control',
};

export const NEED_AREA_GAP: Record<NeedArea, string> = {
  'security-trust':            'Model outputs and prompt inputs are not validated against trust and safety requirements.',
  'data-quality':              'Training and evaluation data lacks provenance, consistency, and quality guarantees.',
  'performance-reliability':   'Inference endpoints have no baseline latency contracts or regression gates.',
  'rag-pipeline':              'Retrieval-augmented generation pipelines ship without faithfulness or recall benchmarks.',
  'compliance-governance':     'AI deployments produce no auditable evidence for regulatory compliance.',
  'prompt-engineering':        'Prompt templates are authored without linting, versioning, or performance feedback.',
  'cicd-devops':               'AI model changes deploy to production without automated quality gates.',
  'developer-productivity':    'Teams build AI projects without scaffolding, test generation, or golden-set tooling.',
  'observability-cost':        'Production inference costs and latency patterns are opaque until incidents occur.',
  'agent-safety':              'Autonomous agents act without scope enforcement, action auditing, or kill-switch validation.',
};

export const utilities: Utility[] = [
  // ── Security & Trust ──────────────────────────────────────────────────
  { id: 'A-001', name: 'sf-pii-scan',         description: 'Scans text and structured data for PII patterns; outputs a JSON report per field.',           category: 'Security',     needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-002', name: 'sf-token-fence',       description: 'Validates prompt token budgets before submission; exits non-zero on breach.',                  category: 'LLM Ops',      needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-003', name: 'sf-consent-check',     description: 'Verifies data consent records against a usage policy; outputs audit evidence.',                category: 'Governance',   needArea: 'security-trust',         phase: ['Govern'] },
  { id: 'A-004', name: 'sf-secret-scan',       description: 'Detects secrets and credentials embedded in prompt contexts or config files.',                 category: 'Security',     needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-005', name: 'sf-prompt-shield',     description: 'Detects prompt injection patterns in user input; outputs risk score and evidence.',            category: 'Security',     needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-006', name: 'sf-output-filter',     description: 'Filters model output against a configurable deny list; exits non-zero on match.',              category: 'Security',     needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-007', name: 'sf-bias-scan',         description: 'Runs demographic bias checks on model outputs across configurable attribute groups.',           category: 'Quality',      needArea: 'security-trust',         phase: ['Govern'] },
  { id: 'A-008', name: 'sf-adversarial-probe', description: 'Generates adversarial test prompts and measures model failure rate.',                          category: 'Quality',      needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-078', name: 'sf-jailbreak-detect',  description: 'Detects jailbreak attempt patterns in prompt inputs; outputs classification and evidence.',     category: 'Security',     needArea: 'security-trust',         phase: ['Build'] },
  { id: 'A-079', name: 'sf-supply-chain-audit',description: 'Audits model and dataset supply chain for licence and provenance compliance.',                  category: 'Governance',   needArea: 'security-trust',         phase: ['Govern'] },

  // ── Data Quality & Lineage ────────────────────────────────────────────
  { id: 'A-009', name: 'sf-schema-validate',   description: 'Validates dataset schema against a JSON Schema spec; outputs field-level errors.',              category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-010', name: 'sf-lineage-trace',      description: 'Traces dataset provenance through a pipeline; outputs a lineage graph in JSON.',               category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-011', name: 'sf-dedup-check',        description: 'Detects near-duplicate records in training data using MinHash LSH.',                           category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-012', name: 'sf-label-audit',        description: 'Calculates inter-annotator agreement scores for labelled datasets; outputs Kappa coefficient.', category: 'Quality',      needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-013', name: 'sf-drift-detect',       description: 'Compares two dataset distributions; outputs a statistical drift report.',                      category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-014', name: 'sf-class-balance',      description: 'Reports class distribution in classification datasets; flags imbalance above threshold.',       category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-015', name: 'sf-missing-audit',      description: 'Audits missing values per column; outputs a completeness score per field.',                    category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-016', name: 'sf-format-check',       description: 'Validates data file formats (CSV, JSON, Parquet) against schema and encoding rules.',          category: 'Data',         needArea: 'data-quality',           phase: ['Discover'] },
  { id: 'A-080', name: 'sf-synthetic-audit',    description: 'Validates synthetic data generation config and checks for privacy leakage.',                   category: 'Data',         needArea: 'data-quality',           phase: ['Design'] },

  // ── Performance & Reliability ─────────────────────────────────────────
  { id: 'A-017', name: 'sf-bench',              description: 'Runs standardised latency benchmarks against an inference endpoint; outputs P50/P95/P99.',     category: 'Performance',  needArea: 'performance-reliability', phase: ['Design', 'Scale'] },
  { id: 'A-018', name: 'sf-load-probe',         description: 'Executes a configurable concurrent load test; outputs throughput and error rates.',            category: 'Performance',  needArea: 'performance-reliability', phase: ['Design'] },
  { id: 'A-019', name: 'sf-timeout-test',       description: 'Validates timeout and retry policies under simulated latency conditions.',                     category: 'Performance',  needArea: 'performance-reliability', phase: ['Design'] },
  { id: 'A-020', name: 'sf-memory-audit',       description: 'Reports peak memory consumption per inference call during a benchmark run.',                   category: 'Performance',  needArea: 'performance-reliability', phase: ['Design'] },
  { id: 'A-021', name: 'sf-batch-perf',         description: 'Benchmarks batch inference throughput; outputs tokens-per-second by batch size.',              category: 'Performance',  needArea: 'performance-reliability', phase: ['Scale'] },
  { id: 'A-022', name: 'sf-cold-start',         description: 'Measures cold-start latency for serverless inference endpoints over N invocations.',           category: 'Performance',  needArea: 'performance-reliability', phase: ['Scale'] },
  { id: 'A-023', name: 'sf-regression-gate',    description: 'Compares current benchmark to a baseline; exits non-zero on performance regression.',          category: 'Performance',  needArea: 'performance-reliability', phase: ['Build'] },
  { id: 'A-084', name: 'sf-throughput-cap',     description: 'Validates throughput-cap configurations are enforced under burst load conditions.',             category: 'Performance',  needArea: 'performance-reliability', phase: ['Scale'] },

  // ── RAG Pipeline Quality ──────────────────────────────────────────────
  { id: 'A-024', name: 'sf-rag-eval',           description: 'Evaluates RAG pipeline answer faithfulness and relevance using an LLM judge; outputs scores.', category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design', 'Build'] },
  { id: 'A-025', name: 'sf-chunk-audit',        description: 'Analyses chunk size distribution and overlap in a vector store; outputs coverage report.',     category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design'] },
  { id: 'A-026', name: 'sf-retrieval-test',     description: 'Tests retrieval recall@k for a golden query set; outputs recall scores per query.',            category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design'] },
  { id: 'A-027', name: 'sf-embed-drift',        description: 'Detects embedding model drift between two corpus snapshots; outputs cosine similarity report.', category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Scale'] },
  { id: 'A-028', name: 'sf-context-trim',       description: 'Trims retrieved context to token budget while preserving highest-relevance chunks.',           category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Build'] },
  { id: 'A-029', name: 'sf-hallucination-check',description: 'Checks model output against retrieved context for unsupported claims; outputs evidence.',       category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Build'] },
  { id: 'A-030', name: 'sf-rerank-eval',        description: 'Evaluates cross-encoder reranker quality on a reference set; outputs NDCG and MRR.',          category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design'] },
  { id: 'A-081', name: 'sf-query-classify',     description: 'Classifies incoming RAG queries by type; outputs routing recommendation.',                     category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design'] },
  { id: 'A-082', name: 'sf-indexing-audit',     description: 'Validates vector store indexing configuration against retrieval quality benchmarks.',           category: 'RAG',          needArea: 'rag-pipeline',           phase: ['Design'] },

  // ── Compliance & Governance ───────────────────────────────────────────
  { id: 'A-031', name: 'sf-eu-ai-check',        description: 'Runs EU AI Act compliance checks on a system card; outputs compliance gap report.',            category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-032', name: 'sf-gdpr-scan',          description: 'Scans data processing records for GDPR compliance gaps; outputs structured findings.',         category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-033', name: 'sf-dpdp-check',         description: 'Validates against India\'s Digital Personal Data Protection Act requirements.',                category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-034', name: 'sf-audit-log',          description: 'Generates a tamper-evident audit log of model decisions with configurable retention.',         category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-035', name: 'sf-policy-enforce',     description: 'Validates model outputs against a declarative policy file; exits non-zero on violation.',      category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-036', name: 'sf-model-card-gen',     description: 'Generates a structured model card from a training run\'s metadata; outputs Markdown.',         category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-037', name: 'sf-system-card-gen',    description: 'Generates a system card for an AI deployment from config and test evidence.',                  category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },
  { id: 'A-038', name: 'sf-risk-classify',      description: 'Classifies an AI system under EU AI Act risk categories from a system description.',          category: 'Governance',   needArea: 'compliance-governance',  phase: ['Govern'] },

  // ── Prompt Engineering Discipline ────────────────────────────────────
  { id: 'A-039', name: 'sf-prompt-lint',        description: 'Lints prompt templates for patterns that increase hallucination or token waste.',               category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-040', name: 'sf-prompt-diff',        description: 'Diffs two prompt versions and reports measurable output distribution change.',                 category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-041', name: 'sf-token-count',        description: 'Counts tokens for a prompt using any tiktoken-compatible model encoding; outputs breakdown.',   category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-042', name: 'sf-context-budget',     description: 'Reports context budget consumed by a prompt + retrieved context combination.',                 category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-043', name: 'sf-few-shot-score',     description: 'Evaluates few-shot example quality by measuring its effect on output consistency.',            category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-044', name: 'sf-prompt-version',     description: 'Manages prompt template versioning with hash-based change detection.',                         category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },
  { id: 'A-045', name: 'sf-var-extract',        description: 'Extracts template variables from a prompt file and validates all are bound before submission.', category: 'LLM Ops',      needArea: 'prompt-engineering',     phase: ['Build'] },

  // ── CI/CD Gates & DevOps ──────────────────────────────────────────────
  { id: 'A-046', name: 'sf-ci-gate',            description: 'Runs all configured ainternals checks; exits non-zero if any gate fails.',                     category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-047', name: 'sf-deploy-check',       description: 'Pre-deployment validation: checks model card, policy file, and audit log presence.',           category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-048', name: 'sf-rollback-probe',     description: 'Tests rollback procedure completeness for a model deployment configuration.',                  category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-049', name: 'sf-canary-eval',        description: 'Compares canary model performance against production baseline; outputs promotion decision.',    category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Scale'] },
  { id: 'A-050', name: 'sf-config-validate',    description: 'Validates deployment config files against a schema; reports breaking changes.',                 category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-051', name: 'sf-env-check',          description: 'Validates runtime environment variables against a requirements manifest.',                      category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-052', name: 'sf-pipeline-graph',     description: 'Generates a dependency graph of an AI pipeline from config; outputs DOT format.',              category: 'DevOps',       needArea: 'cicd-devops',            phase: ['Build'] },
  { id: 'A-083', name: 'sf-dependency-check',   description: 'Scans model and data dependencies for known vulnerabilities and licence issues.',               category: 'Security',     needArea: 'cicd-devops',            phase: ['Build'] },

  // ── Developer Productivity & Testing ──────────────────────────────────
  { id: 'A-053', name: 'sf-new',                description: 'Scaffolds a new AI project with all ainternals integrations pre-wired.',                       category: 'DevOps',       needArea: 'developer-productivity', phase: ['Discover'] },
  { id: 'A-054', name: 'sf-test-gen',           description: 'Generates a baseline test suite from a prompt template and output schema.',                    category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-055', name: 'sf-fixture-gen',        description: 'Generates synthetic test fixtures from a schema and constraint specification.',                 category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-056', name: 'sf-mock-model',         description: 'Runs a local mock inference server that replays recorded responses for testing.',              category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-057', name: 'sf-golden-set',         description: 'Manages golden test sets with versioning, coverage reporting, and drift detection.',           category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-058', name: 'sf-eval-runner',        description: 'Executes an evaluation run against a golden set; outputs pass rate and delta.',                category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-059', name: 'sf-regression-suite',   description: 'Runs a full regression suite and generates a structured test report.',                         category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },
  { id: 'A-060', name: 'sf-coverage-report',    description: 'Reports test coverage across prompt templates, edge cases, and adversarial cases.',            category: 'Quality',      needArea: 'developer-productivity', phase: ['Build'] },

  // ── Observability & Cost Control ──────────────────────────────────────
  { id: 'A-061', name: 'sf-cost-report',        description: 'Calculates per-request inference cost from token usage logs; outputs daily/monthly summaries.', category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-062', name: 'sf-token-audit',        description: 'Audits token consumption across a service\'s inference calls over a time window.',             category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-063', name: 'sf-trace-export',       description: 'Exports OpenTelemetry traces from an AI pipeline to a configured backend.',                    category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-064', name: 'sf-latency-monitor',    description: 'Monitors inference latency continuously and raises alerts above configured thresholds.',        category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-065', name: 'sf-budget-gate',        description: 'Enforces a token budget per user or session; exits non-zero when budget is exceeded.',          category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-066', name: 'sf-usage-summary',      description: 'Generates a usage summary report with cost projections for a deployment.',                     category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-067', name: 'sf-model-compare',      description: 'Compares cost and latency profiles between two model endpoints for the same task.',            category: 'Observability',needArea: 'observability-cost',     phase: ['Design', 'Scale'] },
  { id: 'A-068', name: 'sf-alert-config',       description: 'Generates monitoring alert configuration for common AI production failure modes.',              category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },
  { id: 'A-085', name: 'sf-anomaly-detect',     description: 'Detects anomalous inference patterns (cost spikes, latency outliers) in usage logs.',          category: 'Observability',needArea: 'observability-cost',     phase: ['Scale'] },

  // ── Agent Safety & Control ────────────────────────────────────────────
  { id: 'A-069', name: 'sf-agent-fence',        description: 'Enforces tool-use boundaries for AI agents; validates actions against a policy manifest.',     category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-070', name: 'sf-action-audit',       description: 'Logs all agent actions with full context; outputs a structured action audit trail.',           category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-071', name: 'sf-loop-detect',        description: 'Detects reasoning loop patterns in agent traces; exits non-zero when a loop is found.',        category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-072', name: 'sf-scope-check',        description: 'Validates that an agent\'s planned actions are within its defined operational scope.',          category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-073', name: 'sf-interrupt-test',     description: 'Tests an agent\'s interrupt and override response under configurable trigger conditions.',      category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-074', name: 'sf-kill-switch-test',   description: 'Verifies kill-switch functionality in an agent deployment; outputs test evidence.',            category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-075', name: 'sf-consent-agent',      description: 'Validates that data accessed by an agent has valid consent records at access time.',           category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-076', name: 'sf-output-trace',       description: 'Traces agent output provenance back through reasoning steps; outputs lineage graph.',          category: 'Agents',       needArea: 'agent-safety',           phase: ['Govern'] },
  { id: 'A-077', name: 'sf-sandboxed-run',      description: 'Runs an agent in an isolated sandbox environment; outputs capability footprint.',              category: 'Agents',       needArea: 'agent-safety',           phase: ['Scale'] },
];

export const CATEGORIES: Category[] = [
  'Security', 'Data', 'Quality', 'Performance',
  'Observability', 'Governance', 'Agents', 'DevOps', 'RAG', 'LLM Ops',
];

export const NEED_AREAS: NeedArea[] = [
  'security-trust',
  'data-quality',
  'performance-reliability',
  'rag-pipeline',
  'compliance-governance',
  'prompt-engineering',
  'cicd-devops',
  'developer-productivity',
  'observability-cost',
  'agent-safety',
];
