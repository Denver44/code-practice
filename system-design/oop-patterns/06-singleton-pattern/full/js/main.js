import { ConnectionPool } from './connectionpool/ConnectionPool.js';

const a = ConnectionPool.getInstance();
const b = ConnectionPool.getInstance();

console.log(a === b); // always true, single thread, no race possible
