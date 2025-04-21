const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('log', (msg) => {
  console.log('Logged message:', msg);
});

emitter.emit('log', 'This is a custom event!');
