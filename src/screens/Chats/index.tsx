import React from 'react';
import {View, Text, VStack, Input, Button} from 'native-base';
import {io} from 'socket.io-client';

import {getUserDetails} from '../../store';
import {useAppSelector} from '../../hooks';

const socket = io('http://192.168.29.85:3000', {transports: ['websocket']});

const Chats = () => {
  const user = useAppSelector(getUserDetails);
  const [msg, setMsg] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const connectToSocket = () => {
    console.log('socket web loading');

    // connnect to socket
    socket.on('connect', () => {
      console.log('socket web connected');
    });

    // @ts-ignore join private message room
    socket.emit('joinPrivateMessageRoom', 23456);

    // listen to messages
    socket.on('privateMessage', message => {
      console.log('message', message, messages);
      setMessages(prev => [...prev, {message}]);
    });
  };

  React.useLayoutEffect(() => {
    if (user && user._id) connectToSocket();
  }, [user]);

  return (
    <VStack flex={1} safeArea>
      <Text>Chats</Text>
      <VStack flex={0.8} bg="amber.200">
        {messages.map((msg, index) => (
          <Text>{msg.message}</Text>
        ))}
      </VStack>
      <Input type="text" value={msg} onChangeText={val => setMsg(val)} />
      <Button onPress={() => socket.emit('sendPrivateMessage', msg, 12345)}>
        Send
      </Button>
    </VStack>
  );
};

export default Chats;

//algo for private chat
// join ur userId
// listen to private message
// emit a privateMsg event, along with the userId of the person u want to send the msg to
