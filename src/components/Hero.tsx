import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
            Una aplicación de capital para independientes
            </h1>
            <p className="hero-subheadline">
            Recibe pagos más rápido y gestiona tus finanzas sin esfuerzo. Ideal para freelancers que buscan una solución financiera integral.
            </p>
            <button className="hero-cta">
              Unete hoy
            </button>
          </div>
          
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="status-bar">
                    <span className="time">9:41</span>
                    <div className="signal-battery">
                      <span className="signal">●●●</span>
                      <span className="battery">100%</span>
                    </div>
                  </div>
                </div>
                <div className="app-content">
                  <h2 className="app-title">Pagos</h2>
                  <div className="visa-card">
                    <div className="card-info">
                      <span className="visa-logo">VISA</span>
                      <span className="card-number">●●●● 4851</span>
                    </div>
                  </div>
                  <div className="integration-message">
                    <p>Gestiona tu Capital YA! 🚀 en el boton de abajo</p>
                    <div className="tap-indicator">
                      <div
                        className="tap-circle"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/signup')}
                        title="Ir a registro"
                        tabIndex={0}
                        role="button"
                        onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/signup'); }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
