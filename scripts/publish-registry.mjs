// Reads the ed25519 seed (hex) from stdin, signs in to the MCP Registry by HTTP domain proof,
// and publishes server.json. The seed and the token stay in memory.
import { createPrivateKey, sign } from 'node:crypto';
import { readFileSync } from 'node:fs';

const REGISTRY = 'https://registry.modelcontextprotocol.io';
const seed = Buffer.from(readFileSync(0, 'utf8').trim(), 'hex');
if (seed.length !== 32) throw new Error('the seed is not 32 bytes');
const key = createPrivateKey({ key: Buffer.concat([Buffer.from('302e020100300506032b657004220420', 'hex'), seed]), format: 'der', type: 'pkcs8' });
const timestamp = new Date().toISOString();
const signed = sign(null, Buffer.from(timestamp), key).toString('hex');
const auth = await fetch(`${REGISTRY}/v0/auth/http`, {
  method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ domain: 'usefeeds.com', timestamp, signed_timestamp: signed }),
});
if (!auth.ok) throw new Error(`auth: HTTP ${auth.status} ${await auth.text()}`);
const { registry_token: token } = await auth.json();
const body = readFileSync(process.argv[2], 'utf8');
const res = await fetch(`${REGISTRY}/v0/publish`, {
  method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` }, body,
});
console.log(`publish: HTTP ${res.status}`);
console.log((await res.text()).slice(0, 800));
