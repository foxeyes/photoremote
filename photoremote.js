import { Server } from './lib/Server.js';
import child from 'child_process';

const port = 8000;
const server = new Server(port);
server.start();

const url = `http://localhost:${port}/ui/`;
const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
child.exec(start + ' ' + url);