import { BookDemo } from "@/components/BookDemo";
import { ClientInteractions } from "@/components/ClientInteractions";

export default function Home() {
  return (
    <>
      <ClientInteractions />

      {/* ========== TOP NAVIGATION ========== */}
      <nav className="nav" id="nav">
        <div className="nav-inner container">
          <a href="#" className="nav-logo">Klova</a>
          <ul className="nav-links" id="navLinks">
            <li><a href="#how-it-works">Product</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#final-cta">Contact</a></li>
          </ul>
          <a href="#final-cta" className="btn btn-primary nav-cta">Book a Demo</a>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-headline">Not sure where AI fits in your business? We&apos;ll help you find out.</h1>
            <p className="hero-sub">Klova helps teams automate coordination across supply chain, finance, HR, and other operational workflows. No overhaul required.</p>
            <div className="hero-ctas">
              <a href="#final-cta" className="btn btn-primary btn-lg">Book a Demo</a>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">Explore Product <span className="arrow">&rarr;</span></a>
            </div>
            <p className="hero-micro">Works with the systems your team already uses</p>
          </div>

          <div className="hero-visual">
            <div className="hv-panel hv-panel-1">
              <div className="hv-panel-header">
                <span className="hv-dot green"></span>
                <span className="hv-panel-title">Incoming Signals</span>
              </div>
              <div className="hv-item">
                <div className="hv-item-icon hv-icon-email"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div className="hv-item-text"><span className="hv-item-label">Vendor Email</span><span className="hv-item-msg">Confirmed revised delivery for PO-1842</span></div>
                <span className="hv-badge hv-badge-blue">Supply Chain</span>
              </div>
              <div className="hv-item">
                <div className="hv-item-icon hv-icon-alert"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                <div className="hv-item-text"><span className="hv-item-label">Finance Request</span><span className="hv-item-msg">Invoice missing approval from finance</span></div>
                <span className="hv-badge hv-badge-amber">Finance</span>
              </div>
              <div className="hv-item">
                <div className="hv-item-icon hv-icon-user"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div className="hv-item-text"><span className="hv-item-label">HR Onboarding</span><span className="hv-item-msg">New hire onboarding tasks pending</span></div>
                <span className="hv-badge hv-badge-violet">HR</span>
              </div>
            </div>

            <div className="hv-panel hv-panel-2">
              <div className="hv-panel-header"><span className="hv-dot indigo"></span><span className="hv-panel-title">AI Workflow Engine</span></div>
              <div className="hv-engine-core"><div className="hv-engine-orb"><div className="hv-orb-ring"></div><span className="hv-orb-label">AI</span></div></div>
              <div className="hv-integrations-grid">
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg><span>HubSpot</span></div>
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg><span>Shopify</span></div>
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>Gmail</span></div>
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span>Slack</span></div>
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg><span>Sheets</span></div>
                <div className="hv-int-tile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>ERP</span></div>
              </div>
            </div>

            <div className="hv-panel hv-panel-3">
              <div className="hv-panel-header"><span className="hv-dot teal"></span><span className="hv-panel-title">Execution Center</span></div>
              <div className="hv-action-item"><span className="hv-check done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span className="hv-action-text">Follow-up drafted to vendor</span><span className="hv-action-time">Just now</span></div>
              <div className="hv-action-item"><span className="hv-check done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span className="hv-action-text">Approval requested from finance</span><span className="hv-action-time">2m ago</span></div>
              <div className="hv-action-item"><span className="hv-check done"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></span><span className="hv-action-text">Onboarding tasks assigned</span><span className="hv-action-time">5m ago</span></div>
              <div className="hv-action-item hv-action-pending"><span className="hv-check pending"></span><span className="hv-action-text">Delivery status updated in tracker</span><span className="hv-action-time">In progress</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="section section-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">2x</div><div className="stat-label">Revenue Impact</div><p className="stat-desc">Teams close more deals when operational bottlenecks stop slowing them down.</p><p className="stat-qualifier">Based on early customer results</p></div>
            <div className="stat-divider"></div>
            <div className="stat-card"><div className="stat-number">50<span className="stat-unit">%</span></div><div className="stat-label">Lower Op Costs</div><p className="stat-desc">Cut the manual coordination that drains your team&apos;s time and budget.</p></div>
            <div className="stat-divider"></div>
            <div className="stat-card"><div className="stat-number">60<span className="stat-unit">%</span></div><div className="stat-label">Time Saved</div><p className="stat-desc">Give your team back the hours lost to follow-ups, status checks, and manual tracking.</p></div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="section section-dark" id="how-it-works">
        <div className="container">
          <div className="section-header"><h2>How Klova works</h2><p className="section-sub">We make it simple to go from operational noise to structured execution, in three steps.</p></div>
          <div className="tabs-container">
            <div className="tabs-nav" role="tablist">
              <button className="tab-btn active" role="tab" data-tab="capture"><span className="tab-num">01</span> Capture</button>
              <button className="tab-btn" role="tab" data-tab="understand"><span className="tab-num">02</span> Understand</button>
              <button className="tab-btn" role="tab" data-tab="execute"><span className="tab-num">03</span> Execute</button>
            </div>
            <div className="tabs-panels">
              <div className="tab-panel active" data-panel="capture">
                <div className="tab-panel-grid">
                  <div className="tab-panel-text"><h3>Ingest signals from everywhere</h3><p>Your team&apos;s work already lives across dozens of tools. Klova captures requests, updates, and signals from all of them. Automatically.</p></div>
                  <div className="tab-panel-visual"><div className="mock-card mock-capture"><div className="mock-header"><span className="mock-dot"></span><span className="mock-dot"></span><span className="mock-dot"></span></div><div className="mock-inbox"><div className="mock-inbox-item"><span className="mock-source">Gmail</span><span className="mock-preview">Vendor: Shipment delayed 2 days for PO-2291</span></div><div className="mock-inbox-item"><span className="mock-source">Slack</span><span className="mock-preview">@ops: need status on Q1 invoice batch</span></div><div className="mock-inbox-item"><span className="mock-source">Form</span><span className="mock-preview">New equipment request from engineering</span></div><div className="mock-inbox-item"><span className="mock-source">ERP</span><span className="mock-preview">Stock alert: SKU-4410 below threshold</span></div></div></div></div>
                </div>
              </div>
              <div className="tab-panel" data-panel="understand">
                <div className="tab-panel-grid">
                  <div className="tab-panel-text"><h3>Connect the dots automatically</h3><p>No more chasing context across tools. Klova identifies what matters, links related updates, and surfaces the next steps your team needs to take.</p></div>
                  <div className="tab-panel-visual"><div className="mock-card mock-understand"><div className="mock-header"><span className="mock-dot"></span><span className="mock-dot"></span><span className="mock-dot"></span></div><div className="mock-ai-parse"><div className="mock-parse-row"><span className="mock-parse-label">Entity</span><span className="mock-parse-value">PO-2291 / Acme Supplies</span></div><div className="mock-parse-row"><span className="mock-parse-label">Context</span><span className="mock-parse-value">Delivery delayed, ETA shifted +2 days</span></div><div className="mock-parse-row"><span className="mock-parse-label">Impact</span><span className="mock-parse-value highlight">Production timeline at risk</span></div><div className="mock-parse-row"><span className="mock-parse-label">Next Step</span><span className="mock-parse-value">Notify warehouse, update tracker, alert PM</span></div></div></div></div>
                </div>
              </div>
              <div className="tab-panel" data-panel="execute">
                <div className="tab-panel-grid">
                  <div className="tab-panel-text"><h3>Move work forward, automatically</h3><p>Tasks get created, follow-ups get drafted, statuses get updated. All without someone manually keeping things on track.</p></div>
                  <div className="tab-panel-visual"><div className="mock-card mock-execute"><div className="mock-header"><span className="mock-dot"></span><span className="mock-dot"></span><span className="mock-dot"></span></div><div className="mock-actions"><div className="mock-action done"><span className="mock-action-check">&#10003;</span><span>Follow-up email drafted to Acme Supplies</span></div><div className="mock-action done"><span className="mock-action-check">&#10003;</span><span>Warehouse team notified via Slack</span></div><div className="mock-action done"><span className="mock-action-check">&#10003;</span><span>Delivery tracker updated, ETA: Mar 26</span></div><div className="mock-action pending"><span className="mock-action-pending"></span><span>Awaiting PM acknowledgment</span></div></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SOLUTIONS ========== */}
      <section className="section section-light" id="solutions">
        <div className="container">
          <div className="section-header"><h2>AI that fits your team, wherever the work happens</h2><p className="section-sub">Whether it&apos;s supply chain, finance, or HR, we help you identify where AI adds value and get it running.</p></div>
          <div className="solutions-tabs">
            <div className="solutions-nav" role="tablist">
              <button className="sol-tab active" role="tab" data-sol="supply-chain"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>Supply Chain</button>
              <button className="sol-tab" role="tab" data-sol="finance"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>Finance</button>
              <button className="sol-tab" role="tab" data-sol="hr"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>HR</button>
            </div>
            <div className="solutions-panels">
              <div className="sol-panel active" data-sol-panel="supply-chain">
                <div className="sol-panel-grid">
                  <div className="sol-panel-text"><h3>Keep orders, vendors, and follow-ups moving</h3><p>Automate the coordination that happens between purchase orders, supplier communications, shipment updates, and internal teams.</p><ul className="sol-features"><li>Supplier communication tracking</li><li>Shipment and delivery status updates</li><li>Order status visibility across teams</li><li>Exception handling and escalation</li><li>Task ownership and accountability</li></ul></div>
                  <div className="sol-panel-visual"><div className="sol-mock"><div className="sol-mock-header">Supply Chain Dashboard</div><div className="sol-mock-row"><span className="sol-mock-id">PO-1842</span><span className="sol-mock-vendor">Acme Supplies</span><span className="sol-mock-status green">Confirmed</span><span className="sol-mock-date">Mar 24</span></div><div className="sol-mock-row"><span className="sol-mock-id">PO-1856</span><span className="sol-mock-vendor">Pacific Logistics</span><span className="sol-mock-status amber">Delayed</span><span className="sol-mock-date">Mar 26</span></div><div className="sol-mock-row"><span className="sol-mock-id">PO-1871</span><span className="sol-mock-vendor">Global Parts Co.</span><span className="sol-mock-status blue">In Transit</span><span className="sol-mock-date">Mar 28</span></div></div></div>
                </div>
              </div>
              <div className="sol-panel" data-sol-panel="finance">
                <div className="sol-panel-grid">
                  <div className="sol-panel-text"><h3>Reduce manual follow-through in finance workflows</h3><p>Streamline invoice approvals, payment tracking, and cross-functional coordination without endless email chains.</p><ul className="sol-features"><li>Invoice and approval coordination</li><li>Document and status follow-ups</li><li>Payment process tracking</li><li>Cross-functional action visibility</li><li>Internal request routing</li></ul></div>
                  <div className="sol-panel-visual"><div className="sol-mock"><div className="sol-mock-header">Finance Workflow</div><div className="sol-mock-row"><span className="sol-mock-id">INV-3021</span><span className="sol-mock-vendor">Cloud Services Inc.</span><span className="sol-mock-status amber">Pending Approval</span><span className="sol-mock-date">$12,400</span></div><div className="sol-mock-row"><span className="sol-mock-id">INV-3019</span><span className="sol-mock-vendor">Office Supply Co.</span><span className="sol-mock-status green">Approved</span><span className="sol-mock-date">$2,180</span></div><div className="sol-mock-row"><span className="sol-mock-id">INV-3015</span><span className="sol-mock-vendor">Marketing Agency</span><span className="sol-mock-status blue">Processing</span><span className="sol-mock-date">$8,750</span></div></div></div>
                </div>
              </div>
              <div className="sol-panel" data-sol-panel="hr">
                <div className="sol-panel-grid">
                  <div className="sol-panel-text"><h3>Coordinate people operations with less manual chasing</h3><p>Automate the operational overhead of onboarding, document collection, approvals, and internal coordination across HR workflows.</p><ul className="sol-features"><li>Onboarding workflow automation</li><li>Document collection and tracking</li><li>Cross-team task coordination</li><li>Approvals and reminders</li><li>Employee request tracking</li></ul></div>
                  <div className="sol-panel-visual"><div className="sol-mock"><div className="sol-mock-header">HR Operations</div><div className="sol-mock-row"><span className="sol-mock-id">ONB-112</span><span className="sol-mock-vendor">Sarah Chen</span><span className="sol-mock-status blue">Day 3 / 14</span><span className="sol-mock-date">Engineering</span></div><div className="sol-mock-row"><span className="sol-mock-id">REQ-445</span><span className="sol-mock-vendor">Equipment Request</span><span className="sol-mock-status amber">Awaiting IT</span><span className="sol-mock-date">Priority</span></div><div className="sol-mock-row"><span className="sol-mock-id">DOC-289</span><span className="sol-mock-vendor">Benefits Enrollment</span><span className="sol-mock-status green">Complete</span><span className="sol-mock-date">5 / 5 docs</span></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CAPABILITIES ========== */}
      <section className="section section-dark" id="capabilities">
        <div className="container">
          <div className="section-header"><h2>What the platform handles</h2><p className="section-sub">You tell us what&apos;s slowing your team down. We bring the capabilities to fix it.</p></div>
          <div className="cap-grid">
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><h4>Communication Intelligence</h4><p>Parse emails, messages, and requests to extract actionable context.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg></div><h4>Task &amp; Ownership Tracking</h4><p>Assign tasks, track ownership, and maintain accountability across teams.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h4>Workflow Automation</h4><p>Automate multi-step processes from intake to resolution.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h4>Status Visibility</h4><p>Real-time view across all active workflows and pending actions.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h4>Exception Detection</h4><p>Spot delays and blockers before they cascade into bigger issues.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div><h4>Cross-System Coordination</h4><p>Connect actions across email, ERP, spreadsheets, and messaging.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div><h4>Approval Routing</h4><p>Route approvals to the right people and escalate when things stall.</p></div>
              <div className="cap-card"><div className="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><h4>Follow-Up Generation</h4><p>Auto-draft and schedule follow-ups based on workflow context.</p></div>
          </div>
        </div>
      </section>

      {/* ========== INTEGRATIONS ========== */}
      <section className="section section-light" id="integrations">
        <div className="container">
          <div className="section-header"><h2>Works with the tools you already use</h2><p className="section-sub">No rip-and-replace. Klova connects to the systems you already use and starts adding value from day one.</p></div>
          <div className="int-cards-grid">
            <div className="int-card"><div className="int-card-glow"></div><h3>Business Apps</h3><p className="int-card-desc">Connect the tools where operational work already happens.</p><div className="int-tile-grid"><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>HubSpot</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg></span>Shopify</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg></span>Wix</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg></span>Squarespace</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></span>QuickBooks</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>Gmail</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>Slack</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>Outlook</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></span>Spreadsheets</div><div className="int-tile"><span className="int-tile-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></span>ERP Systems</div></div></div>
            <div className="int-card"><div className="int-card-glow glow-indigo"></div><h3>Workflow Context</h3><p className="int-card-desc">Turn fragmented updates across systems into one operational view.</p><div className="int-context-visual"><div className="int-context-sources"><span className="int-ctx-chip">Email</span><span className="int-ctx-chip">ERP</span><span className="int-ctx-chip">Slack</span><span className="int-ctx-chip">Sheets</span></div><div className="int-context-arrow"><svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h32m0 0l-6-6m6 6l-6 6" fill="none" stroke="url(#ctxArrow)" strokeWidth="2"/><defs><linearGradient id="ctxArrow"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#6366f1"/></linearGradient></defs></svg></div><div className="int-context-unified"><div className="int-ctx-unified-label">Unified Workflow</div><div className="int-ctx-unified-items"><span>Context extracted</span><span>Entities linked</span><span>Actions queued</span></div></div></div></div>
            <div className="int-card"><div className="int-card-glow glow-teal"></div><h3>Execution Layer</h3><p className="int-card-desc">Move work forward without forcing teams into yet another system.</p><div className="int-exec-list"><div className="int-exec-item"><span className="int-exec-check">&#10003;</span>Follow-up drafted</div><div className="int-exec-item"><span className="int-exec-check">&#10003;</span>Approval requested</div><div className="int-exec-item"><span className="int-exec-check">&#10003;</span>Status updated</div><div className="int-exec-item"><span className="int-exec-check">&#10003;</span>Task assigned</div><div className="int-exec-item"><span className="int-exec-check">&#10003;</span>Reminder sent</div></div></div>
          </div>
        </div>
      </section>

      {/* ========== WHY KLOVA ========== */}
      <section className="section section-dark" id="why-us">
        <div className="container">
          <div className="section-header"><h2>Why teams choose Klova</h2><p className="section-sub">Whether you&apos;re exploring AI for the first time or scaling what already works, we meet you where you are.</p></div>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>We start where you are</h3><p>Don&apos;t have an AI strategy yet? That&apos;s fine. We work with your team to find the right starting point and build from there.</p></div>
            <div className="why-card"><div className="why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div><h3>Built for real operations</h3><p>Designed for messy, cross-functional work across supply chain, finance, HR, and beyond. Not idealized automation diagrams.</p></div>
            <div className="why-card"><div className="why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Focused on outcomes</h3><p>Not just dashboards or summaries. Actual progress. Tasks get assigned, follow-ups get sent, workflows move forward.</p></div>
          </div>
          <div className="trust-grid" style={{marginTop: '48px'}}>
            <div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg><span>Flexible deployment</span></div>
            <div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg><span>Integration-ready</span></div>
            <div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>Role-based controls</span></div>
            <div className="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg><span>Enterprise reliable</span></div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA WITH DEMO FORM ========== */}
      <BookDemo />

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">Klova</a>
            <p className="footer-tagline">Your AI partner for business operations.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="mailto:hello@valued.ai" aria-label="Email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col"><h4>Product</h4><a href="#how-it-works">How It Works</a><a href="#capabilities">Capabilities</a><a href="#integrations">Integrations</a></div>
            <div className="footer-col"><h4>Company</h4><a href="#solutions">Solutions</a><a href="#why-us">Why Us</a><a href="#final-cta">Contact</a></div>
          </div>
        </div>
        <div className="container footer-bottom"><p>&copy; 2026 Klova. All rights reserved.</p></div>
      </footer>
    </>
  );
}
