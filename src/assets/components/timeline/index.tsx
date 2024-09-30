import React from "react";
import "./style.scss";

interface TimelineItem {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface TimelineProps {
  icon: React.ComponentType<{ color: string }>;
  items: TimelineItem[];
  sectionTitle: string;
}

const Timeline: React.FC<TimelineProps> = ({
  items,
  sectionTitle,
  icon: Icon,
}) => {
  return (
    <div className="timeline py-2">
      <div className="timeline__header d-flex align-items-center pb-3">
        <span>
          <Icon color="#fffff0" />
        </span>
        <h5 className="px-2">
          <strong>{sectionTitle}</strong>
        </h5>
      </div>

      <div className="timeline__items">
        {items.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__date">
              <h5>
                {item.institution} | {item.startDate} - {item.endDate}
              </h5>
            </div>
            <p className="timeline__description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
