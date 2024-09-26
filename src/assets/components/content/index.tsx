import Container from "react-bootstrap/Container";
import AboutContent from "../about";
import ResumeContent from "../resume";

import "./style.scss";

type Section = "about" | "resume";

interface MainContentProps {
  activeSection: Section;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeContent />;

      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="content">
      <Container>{renderContent()}</Container>
    </div>
  );
};

export default MainContent;
