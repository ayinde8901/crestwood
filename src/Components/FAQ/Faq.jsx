import { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What is the admission process?",
    answer:
      "Parents can apply online or visit the school office. Required documents include birth certificate and previous academic records.",
  },
  {
    question: "What curriculum does the school follow?",
    answer:
      "We follow a modern curriculum focused on academic excellence, leadership, and innovation.",
  },
  {
    question: "Are extracurricular activities available?",
    answer:
      "Yes, we offer sports, music, drama, coding club, and other enrichment programs.",
  },
  {
    question: "How can I contact the school?",
    answer:
      "You can contact us through the contact form or call our school office during working hours.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <div className="faq-icon">
                <span className={activeIndex === index ? "rotate" : ""}>
                  +
                </span>
              </div>
            </div>

            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
