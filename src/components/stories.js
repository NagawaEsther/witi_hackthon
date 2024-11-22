import React from "react";
import "./stories.css";

// Import images from assets
// import hackathonImage from "../assets/hackathon.jpg";
// import africaTalkingImage from "../assets/africa_talking.jpg";
// import lowCodeImage from "../assets/my_image.JPG";
import lowCodeImage from '../my_image.JPG'

const StoriesPage = () => {
  // Static array of stories with imported images
  const stories = [
    {
      id: 1,
      title: "Hackathons & Meetups: Where Innovation and Collaboration Thrive",
      description:
        "These hackathons have impacted the women pushing their limits, showcasing their skills, and connecting with like-minded innovators in a dynamic and supportive environment. Join us to create, compete, and network with industry leaders shaping the future.",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*O6H0CZoOURRZmt95jiO08w.jpeg",
      videoUrl: null,
    },
    {
      id: 2,
      title: "Africa's Talking Women In Tech Uganda Launch: Understanding Africa's Talking Products",
      description:
        "The Africa's Talking Women in Tech Uganda Launch showcased how Africa's Talking products USSD, SMS, Airtime, and Voice empower women in technology to drive innovation, enhance communication, and solve local challenges.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EzgKyNxmf1LCNbPzbuo7GQ.jpeg", 
      videoUrl: null,
    },
    {
      id: 3,
      title: "Building the Future with Low Code and No-Code Platforms",
      description:
        "No-code and low-code platforms like FlutterFlow and Wix empower women in tech to create apps, websites, and workflows without extensive coding. These tools simplify development, enabling faster implementation, cost-effective solutions, and greater accessibility for women to innovate and lead in tech.",
      image: lowCodeImage, 
      videoUrl: null,
    },
  ];

  return (
    <div className="stories-page">
      <div className="stories-heading">
        <h2>Our Stories</h2>
      </div>

      {/* Stories Section */}
      <div className="stories-section">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="story-item"
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {/* Left Column: Story Text and Background */}
            <div className="story-text">
              <div className="story-background">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                {/* Conditional rendering for button */}
                {story.videoUrl && (
                  <a
                    href={story.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Story Image or Video */}
            <div className="story-video">
              {story.videoUrl ? (
                // Display YouTube video if URL is provided
                <iframe
                  width="100%"
                  height="315"
                  src={story.videoUrl}
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Display static image if no video URL
                <img
                  src={story.image}
                  alt={story.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;










