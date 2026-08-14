import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Travis Prompt AI</h1>
          <p className="subtitle">AI Lead Qualification for Real Estate</p>
          <p className="description">
            We build intelligent chatbots that qualify property buyers, investors, and developers 
            — so your sales team only talks to people who are ready to buy.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">21x</span>
              <span className="stat-label">More likely to qualify when responded within 5 minutes</span>
            </div>
            <div className="stat">
              <span className="stat-number">60s</span>
              <span className="stat-label">Average AI response time vs 15+ hours human average</span>
            </div>
            <div className="stat">
              <span className="stat-number">40%</span>
              <span className="stat-label">Conversion improvement with AI lead qualification</span>
            </div>
          </div>
          <p className="cta-text">Try the demo — tap the chat bubble in the corner ↘</p>
        </div>
      </section>

      <section className="features">
        <h2>What You Get</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>24/7 Lead Capture</h3>
            <p>Never miss an inquiry. Your AI assistant works while you sleep, qualifying leads across all time zones.</p>
          </div>
          <div className="feature-card">
            <h3>Smart Qualification</h3>
            <p>Budget, timeline, location, property type — the AI extracts everything before your team makes contact.</p>
          </div>
          <div className="feature-card">
            <h3>Multi-Language</h3>
            <p>Engage international buyers in their native language. English, Arabic, Chinese, Russian, and more.</p>
          </div>
          <div className="feature-card">
            <h3>Instant Setup</h3>
            <p>Deploy in 48 hours. No complex integrations. Works on any website, WhatsApp, or Facebook Messenger.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2>Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">$497<span>/month</span></div>
            <ul>
              <li>AI chatbot on your website</li>
              <li>Up to 500 conversations/month</li>
              <li>Lead capture & export</li>
              <li>Email notifications</li>
              <li>Basic customization</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">$1,497<span>/month</span></div>
            <ul>
              <li>Everything in Starter</li>
              <li>Unlimited conversations</li>
              <li>WhatsApp integration</li>
              <li>CRM integration (HubSpot, Salesforce)</li>
              <li>Custom conversation flows</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">Custom</div>
            <ul>
              <li>Everything in Professional</li>
              <li>Multi-property management</li>
              <li>White-label solution</li>
              <li>Dedicated account manager</li>
              <li>SLA guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Travis Prompt AI. Built for serious real estate professionals.</p>
        <p><a href="mailto:hello@travispromptai.com">hello@travispromptai.com</a></p>
      </footer>

      <ChatWidget />

      <style jsx>{`
        .page {
          background: #0a0a0a;
          color: #f0f0f0;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .hero {
          padding: 80px 20px 60px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .subtitle {
          font-size: 20px;
          color: #888;
          margin-bottom: 24px;
        }
        .description {
          font-size: 18px;
          line-height: 1.6;
          color: #aaa;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 40px 0;
        }
        @media (max-width: 640px) {
          .stats { grid-template-columns: 1fr; }
          .hero h1 { font-size: 36px; }
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 700;
          color: #e8e8e8;
        }
        .stat-label {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }
        .cta-text {
          font-size: 16px;
          color: #666;
          margin-top: 32px;
        }

        .features {
          padding: 60px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .features h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr; }
        }
        .feature-card {
          background: #141414;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 24px;
        }
        .feature-card h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #e8e8e8;
        }
        .feature-card p {
          font-size: 14px;
          color: #888;
          line-height: 1.5;
        }

        .pricing {
          padding: 60px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pricing h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .pricing-card {
          background: #141414;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 32px 24px;
          position: relative;
        }
        .pricing-card.featured {
          border-color: #e8e8e8;
        }
        .badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #e8e8e8;
          color: #0a0a0a;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .pricing-card h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .price {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .price span {
          font-size: 14px;
          color: #888;
          font-weight: 400;
        }
        .pricing-card ul {
          list-style: none;
          padding: 0;
        }
        .pricing-card li {
          padding: 8px 0;
          font-size: 14px;
          color: #aaa;
          border-bottom: 1px solid #1c1c1c;
        }
        .pricing-card li:last-child { border-bottom: none; }

        .footer {
          text-align: center;
          padding: 40px 20px;
          border-top: 1px solid #2a2a2a;
          color: #666;
          font-size: 14px;
        }
        .footer a {
          color: #888;
          text-decoration: none;
        }
        .footer a:hover {
          color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}
