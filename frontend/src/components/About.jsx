import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">
                Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat (India) based company dealing with pharmaceuticals, nutraceuticals, health and hygiene, food and supplements, trading, import, and export.
            </p>
            <p className="about-text">
                We assure longer and closer working relationships with our clients and suppliers, not only providing immediate and reliable services but also continually exceeding expectations and goals.
            </p>
            <p className="about-text">
                We are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market. We look forward to welcoming you to our company and working to develop and enhance your current business with us.
            </p>

            <div className="about-image-container">
                <img src="/about.png" alt="customer support" className="about-img" />
            </div>

            <table className="about-table">
                <thead>
                    <tr>
                        <th>Our Mission</th>
                        <th>Our Vision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>To provide high-quality, affordable healthcare products to all.</li>
                                <li>To maintain ethical and transparent business practices.</li>
                                <li>To ensure customer satisfaction through excellent service and support.</li>
                                <li>To innovate and improve continuously in healthcare offerings.</li>
                                <li>To support well-being through scientifically backed formulations.</li>
                                <li>To empower communities by promoting healthy living.</li>
                                <li>To strengthen partnerships with medical professionals and distributors.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>To be recognized as a globally trusted pharmaceutical brand.</li>
                                <li>To make healthcare accessible and effective for every individual.</li>
                                <li>To lead in quality, safety, and value in the healthcare industry.</li>
                                <li>To contribute to a healthier world through sustainable practices.</li>
                                <li>To expand our reach through digital transformation and ecommerce.</li>
                                <li>To stay ahead with cutting-edge R&D and innovation.</li>
                                <li>To inspire confidence in every consumer and partner globally.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default About;
