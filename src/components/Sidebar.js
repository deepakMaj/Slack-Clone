import React, { useContext, useEffect } from 'react';
import { signOut } from '../firebase';
import UserContext from '../context/user/userContext';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  const userContext = useContext(UserContext);
  const { clearUser, user, sidebar } = userContext;
  const { channels } = props;

  const onSignOut = () => {
    signOut();
    clearUser();
  }

  useEffect(() => {
    if (sidebar) {
      document.querySelector('.sidebar').display = 'block !important';
      console.log('working');
    }
    else {
      console.log('not working');
    }
  });

  return (
    <div className="sidebar">
      <div className="user-profile">
        <div>
          <img src={user.photo_url} alt="" id="user-img" />
        </div>
        <div id="name">
          <span className="user-slack">Slack User</span>
          <span className="user-name">
            <img src="https://img.icons8.com/fluent/8/000000/circled.png" alt="" style={{ marginRight: "8px" }} />
            {user.display_name}
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
            {channels.map(channel => (
              <li className="channels-name" key={channel.id}>
                <span className="shift">#</span>
                <Link to={`/?id=${channel.id}`} className="channelName">{channel.name}</Link>
              </li>
            ))}
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
