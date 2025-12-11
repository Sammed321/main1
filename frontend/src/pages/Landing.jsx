import React from "react";
import { useNavigate } from "react-router-dom";

// THEME INTEGRATED STYLES
const landingPageStyles = `
.landing-page {
  min-height: 100vh;
  font-family: var(--font-primary, "Inter", sans-serif);
  color: var(--text-primary);
  background: linear-gradient(
    180deg,
    var(--hero-start),
    var(--hero-mid),
    var(--hero-end)
  );
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* container */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* buttons */
.landing-page button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  border-radius: 9999px;
  font-weight: 700;
  transition: all 0.3s ease;
}

/* HEADER */
.landing-header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
}

.landing-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.logo {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-primary);
}

.logo-span {
  color: var(--blue-primary);
}

/* HERO */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 50%;
  text-align: left;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  line-height: 1.2;
  color: var(--text-primary);
}

.hero-title-span {
  color: var(--blue-primary);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 48rem;
}

.hero-cta-btn {
  padding: 0.75rem 2rem;
  background: var(--card-bg);
  color: var(--blue-primary);
  box-shadow: var(--shadow-md);
}

.hero-cta-btn:hover {
  background: var(--sidebar-bg-start);
  color: var(--text-primary);
  transform: scale(1.05);
}

/* FLOATING GRAPHIC */
.hero-floating-graphic {
  display: none;
  position: absolute;
  top: 28%;
  right: 14%;
  width: 350px;
  height: 260px;
  opacity: 0.75;
  animation: floatAnimation 6s ease-in-out infinite;
}

.hero-floating-graphic svg * {
  stroke: var(--hero-float-color);
  fill: var(--hero-float-color);
}

@keyframes floatAnimation {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-17px); }
  100% { transform: translateY(0px); }
}

/* FEATURES */
.features-section {
  padding: 5rem 0;
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sm);
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-icon-wrapper {
  width: 4rem;
  height: 4rem;
  background: var(--sidebar-bg-start);
  color: var(--blue-primary);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: .75rem;
}

.feature-description {
  color: var(--text-secondary);
}

/* TECH STACK */
.tech-stack-section {
  padding: 5rem 0;
  background: var(--sidebar-bg-end);
}

.tech-stack-title {
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
}

.marquee-wrapper {
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
}

.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--sidebar-bg-end), transparent);
}

.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--sidebar-bg-end), transparent);
}

.marquee-content {
  display: inline-block;
  animation: marqueeAnimation 28s linear infinite;
}

@keyframes marqueeAnimation {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.tech-item {
  display: inline-block;
  padding: 1rem 2rem;
  margin: 0 1rem;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--card-bg);
  border: 1px solid var(--blue-primary);
  color: var(--text-primary);
}

/* GUEST SECTION */
.guest-section {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.section-title-light {
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.guest-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 42rem;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}

.guest-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.guest-btn-primary {
  padding: 0.75rem 2.5rem;
  background: var(--blue-primary);
  color: #fff;
}

.guest-btn-secondary {
  padding: 0.75rem 2.5rem;
  background: transparent;
  border: 2px solid var(--blue-primary);
  color: var(--blue-primary);
}

.guest-btn-secondary:hover {
  background: var(--blue-primary);
  color: #fff;
}

/* RESPONSIVE */
@media (min-width: 768px) {
  .hero-title { font-size: 3.75rem; }
  .hero-subtitle { font-size: 1.4rem; }
  .features-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .hero-floating-graphic { display: block; }
}
`;

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <style>{landingPageStyles}</style>

      <div className="landing-page">
        {/* HEADER */}
        <header className="landing-header">
          <nav className="landing-nav container">
            <h1 className="logo">
              Shiksha<span className="logo-span">Plus</span>
            </h1>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero-section container">
          <div className="hero-floating-graphic">
            {/* WHITE SVG auto-themes via CSS above */}
            <svg viewBox="0 0 250 200">
              <rect x="1" y="1" width="248" height="198" rx="12" opacity="0.38"/>
              <rect x="20" y="30" width="100" height="10" rx="5" opacity="0.25"/>
              <rect x="20" y="50" width="150" height="60" rx="8" opacity="0.2"/>
              <rect x="180" y="50" width="50" height="120" rx="8" opacity="0.2"/>
            </svg>
          </div>

          <div className="hero-content">
            <h2 className="hero-title">
              Welcome to <span className="hero-title-span">ShikshaPlus</span>
            </h2>

            <p className="hero-subtitle">
              Your ultimate productivity and learning platform, crafted to help you achieve more every day.
            </p>

            <button className="hero-cta-btn" onClick={() => navigate("/auth")}>
              Get Started →
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">
          <div className="container">
            <h3 className="section-title">Everything You Need to Succeed</h3>

            <div className="features-grid">
              {[
                { icon:"📊", title:"Dashboard", desc:"Track your journey and stay on top." },
                { icon:"📘", title:"Courses", desc:"Learn deeply with expert-led content." },
                { icon:"🎯", title:"Focus", desc:"Keep distractions away with AI." },
                { icon:"🤖", title:"AI Assistant", desc:"Instant help anytime." },
                { icon:"👨‍🏫", title:"Mentorship", desc:"Guided learning from experts." },
                { icon:"💻", title:"Digital Skills", desc:"Be ready for the future." },
              ].map((f, i)=>(
                <div className="feature-card" key={i}>
                  <div className="feature-icon-wrapper">{f.icon}</div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-description">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="tech-stack-section">
          <div className="container">
            <h3 className="tech-stack-title">Built With a Modern Stack</h3>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {["Vite + React","Python","OpenCV","SQL Database"]
                  .flatMap(item => [item,item])
                  .map((item,i)=>(
                    <span className="tech-item" key={i}>{item}</span>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        {/* GUEST */}
        <section className="guest-section">
          <div className="container">
            <h3 className="section-title-light">Take a Look Inside</h3>
            <p className="guest-subtitle">
              No account needed — explore the dashboards freely.
            </p>

            <div className="guest-buttons-container">
              <button className="guest-btn-primary" onClick={()=>navigate("/dashboard")}>Student Dashboard</button>
              <button className="guest-btn-secondary" onClick={()=>navigate("/mentor-dashboard")}>Mentor Dashboard</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
