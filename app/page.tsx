import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="page-glow" aria-hidden="true" />
      <main className="hero">
        <header className="topbar">
          <a href="/" className="brand" aria-label="Kayo Badger home">
            <Image
              src="/logo.png"
              alt="Kayo Badger logo"
              width={200}
              height={200}
              priority
              className="brand-logo"
            />
            <span className="brand-name">Kayo Badger</span>
          </a>
        </header>

        <section className="hero-main">
          <div className="content">
            <p className="kicker">Software Company</p>
            <h1>AI solutions that ship fast and work in the real world.</h1>
            <p className="subtext">
              We design and build practical AI products for teams that want
              better speed, accuracy, and outcomes.
            </p>
            <p className="product-mention">
              Featured: <strong>TabFlux</strong> for bachelor students.
            </p>
          </div>

          <div className="hero-media">
            <Image
              src="/hero-ai-illustration.svg"
              alt="AI software interface illustration"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </section>

        <section className="services" aria-label="Services">
          <p className="services-title">Services</p>
          <div className="highlights">
            <p>Web Apps</p>
            <p>Custom Mobile Apps</p>
            <p>Custom AI Apps</p>
            <p>Automation Workflows</p>
            <p>LLM Integration</p>
            <p>AI Chatbots</p>
            <p>SaaS Platforms</p>
            <p>Cloud Integration</p>
            <p>Data Dashboards</p>
          </div>
        </section>

        <section className="featured-product" aria-label="Featured product">
          <p className="services-title">Featured Product</p>
          <article className="product-card">
            <div className="product-preview">
              <Image
                src="/tabflux.png"
                alt="TabFlux academic platform preview"
                fill
                sizes="164px"
                className="product-preview-image"
              />
            </div>
            <div className="product-body">
              <div className="product-head">
                <div>
                  <p className="product-name">TabFlux</p>
                  <p className="product-tagline">
                    Academic platform for bachelor students to manage study life
                    in one place.
                  </p>
                </div>
                <a
                  className="product-link"
                  href="https://tabflux.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  tabflux.com
                </a>
              </div>
              <div className="product-points">
                <p>Course and semester planner</p>
                <p>Assignment and deadline tracking</p>
                <p>Notes and resources hub</p>
                <p>Project organization for teams</p>
                <p>Exam preparation workflow</p>
              </div>
            </div>
          </article>
        </section>

        <footer className="footer">
          <p>Copyright {year} Kayo Badger. All rights reserved.</p>
          <a href="mailto:kayobadger@gmail.com">kayobadger@gmail.com</a>
        </footer>
      </main>
    </>
  );
}
