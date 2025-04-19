// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="VORTA Tournament Arena - Platform for organizing and participating in tournaments"
        />
        <title>VORTA Tournament Arena</title>
      </Head>

      <nav className="navbar" aria-label="Main navigation">
        <a href="#" className="logo">
          <div className="logo-square">V</div>
          VORTA
        </a>

        <div className="nav-links">
          <a href="#">Tournaments</a>
          <a href="#">E‑Sports</a>
          <a href="#">Sports</a>
          <a href="#">Academic</a>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" aria-label="Introduction">
          <h1>
            <span>VORTA</span> Tournament Arena
          </h1>
          <p>
            The ultimate platform for organizing, participating in, and watching tournaments of all
            types.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-arrow">
              Find Tournaments
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="btn btn-outline">Start Organizing</button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" aria-label="Key Features">
          {/* E‑Sports */}
          <div className="feature-card">
            <div className="icon-container icon-esports">
              {/* SVG omitted for brevity */}
            </div>
            <h3>E‑Sports</h3>
            <p>From MOBAs to FPS to Battle Royale, host tournaments for every popular game title.</p>
          </div>

          {/* Traditional Sports */}
          <div className="feature-card">
            <div className="icon-container icon-sports">{/* SVG omitted */}</div>
            <h3>Traditional Sports</h3>
            <p>Basketball, soccer, tennis and more. Take your physical tournaments online.</p>
          </div>

          {/* Academic */}
          <div className="feature-card">
            <div className="icon-container icon-academic">{/* SVG omitted */}</div>
            <h3>Academic</h3>
            <p>Debate tournaments, spelling bees, and other intellectual competitions.</p>
          </div>
        </section>

        {/* Featured Tournaments */}
        <section className="tournaments" aria-label="Featured Tournaments">
          <header className="header">
            <h2>Featured Tournaments</h2>
          </header>

          <div className="tournament-grid">
            <a href="/featured-tournaments/tournament1/tournament.html">
              <article className="tournament-card">
                <div className="card-image">
                  <span className="card-tag tag-purple">Void Legends</span>
                  <img
                    src="/images/tournaments/void-legends.jpg"
                    alt="Void Legends Tournament Banner"
                    width="400"
                    height="320"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Void Legends Championship</h3>
                  <div className="card-info">
                    <i>📅</i>May 15 – May 20
                  </div>
                  <div className="card-info">
                    <i>📍</i>Virtual
                  </div>
                  <div className="card-info">
                    <i>👥</i>56 / 64 Participants
                  </div>
                  <div className="card-info">
                    <i>🏆</i>$10,000
                  </div>
                </div>
                <div className="card-footer">
                  <span className="organizer">by VORTA Esports</span>
                  <span className="register-btn">Registration Open</span>
                </div>
              </article>
            </a>

            {/* Repeat other cards as necessary */}
          </div>
        </section>

        {/* How It Works */}
        <section className="how-works" aria-label="How VORTA Works">
          <h2>How VORTA Works</h2>
          <p>
            VORTA provides end-to-end tournament management solutions for organizers, participants,
            and viewers.
          </p>
        </section>

        {/* Features Grid */}
        <section className="features-grid" aria-label="Platform Features">
          {/* Create */}
          <div className="feature-card">
            <div className="feature-icon icon-blue">🌐</div>
            <h3 className="feature-title">Create</h3>
            <p className="feature-description">
              Create tournaments for any game, sport, or academic competition. Configure brackets,
              schedules, and participant rules.
            </p>
            <a href="#" className="learn-more blue">
              Learn more →
            </a>
          </div>

          {/* Manage */}
          <div className="feature-card">
            <div className="feature-icon icon-purple">🎮</div>
            <h3 className="feature-title">Manage</h3>
            <p className="feature-description">
              Track scores, update brackets, manage participants, and communicate with teams all in
              one place.
            </p>
            <a href="#" className="learn-more purple">
              Learn more →
            </a>
          </div>

          {/* Stream */}
          <div className="feature-card">
            <div className="feature-icon icon-pink">📊</div>
            <h3 className="feature-title">Stream</h3>
            <p className="feature-description">
              Live stream matches to a global audience with interactive chat, polls, and
              monetization options.
            </p>
            <a href="#" className="learn-more pink">
              Learn more →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" aria-label="Call to Action">
          <h2 className="cta-title">Ready to Start Your Tournament?</h2>
          <p className="cta-description">
            Join thousands of organizers who use VORTA to create exciting tournaments and engage
            with their communities.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">
              Create Tournament
            </a>
            <a href="#" className="btn btn-secondary">
              Contact Sales
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <div className="footer-content">
          {/* Footer columns… */}
        </div>
        <div className="footer-divider" />
        <div className="footer-copyright">© 2025 VORTA. All rights reserved.</div>
      </footer>
    </>
  );
}
