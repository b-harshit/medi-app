import React from "react";
import "./CorporateVideo.css";

function CorporateVideo() {
  return (
    <section className="corporate-video section">
      <div className="container">

        <h2 className="section-title">Corporate Video</h2>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Corporate Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default CorporateVideo;
