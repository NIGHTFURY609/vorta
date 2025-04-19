"use client";
import { useState } from 'react';
import './layout.css';
import Link from 'next/link';

export default function TournamentPage() {
  const [activeTab, setActiveTab] = useState('bracket');

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div className="logo-icon">V</div>
          VORTA
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Tournaments</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="container">
        <Link href="/" className="back-button">
          ← Back to Tournaments
        </Link>

        <div className="tournament-banner">
          <span className="tournament-tag">Void Legends</span>
          <img src="/api/placeholder/400/320" alt="placeholder" />
        </div>

        <div className="tournament-header">
          <h1 className="tournament-title">Void Legends Championship</h1>
          <button className="register-button">Register Now</button>
        </div>

        <div className="tournament-info">
          {/** Date **/}
          <div className="info-item">
            <div className="info-icon">📅</div>
            <div className="info-content">
              <div className="info-label">Date</div>
              <div className="info-value">May 15, 2025 - May 20, 2025</div>
            </div>
          </div>

          {/** Location **/}
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <div className="info-label">Location</div>
              <div className="info-value">Virtual</div>
            </div>
          </div>

          {/** Participants **/}
          <div className="info-item">
            <div className="info-icon">👥</div>
            <div className="info-content">
              <div className="info-label">Participants</div>
              <div className="info-value">56 / 64</div>
            </div>
          </div>

          {/** Prize **/}
          <div className="info-item">
            <div className="info-icon">🏆</div>
            <div className="info-content">
              <div className="info-label">Prize</div>
              <div className="info-value">$10,000</div>
            </div>
          </div>
        </div>

        <div className="tournament-description">
          <div className="description-label">Description</div>
          <div className="description-text">
            The premier tournament for Void Legends players. Compete with the
            best teams around the world for glory and a share of the $10,000
            prize pool.
          </div>
        </div>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'bracket' ? 'active' : ''}`}
            onClick={() => setActiveTab('bracket')}
          >
            Bracket
          </button>
          <button
            className={`tab-btn ${activeTab === 'participants' ? 'active' : ''}`}
            onClick={() => setActiveTab('participants')}
          >
            Participants
          </button>
          <button
            className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
          <button
            className={`tab-btn ${activeTab === 'streams' ? 'active' : ''}`}
            onClick={() => setActiveTab('streams')}
          >
            Streams
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'bracket' && (
            <div className="tournament-bracket-section">
              <h2 className="bracket-title">Tournament Bracket</h2>
              <div className="bracket-stages">
                <div className="bracket-stage">
                  <h3 className="stage-title">Quarterfinals</h3>
                  <div className="bracket-match">
                    <div className="team-name">
                      <span>Shadow Wolves</span>
                      <span className="team-score">3</span>
                    </div>
                  </div>
                </div>
                <div className="bracket-stage">
                  <h3 className="stage-title">Semifinals</h3>
                  <div className="bracket-match">
                    <div className="team-name">
                      <span>Shadow Wolves</span>
                      <span className="team-score"></span>
                    </div>
                  </div>
                </div>
                <div className="bracket-stage">
                  <h3 className="stage-title">Finals</h3>
                  <div className="bracket-match">
                    <div className="team-name">
                      <span>TBD</span>
                      <span className="team-score"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'participants' && (
            <div className="participants-section">
              <h2>Participants</h2>
              <div className="participants-grid">
                {['Shadow Wolves', 'Flame Riders', 'Code Ninjas', 'Byte Brawlers'].map((team) => (
                  <div key={team} className="participant-card">
                    <div className="team-avatar">🏆</div>
                    <h3>{team}</h3>
                    <p>Rank: #1</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="schedule-section">
              <h2>Tournament Schedule</h2>
              <div className="schedule-grid">
                <div className="schedule-item">
                  <div className="schedule-date">May 15, 2025</div>
                  <div className="schedule-match">
                    <span>Shadow Wolves vs Flame Riders</span>
                    <span className="match-time">15:00 UTC</span>
                  </div>
                </div>
                {/* Add more schedule items */}
              </div>
            </div>
          )}

          {activeTab === 'streams' && (
            <div className="streams-section">
              <h2>Live Streams</h2>
              <div className="streams-grid">
                <div className="stream-card">
                  <div className="stream-thumbnail">
                    <img src="/placeholder-stream.jpg" alt="Stream thumbnail" />
                    <span className="live-badge">LIVE</span>
                  </div>
                  <div className="stream-info">
                    <h3>Main Stream</h3>
                    <p>Quarterfinals - Shadow Wolves vs Flame Riders</p>
                  </div>
                </div>
                {/* Add more stream cards */}
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">V</div>
              VORTA
            </div>
            <p className="footer-description">
              The ultimate platform for tournament organizers, participants,
              and viewers.
            </p>
            <div className="social-links">
              {/* …SVG links… */}
            </div>
          </div>

          <div className="footer-column">
            <h3>TOURNAMENTS</h3>
            <ul className="footer-links">
              <li><a href="#">E‑Sports</a></li>
              <li><a href="#">Traditional Sports</a></li>
              <li><a href="#">Academic Competitions</a></li>
              <li><a href="#">Browse All</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>SUPPORT</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-copyright">
          © 2025 VORTA. All rights reserved.
        </div>
      </footer>
    </>
  );
}
