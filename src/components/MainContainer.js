import { firestore, auth } from '../firebase';
import React, { useEffect, useState } from 'react';
// import UserContext from '../context/user/userContext';

const MainContainer = props => {
  // const userContext = useContext(UserContext);
  const { channel, onClickToggle } = props;
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const fetchMessages = () => {
    if (!channel.id) return;
    firestore.collection('messages').where('channel', '==', channel.id).orderBy('created_at', 'asc').get()
      .then(snapshot => {
        const messages = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setMessages(messages);
      });
  }

  const onSubmit = e => {
    if ((e.keycode === 13 && channel.id && userMessage) || (channel.id && userMessage)) {
      const data = {
        from: {
          id: auth.currentUser.uid,
          name: auth.currentUser.displayName
        },
        text: userMessage,
        channel: channel.id,
        created_at: new Date()
      }
      firestore.collection('messages').add(data)
        .then(() => {
          setUserMessage('');
          fetchMessages();
        });
    }
  }

  const handleUserMessage = e => {
    setUserMessage(e.target.value);
  }

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line
  }, [channel]);

  return (
    <div className="main-container" style={{ width: "100%", height: "100vh", marginLeft: "28%" }}>
      <div className="menu">
        <i className="fa fa-bars" onClick={onClickToggle}></i>
      </div>
      <div className="header">
        <div style={{ display: "grid" }}>
          <span className="chat-name"><i className="fa fa-hashtag"></i> {channel.name}</span>
          <span className="info">
            <span style={{ marginRight: "15px" }}>{channel.description}</span>
          </span>
        </div>
        <div style={{ fontSize: "25px" }}>
          <i className="fa fa-search"></i>
          <i className="fa fa-ellipsis-v" style={{ marginLeft: "15px", cursor: "pointer" }}></i>
        </div>
      </div>
      <div className="break"></div>
      <div className="chat-box">
        {messages.map(message => (
          <div className="users" style={{ display: "flex" }} key={message.id}>
            <div>
              <img src='https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72' alt="" id="user-img" />
            </div>
            <div className="user-msg" style={{ display: "grid", marginLeft: "10px" }}>
              <span className="name">
                <span className="only-name">{message.from.name}</span>
                <span style={{ fontSize: "14px", color: "rgb(165 160 160)", marginLeft: "15px" }}></span>
              </span>
              <span className="msg">{message.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-div" style={{ padding: "25px", paddingBottom: "5px", display: "flex" }}>
        <input type="text" className="input-box" placeholder="Message someone..." value={userMessage} onChange={handleUserMessage} />
        <i className="fa fa-paper-plane send-btn" onClick={onSubmit}></i>
      </div>
    </div>
  )
}

export default MainContainer
