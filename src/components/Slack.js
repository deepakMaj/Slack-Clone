import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { firestore, auth } from '../firebase';
import { useLocation, withRouter } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Slack = props => {
  const { history } = props;
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState({});
  const query = useQuery();
  const channelId = query.get('id');

  useEffect(() => {
    firestore.collection('channels').where('members', 'array-contains', auth.currentUser.uid).get().then(snapshot => {
      const channels = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setChannels(channels);

      if (!channelId) {
        history.push({
          pathname: '/',
          search: `?id=${channels[0].id}`
        });
        setCurrentChannel(channels[0]);
      }
      else {
        const filterChannel = channels.filter(channel => channel.id === channelId);
        setCurrentChannel(filterChannel);
      }
    })
      .catch(err => {
        console.log(err);
      });
  }, [channelId, history]);
  return (
    <div className="slack">
      <Sidebar channels={channels} />
      <MainContainer channel={currentChannel} />
    </div>
  )
}

export default withRouter(Slack);
