import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Frontend studio</p>
          <h1>A curated collection of visuals with cinematic presence.</h1>
          <p className="lead">
            Each image is carefully composed and edited to emphasize mood, detail, and a strong sense of atmosphere.
          </p>
          <div className="hero-actions">
            <Link to="/articles" className="button-link primary">
              Browse articles
            </Link>
            <Link to="/about" className="button-link secondary">
              About the team
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>{articles.length}+</strong>
              <span>Cinematic Photos</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Techniques</span>
            </div>
            <div className="stat">
              <strong>Zero</strong>
              <span>fluff allowed</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <img
              src="https://i.pinimg.com/736x/dd/8f/1b/dd8f1bbd68b04212f9c59ec3d73b47cc.jpg"
              alt="Design desk with colorful UI elements"
            />
            <p className="muted">
              Urban calm in a city that never sleeps — New York in soft light.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>What you get inside.</h2>
          </div>
          <span className="muted">Clean patterns, real-world snippets.</span>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">CP</div>
            <h3>Cinematic Photography</h3>
            <p>
              Carefully captured images that emphasize mood, light, and cinematic composition.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">PT</div>
            <h3>Photography Techniques</h3>
            <p>
              Thoughtful use of framing, angles, and visual balance to create impactful images.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">VE</div>
            <h3>Visual Editing & Color</h3>
            <p>
              Refined post-processing that enhances tone, atmosphere, and overall visual cohesion.
            </p>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Articles</p>
            <h2>Latest reads.</h2>
          </div>
          <Link to="/articles" className="button-link secondary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <div className="article-meta">
                <span className="pill">React</span>
                <span className="muted">{article.content[0].substring(0, 30)}...</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
