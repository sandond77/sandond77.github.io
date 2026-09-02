export type Decision = { title: string; body: string }
export type Metric = { n: string; k: string }
export type LogEntry = { when: string; what: string }
export type Link = { label: string; href: string } | { label: string; note: true }

export type Project = {
  id: string
  name: string
  kind: string
  status: string
  thesis: string
  /** One-line summary for the jump index at the top of the page. */
  index: string
  narrative: string[]
  decisions: Decision[]
  metrics?: Metric[]
  constraint?: { label: string; body: string }
  log?: LogEntry[]
  spec: { role: string; stack: string; lastCommit: string }
  links: Link[]
}

export const projects: Project[] = [
  {
    id: 'reactor',
    name: 'Reactor',
    kind: 'Inventory ERP',
    status: 'In active use',
    thesis:
      'An inventory ERP that follows a card from the lot it was bought in to the sale that closed it out.',
    index: 'Full purchase-to-sale lifecycle for raw cards and graded slabs, with cost basis that reconciles.',
    narrative: [
      'The business ran on a handful of Google Sheets and PSA CSV exports. They could tell me what I owned. They could not tell me what a specific slab had actually cost once its share of the raw lot and its grading fee were allocated back to it, or what a card show had netted after fees.',
      'Every card carries the purchase ID of the lot it came from. Raw inventory moves through intake, inspection, then a routing decision: sell it raw, or send it in for grading. Grading is modeled as a transformation of that same card instead of the creation of a new one, so its cost follows it across the boundary.',
    ],
    decisions: [
      {
        title: 'Raw is quantity-based, graded is item-based',
        body: 'Bulk lots and individually certed slabs stay in separate tables. I count them differently and I need different things back from each.',
      },
      {
        title: 'Explicit state machine',
        body: 'Purchased raw → inspected → submitted → graded → sold, with no implicit movement between stages and no selling past available quantity.',
      },
      {
        title: 'AI intake',
        body: 'Claude vision reads receipts and slab photos into line items and fills in the set and card numbers, so I am not typing a hundred rows by hand after every purchase.',
      },
      {
        title: 'Guardrails on the agent',
        body: 'A Claude agent runs the whole lifecycle through multi-turn chat: purchases, sales, grading submissions, and slab and receipt image parsing. It asks when a request is ambiguous, confirms multi-quantity changes before writing them, and logs every action to an audit trail.',
      },
      {
        title: 'Built for more than one operator',
        body: 'Organizations and shared access were in from the start, with every query scoped to the owning account.',
      },
      {
        title: 'A migration path in, not just data in',
        body: 'A CSV import wizard maps whatever columns your existing spreadsheets already use.',
      },
      {
        title: 'Money in integer cents',
        body: 'USD and JPY, both stored as integers. A rounding error in a cost basis is miserable to track down six months later.',
      },
    ],
    metrics: [
      { n: '27', k: 'Screens' },
      { n: '24', k: 'API modules' },
      { n: '64', k: 'Migrations' },
      { n: '~56k', k: 'Lines of TypeScript' },
      { n: '30+', k: 'Docs pages' },
    ],
    spec: {
      role: 'Product owner, sole engineer',
      stack: 'React + TypeScript (Vite), Express, PostgreSQL, Kysely, Google OAuth, Anthropic SDK',
      lastCommit: 'Aug 31, 2026',
    },
    links: [
      {
        label: 'Case study',
        href: 'https://maple-war-428.notion.site/Reactor-A-Full-Lifecycle-Inventory-ERP-for-Trading-Card-Businesses-80913d62715e4620844ea2fda6a7b522',
      },
      { label: 'Repository', href: 'https://github.com/sandond77/reactorERP' },
      { label: 'Private deployment — walkthrough on request', note: true },
    ],
  },
  {
    id: 'cardcompanion',
    name: 'CardCompanion',
    kind: 'Pricing tool',
    status: 'Live',
    thesis: 'A pricing desk for card sellers: what the market is asking, and what it has actually paid.',
    index: 'Turns a structured form into one precise eBay query, then splits the answer four ways.',
    narrative: [
      "Pricing a card before listing it means reading eBay twice — open listings for asking prices, completed listings for real comps — and eBay's search is fuzzy enough that a good share of what comes back is not your card. CardCompanion builds one precise query, then splits the answer four ways: active auction, active Buy It Now, sold auction, sold BIN.",
      'Each panel shows average, low, high, and count, and opens the underlying listings so a suspicious average can be audited. The sold panels add a price-over-time chart and a last-five-sales average with its drift against the full window — the number that says whether a card is trending up or down right now.',
    ],
    decisions: [
      {
        title: 'The query is shown back to you',
        body: 'Ten fields assemble into a single eBay search string, printed above the results, so I can see why a result set came back looking the way it did.',
      },
      {
        title: 'Grade and condition are mutually exclusive',
        body: "A card is either graded or raw. Filling in both gets rejected before the search runs.",
      },
      {
        title: 'Results are re-filtered after eBay returns them',
        body: 'Against card name, number, set, and grade. Eight grading companies are recognized in any separator style, and a search for PSA 9 never counts a PSA 9.5.',
      },
      {
        title: 'The two sources load independently',
        body: 'API listings land immediately while the slower scrape continues, so asking prices are on screen before comps finish.',
      },
    ],
    metrics: [
      { n: '4', k: 'Price panels' },
      { n: '10', k: 'Search fields' },
      { n: '8', k: 'Grading companies parsed' },
      { n: '2', k: 'Data sources' },
    ],
    constraint: {
      label: 'Known constraint',
      body: "eBay's Browse API does not expose sold data at this access tier, so comps come from a headless-browser scrape — and eBay currently serves a bot-check on completed listings. Rather than quietly showing empty panels, the sold section ships behind an environment flag that can be flipped back on without a code change. Active asking prices are unaffected.",
    },
    spec: {
      role: 'Product owner, sole engineer',
      stack: 'React 19, Vite 7, Tailwind v4, Chart.js, Express 5, Puppeteer, eBay Browse API',
      lastCommit: 'Sep 1, 2026',
    },
    links: [
      { label: 'Live site', href: 'https://cardcompanion-production.up.railway.app/' },
      { label: 'Repository', href: 'https://github.com/sandond77/cardCompanion' },
    ],
  },
  {
    id: 'psa-scraper',
    name: 'PSA Scraper',
    kind: 'Internal tool',
    status: 'Maintained',
    thesis: 'A double-clickable tool that pulls the scans for your own PSA submissions, by cert range.',
    index: 'Downloads a whole submission of front and back scans, filed by cert, for someone who never opens a terminal.',
    narrative: [
      "When a grading submission comes back, the front and back scans for every cert live on PSA's site one page at a time. Listings need them, and so does Reactor. This pulls a whole submission in one pass: paste the order URL, give the cert ranges, pick a folder.",
      'The constraint that shaped everything was that the person running it does not open a terminal. The macOS and Windows launchers install their own dependencies on first run, a native folder picker replaces a typed path, and login happens in a real visible browser window so MFA works normally.',
    ],
    decisions: [
      {
        title: 'Sessions expire on purpose',
        body: 'Saved logins are dropped after 24 hours — stale cookies were the most common failure, and re-authenticating is cheaper than debugging a half-broken run.',
      },
      {
        title: "A missing scan doesn't end the run",
        body: 'Certs without images log a warning and the batch keeps going, instead of dying two hundred cards in.',
      },
      {
        title: "Batches are named for how they're actually filed",
        body: 'Year, month, service tier — with raw and graded scans separated inside the same batch folder.',
      },
      {
        title: 'Scope is explicit',
        body: 'It works through your own PSA login on your own submissions. The saved session never leaves the machine.',
      },
    ],
    log: [
      {
        when: 'Apr 2026',
        what: 'PSA redesigned the orders page; rewrote cert parsing, added a second cert-finding strategy for completed orders, retuned the image-size threshold.',
      },
      {
        when: 'Mar 2026',
        what: 'Native folder picker, batch naming, raw/graded split, run-again prompt, and the two double-click launchers.',
      },
      {
        when: 'Initial',
        what: 'Front and back scan retrieval by cert range, with a locally saved login session.',
      },
    ],
    spec: {
      role: 'Product owner, sole engineer',
      stack: 'Node.js, Playwright, patchright, p-limit',
      lastCommit: 'Apr 8, 2026',
    },
    links: [{ label: 'Repository', href: 'https://github.com/sandond77/PSA-Scraper' }],
  },
]

