import profiles from './profiles.js';
import sstls from '../../../json/server-side-tls-conf.json';

// global state object
let state = {};


export default async function () {
  const form = document.getElementById('form-generator').elements;
  const config = form['config'].value;
  const server = form['server'].value;
  const ssc = sstls.configurations[form['config'].value];  // server side tls config for that level

  const state = {
    form: {
      config: form['config'].value,
      hsts: form['hsts'].checked,
      ocsp: form['ocsp'].checked,
      opensslVersion: form['openssl-version'].value,
      server,
      serverVersion: form['server-version'].value,      
    },
    output: {
      cipherSuites: ssc.openssl_ciphersuites,
      hstsMaxAge: ssc.hsts_min_age,
      latestVersion: profiles[server].latestVersion,
      oldestClients: ssc.oldest_clients,
      protocols: ssc.tls_versions,
      supportedCiphers: profiles[server].supportedCiphers,
    },
    sstls,
  };

  console.log('state has been updated', state, config, server);

  return state;
};
