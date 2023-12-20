import { useEffect, useRef, useState } from "react";
import "./style/imageslider.css";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const content = [
  {
    title: "TECHNIANS Lead The Way With 5 Category Wins",
    description:
      "Bagged 5 trophies to its case in the MARTEQUITY Awards 2023 by ETBrandEquity. It has turned out to be a moment of honor and recognition that resonates not just within the Agency, but across the entire industry.",
    link: "https://technians.com/blog/technians-lead-the-way-with-5-category-wins/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/08/570-x-550.webp?x67759",
  },
  {
    title: "Winner in Regional Digital Category!",
    description:
      "Technians has earned a Silver award in the Regional Digital Category at the ET Brand Equity DG+ Awards in recognition of their exceptional performance in the Ananda Dairy campaign. The team's efforts are commendable and deserve gratitude.",
    link: "https://technians.com/blog/best-regional-digital-campaign-at-digiplus-awards/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/02/570-550-1.webp?x67759",
  },
  {
    title: "Technians Reign Supreme: 7 Awards, 7 Triumphs!",
    description:
      "Technians solidifies its position as a pioneering force in Martech by winning 7 awards at India MarTech Conclave & Awards 2023. These prestigious awards recognise their unwavering commitment to innovation and achievement in the Martech industry.",
    link: "https://technians.com/blog/india-martech-conclave-awards-technians-roars-loud/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/11/570x550n.jpg?x67759",
  },
  {
    title: "Victory Alert: Technians Clinches ICL Awards!",
    description:
      "At the India Content Leadership Awards 2023, Technians stood tall among industry giants, painting an unparalleled narrative of digital prowess and innovative marketing strategies. Their journey to success echoed through the event, marking triumphs in different categories.",
    link: "https://technians.com/blog/an-epitome-of-excellence-our-remarkable-feat-at-icl-2023-awards/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/12/570x550-1.jpg?x67759",
  },
  {
    title: "Technians wear Top Content Agency Crown !",
    description:
      "At the ICL Awards 2023, a celebrated stage for content brilliance, Technians emerged as pioneers of unrivaled excellence. Our triumph in the 'Top Content Agencies - Independent' category affirmed our relentless pursuit of crafting captivating content narratives that resonate.",
    link: "https://technians.com/blog/an-epitome-of-excellence-our-remarkable-feat-at-icl-2023-awards/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/12/570x550-2-2.jpg?x67759",
  },
  {
    title: "Technians Grabs Social Stars Glory!",
    description:
      "The stage set by the Social Stars Awards 2023 provided the perfect canvas for Technians to weave captivating narratives, showcasing their extraordinary skills, setting new benchmarks in the industry.",
    link: "https://technians.com/blog/awards-speak-louder-narrating-our-journey-to-content-excellence/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/12/570x550-2-1.jpg?x67759",
  },
  {
    title: "Digital Agency of The Year",
    description:
      "Technians was honored with the “Digital Agency of The Year Award” by the Indian Brands of the Year 2019, Jury in association with APS Media & Research! This was the second time that we won an award!....",
    link: "https://technians.com/blog/technians-bags-digital-agency-of-the-year-award-2019/",
    image:
      "https://static.technians.com/wp-content/uploads/2020/12/Digital-Agency-of-The-Year-APS-Award.webp?x67759",
  },
  {
    title: "DG+ - Technians' consecutive Win in DG+ Awards !",
    description:
      "Technians triumphed with the esteemed BRONZE award at ETBrandEquity’s 5th India DigiPlus Awards, spotlighting their innovative impact in redefining brand narratives and elevating industry standards within global digital marketing.",
    link: "https://technians.com/blog/technians-bags-digital-agency-of-the-year-award-2019/",
    image:
      "https://static.technians.com/wp-content/uploads/2023/12/570x550-3-1.jpg?x67759",
  },
];

const delay = 25000;

export const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {content.map((slideContent, idx) => (
          <div
            key={idx}
            className="slide"
            style={{ backgroundImage: `url(${slideContent.backgroundImage})` }}
          >
            <div
              style={{ width: "665px", marginRight: "10px" }}
              className="c-award"
            >
              <div className="c-award__bg">
                <img
                  src={slideContent.image}
                  alt=""
                  className="c-award__image"
                  loading="lazy"
                  width="570"
                  height="550"
                />
              </div>
              <div className="c-award__body">
                <div className="c-award__icon"></div>
                <div className="c-award__title">{slideContent.title}</div>
                <div className="c-award__sub">{slideContent.description}</div>
                <a href={slideContent.link} className="c-award__cta_new">
                  <span className="c_awardinn"></span>
                  <span className="knownomove">Read More</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {content.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
