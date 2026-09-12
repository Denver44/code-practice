import { ConnectionPool } from './connectionpool/ConnectionPool';

const a = ConnectionPool.getInstance();
const b = ConnectionPool.getInstance();

console.log(a === b); // always true, single thread, no race possible
