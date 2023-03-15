import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  messages: {
    height: '70vh',
    overflowY: 'scroll',
    padding: theme.spacing(2),
  },
  message: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
}));

const socket = io('http://localhost:5000');

function Chat() {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);
  const handleSendMessage = () => {
    if (message) {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
      
    }
  };

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Chat Room
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <IconButton
              // type="submit"
              className={classes.iconButton}
              onClick={handleSendMessage}
            >
              <SendIcon />
            </IconButton>
          </Paper>
          <div className={classes.messages}>
            {messages.map((msg, index) => (
              <Paper key={index} className={classes.message}>
                <Typography variant="body1">{msg}</Typography>
              </Paper>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
