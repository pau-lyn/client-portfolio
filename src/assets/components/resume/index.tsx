import Timeline from "../timeline";
import { TimelineItem } from "./types";

import BookIcon from "../icons/book";
import WorkIcon from "../icons/work";

import "./style.scss";

const educationData: TimelineItem[] = [
  {
    title: "Bachelor's Degree",
    institution: "Mariano Marcos State University",
    startDate: "2022",
    endDate: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "High School",
    institution: "Sta Rosa National High School",
    startDate: "2020",
    endDate: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "High School",
    institution: "Sta Rosa National High School",
    startDate: "2020",
    endDate: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const ExperienceData: TimelineItem[] = [
  {
    title: "Bachelor's Degree",
    institution: "Mariano Marcos State University",
    startDate: "2022",
    endDate: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "High School",
    institution: "Sta Rosa National High School",
    startDate: "2020",
    endDate: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "High School",
    institution: "Sta Rosa National High School",
    startDate: "2020",
    endDate: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function ResumeContent() {
  return (
    <div id="resume" className="resume">
      <div className="top d-flex justify-content-between mb-3">
        <h3>Resume</h3>
      </div>
      <div className="scroll px-3">
        <Timeline
          items={educationData}
          sectionTitle="Education"
          icon={BookIcon}
        />
        <Timeline
          items={ExperienceData}
          sectionTitle="Experiences"
          icon={WorkIcon}
        />
        <h5>My Skills</h5>
        <div className="skills mx-3 mt-4 mb-2 px-3 py-4"></div>
      </div>
    </div>
  );
}

export default ResumeContent;