export const principles = [
  {
    title: 'Model the domain first',
    body: 'Raw cards and graded slabs behave differently. Flatten them into one table and the cost basis will be wrong inside a month.',
  },
  {
    title: 'Ship for a real user',
    body: 'The first user is my own business, so nothing survives on a demo. If a workflow is slower than the spreadsheet it replaced, it gets cut.',
  },
  {
    title: 'Write it down',
    body: "Docs, launchers and import wizards are the difference between a tool other people use and a tool I keep getting asked to run for them.",
  },
]

/** Role target — the first thing a recruiter needs to know, so it sits in the hero. */
export const lookingFor = {
  headline: 'Product management, product support, or operations',
  body: "I want to own what gets built and why, and I am just as happy on the side that answers for it afterwards. I have done both for a business I run myself: mapping the workflow, wireframing it, building it, then working the support queue when it turns out wrong. The eight years of manufacturing before that mean I can read an operation quickly and hold my own with engineers.",
  tags: [
    'Product manager',
    'APM',
    'Product support',
    'Support engineering',
    'Product operations',
    'San Francisco Bay Area · Remote',
  ],
}

/** Practices, drawn from the three projects below. Read before the stack: the roles
 *  I am after care more about these than about which ORM I used. */
export const skills = [
  {
    label: 'Product',
    items: [
      'Requirements from real users',
      'Domain modeling',
      'Wireframing & prototyping',
      'Beta & release management',
    ],
  },
  {
    label: 'Engineering',
    items: [
      'Schema design & migrations',
      'REST API design',
      'CSV / ETL migration',
      'AI / LLM integration',
    ],
  },
  {
    label: 'Operations & support',
    items: [
      'Written guides & runbooks',
      'Onboarding & training',
      'Ticket triage & changelogs',
      'Cost accounting',
    ],
  },
]

/** Technologies only. Anything that is a practice rather than a tool belongs above. */
export const stack = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Frontend',
    items: ['React 19', 'Vite', 'Tailwind CSS', 'Chart.js'],
  },
  {
    label: 'Backend & data',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Kysely'],
  },
  {
    label: 'Automation & integrations',
    items: ['Playwright', 'Puppeteer', 'Anthropic SDK', 'eBay Browse API', 'Google OAuth'],
  },
]
