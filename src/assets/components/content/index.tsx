import Container from "react-bootstrap/Container";
import AboutContent from "../about";
import ResumeContent from "../resume";
import PortfolioContent from "../portfolio";
import BlogContent from "../blog";
import ContactContent from "../contact";

import "./style.scss";

type Section = "about" | "resume" | "portfolio" | "blog" | "contact";

interface MainContentProps {
  activeSection: Section;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeContent />;
      case "portfolio":
        return <PortfolioContent />;
      case "blog":
        return <BlogContent />;
      case "contact":
        return <ContactContent />;

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
