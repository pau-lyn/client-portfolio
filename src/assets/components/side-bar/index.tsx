import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";

import ProfileImage from "../../images/jennie.jpg";
import EmailIcon from "../icons/email";
import TrelloIcon from "../icons/trello";
import InfoIcon from "../icons/info";
import ButtonComponent from "../button";
import ExpandIcon from "../icons/expand";
import CompressIcon from "../icons/compress";

import "./style.scss";

interface SideBarProps {
  isCompressed: boolean;
  toggleSidebar: () => void;
}

function SideBar({ isCompressed, toggleSidebar }: SideBarProps) {
  return (
    <div className={`side-bar ${isCompressed ? "compressed" : ""}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container
          className={`d-flex flex-column ${
            isCompressed ? "compressed" : "align-items-start"
          }`}
        >
          <div className="d-flex">
            <ButtonComponent
              classname={`toggle-btn d-none d-lg-block ${
                isCompressed ? "compressed" : ""
              }`}
              onClick={toggleSidebar}
            >
              {isCompressed ? (
                <ExpandIcon color="#fffff0" />
              ) : (
                <CompressIcon color="#fffff0" />
              )}
            </ButtonComponent>
          </div>
          <div
            className={`sidebar-content ${isCompressed ? "compressed" : ""}`}
          >
            <div className="d-flex flex-column align-items-center">
              <img src={ProfileImage} alt="Profile" />
            </div>

            {!isCompressed ? (
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
                  isCompressed ? "compressed" : ""
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
