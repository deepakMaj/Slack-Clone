import React from 'react'

function MainContainer() {
  return (
    <div className="main-container" style={{ width: "100%" }}>
      <div className="header">
        <div style={{ display: "grid" }}>
          <span class="chat-name"><i className="fa fa-hashtag"></i> facelift</span>
          <span className="info">
            <span style={{ marginRight: "15px" }}>Slack facelift project</span>
            <span><i className="fa fa-circle" style={{ fontSize: "7px", verticalAlign: "middle" }}></i> 10 members</span>
          </span>
        </div>
        <div style={{ fontSize: "25px" }}>
          <i className="fa fa-search"></i>
          <i className="fa fa-ellipsis-v" style={{ marginLeft: "15px", cursor: "pointer" }}></i>
        </div>
      </div>
      <div className="break"></div>
      <div className="chat-box" style={{ padding: "25px 25px", position: "relative", height: "65%" }}>
        <div className="users" style={{ display: "flex" }}>
          <div>
            <img src="https://img.icons8.com/bubbles/60/000000/user-male.png" alt="" id="user-img" />
          </div>
          <div className="user-msg" style={{ display: "grid", marginLeft: "10px" }}>
            <span className="name">
              <span className="only-name">Deepak Mahajan</span>
              <span style={{ fontSize: "14px", color: "rgb(165 160 160)", marginLeft: "15px" }}>8:38 PM</span>
            </span>
            <span className="msg">Hi how are you?</span>
          </div>
        </div>
      </div>
      <div className="input-div" style={{ position: "absolute", padding: "25px 25px" }}>
        <input type="text" className="input-box" placeholder="Message someone" />
        <i className="fa fa-paper-plane" style={{ fontSize: "30px", marginLeft: "10px" }}></i>
      </div>
    </div>
  )
}

export default MainContainer
