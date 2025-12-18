import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>A visual space showcasing carefully crafted photographic stories.</h1>
        <p className="lead">
          This is a creative space for photography and visual work, presenting a curated collection of images refined through editing and artistic perspective.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">PX</div>
          <h3>Photography</h3>
          <p>
            Capturing moments with intention, balancing composition, light, and mood to create compelling visual narratives.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">PP</div>
          <h3>Post-Production</h3>
          <p>
            Enhancing each image with careful editing and color grading to emphasize atmosphere and cinematic tone.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">QA</div>
          <h3>Quality obsessed</h3>
          <p>
            Every detail is considered, ensuring that each photograph meets the highest standards of visual excellence.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            A year of exploration and growth, capturing moments with intention and refining techniques for cinematic photography.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2025</strong>
          <p>
            Focused on mastering post-production and visual storytelling, enhancing each image with mood and precision.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            Continuing to create a curated collection of visuals, combining photography and editing to produce striking, cinematic imagery.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Get the next drop.</h3>
        <p>
          Be the first to see the latest visuals, curated collections, and cinematic photography releases.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
