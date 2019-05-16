import configs from './configs.js';
import sstls from '../../../json/server-side-tls-conf.json';


export default async function () {
  const form = document.getElementById('form-generator').elements;
  const config = form['config'].value;
  const server = form['server'].value;
  const ssc = sstls.configurations[form['config'].value];  // server side tls config for that level
  
  const url = new URL(document.location);
  const fragment = `server=${server}&server-version=${form['server-version'].value}&openssl-version=${form['openssl-version'].value}&config=${config}&hsts=${form['hsts'].checked}&ocsp=${form['ocsp'].checked}`;
  const link = `${url.origin}${url.pathname}#${fragment}`;

  const state = {
    form: {
      config: form['config'].value,
      hsts: form['hsts'].checked && configs[server].supportsHsts !== false,
      ocsp: form['ocsp'].checked && configs[server].supportsOcspStapling !== false,
      opensslVersion: form['openssl-version'].value,
      server,
      serverVersion: form['server-version'].value,      
    },
    output: {
      cipherSuites: ssc.openssl_ciphersuites,
      fragment,
      hasVersions: configs[server].hasVersions !== false,
      hstsMaxAge: ssc.hsts_min_age,
      latestVersion: configs[server].latestVersion,
      link,
      oldestClients: ssc.oldest_clients,
      protocols: ssc.tls_versions,
      supportsHsts: configs[server].supportsHsts !== false,
      supportsOcspStapling: configs[server].supportsOcspStapling !== false,
      supportedCiphers: configs[server].supportedCiphers,
      usesOpenssl: configs[server].usesOpenssl !== false,
    },
    sstls,
  };

  return state;
};
