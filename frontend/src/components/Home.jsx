import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Quality");

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="gallery-wrap">
        <button className="gallery-btn left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div
          className="gallery"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Bravit img ${index + 1}`} />
          ))}
        </div>
        <button className="gallery-btn right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>

      <div>
        <p className="home-text">
          Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat (India)
          based company dealing with nutraceutical products, trading,
          exporting, importing, and supplying processed food, food supplements,
          and pharmaceutical products.
        </p>
        <p className="home-text">
          We assure longer and closer working relationships with our clients and
          suppliers, not only providing immediate and reliable services but also
          continually exceeding expectations and goals.
        </p>
        <p className="home-text">
          We integrate all these functions with our fruitful experience. Our
          numerous competencies allow us to respond to industries seeking new
          markets. We look forward to welcoming you to our company and working
          to develop and enhance your business with us.
        </p>
      </div>

      <div className="why-bravit-image-container">
        <img src="/why-bravit.png" alt="Why Bravit" className="why-bravit-img" />
      </div>

      <div>
        <h2 className="section-heading">Why Bravit?</h2>
        <p className="home-text">
          With expertise and strong vendor support, we’ve secured a respected position in the industry. Here’s why clients across the nation appreciate us:
        </p>
        <ul>
          <li>Large distribution network</li>
          <li>High-quality product range</li>
          <li>Ethical business policies</li>
          <li>Reasonable prices</li>
          <li>Transparent dealings</li>
          <li>Excellent transport & logistics</li>
          <li>Rich vendor base</li>
          <li>Client-centric approach</li>
        </ul>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          {["Quality", "Ethics", "Global Reach"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
