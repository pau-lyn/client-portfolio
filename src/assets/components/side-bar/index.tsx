import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";

import ProfileImage from "../../images/jennie.jpg";
import EmailIcon from "../icons/email";
import TrelloIcon from "../icons/trello";
import InfoIcon from "../icons/info";
import ButtonComponent from "../button";

import "./style.scss";

interface SideBarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

function SideBar({ isCollapsed, toggleSidebar }: SideBarProps) {
  return (
    <div className={`side-bar ${isCollapsed ? "collapsed" : ""}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex flex-column">
          <div className="d-flex align-items-start">
            <ButtonComponent
              classname={`toggle-btn d-none d-md-block ${
                isCollapsed ? "collapsed" : ""
              }`}
              onClick={toggleSidebar}
            >
              {isCollapsed ? ">" : "<"}
            </ButtonComponent>
          </div>
          <div className={`sidebar-content ${isCollapsed ? "collapsed" : ""}`}>
            <div className="d-flex flex-column align-items-center">
              <img src={ProfileImage} alt="Profile" />
            </div>

            {!isCollapsed ? (
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <h5>Jennie Kim</h5>
                  <p className="role">University Student</p>
                </div>
                <hr style={{ width: "100%", border: "2px solid #000000" }} />
                <div className="d-flex align-items-center py-2">
                  <div className="svg-icon">
                    <EmailIcon color="#02542c" />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <span className="text">Email</span>
                    <span>jenniekim@gmail.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2">
                  <div className="svg-icon">
                    <EmailIcon color="#02542c" />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <span className="text">Email</span>
                    <span>jenniekim@gmail.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2">
                  <div className="svg-icon">
                    <EmailIcon color="#02542c" />
                  </div>
                  <div className="d-flex flex-column px-3">
                    <span className="text">Email</span>
                    <span>jenniekim@gmail.com</span>
                  </div>
                </div>
              </div>
            ) : (
              <DropdownButton
                id="dropdown-info"
                title={<InfoIcon color="" />}
                variant="secondary"
                drop="end"
              >
                <Dropdown.Item>
                  <div className="d-flex flex-column align-items-center">
                    <h5 className="text-center">Jennie Kim</h5>
                    <p className="role">University Student</p>
                  </div>
                  <hr style={{ width: "100%", border: "2px solid #000000" }} />
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-flex align-items-center">
                    <EmailIcon color="#02542c" />
                    <span className="px-2">jenniekim@gmail.com</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-flex align-items-center">
                    <EmailIcon color="#02542c" />
                    <span className="px-2">jenniekim@gmail.com</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-flex align-items-center">
                    <EmailIcon color="#02542c" />
                    <span className="px-2">jenniekim@gmail.com</span>
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            )}

            <div className="icon-container">
              <div
                className={`d-flex justify-content-between link mx-4 mt-5 ${
                  isCollapsed ? "collapsed" : ""
                }`}
              >
                <TrelloIcon color="" />
                <TrelloIcon color="" />
                <TrelloIcon color="" />
                <TrelloIcon color="" />
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default SideBar;
