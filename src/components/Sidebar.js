import React, { useContext } from 'react';
import { signOut } from '../firebase';
import UserContext from '../context/user/userContext';

function Sidebar() {
  const userContext = useContext(UserContext);
  const { clearUser } = userContext;

  const onSignOut = () => {
    signOut();
    clearUser();
  }

  return (
    <div className="sidebar">
      <div className="user-profile">
        <div>
          <img src="https://img.icons8.com/bubbles/80/000000/user-male.png" alt="" id="user-img" />
        </div>
        <div id="name">
          <span className="user-slack">Slack User</span>
          <span className="user-name">
            <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
            Deepak Mahajan
          </span>
        </div>
        <img src="https://img.icons8.com/fluent/48/000000/exit.png" alt="" style={{ height: "50px", marginLeft: "2px", marginTop: "15px", cursor: "pointer" }} onClick={onSignOut} title="Sign Out" />
      </div>
      <div className="user-channels">
        <div className="channels-pri">
          Channels <i className="fa fa-plus-square" style={{ fontSize: "16px", cursor: "pointer" }}></i>
        </div>
        <div className="channels-sec">
          <ul style={{ listStyle: "none" }}>
            <li className="channels-name"><span className="shift">#</span>action</li>
            <li className="channels-name"><span className="shift">#</span>design-feedback</li>
            <li className="channels-name"><span className="shift">#</span>events</li>
            <li className="channels-name"><span className="shift">#</span>facelift</li>
            <li className="channels-name"><span className="shift">#</span>urgent-issues</li>
          </ul>
        </div>
      </div>
      <div className="user-messages">
        <div className="channels-pri">
          Direct Messages <i className="fa fa-plus-square" style={{ fontSize: "16px", cursor: "pointer" }}></i>
        </div>
        <div className="channels-sec">
          <ul style={{ listStyle: "none" }}>
            <li className="channels-name">
              <span className="shift">
                <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
                Deepak Mahajan(You)
              </span>
            </li>
            <li className="channels-name">
              <span className="shift">
                <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
                Ekshu Mahajan
              </span>
            </li>
            <li className="channels-name">
              <span className="shift">
                <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
                Hemant Gupta
              </span>
            </li>
            <li className="channels-name">
              <span className="shift">
                <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
                Jatinder Singh
              </span>
            </li>
            <li className="channels-name">
              <span className="shift">
                <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
                Rahul Madaan
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
