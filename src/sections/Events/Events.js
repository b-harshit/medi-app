import React from "react";
import "./Events.css";

function Events() {
  return (
    <section className="events section">
      <div className="container">

        <h2 className="section-title">Events</h2>

        <div className="events-grid">

          <div className="event-card">
            <div className="event-image">Conference Image</div>
            <div className="event-content">
              <h3>Scientific Conferences</h3>
              <p>
                Kepler regularly organizes scientific conferences to
                promote knowledge sharing and medical excellence.
              </p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">Workshop Image</div>
            <div className="event-content">
              <h3>Game Changer Workshop</h3>
              <p>
                Interactive workshops designed to enhance skills and
                encourage innovation across teams.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Events;
