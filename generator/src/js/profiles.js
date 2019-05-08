const sstls = require('../../../json/server-side-tls-conf.json');


const profiles = {
  apache: {
    highlighter: 'apache',
    latestVersion: '2.4.39',
  },
  awselb: {
    highlighter: 'json',
    latestVersion: '0.0.0',
  },
  haproxy: {
    highlighter: 'nginx',  // TODO: find better
    latestVersion: '1.9.7',
  },
  lighttpd: {
    highlighter: 'nginx',
    latestVersion: '1.4.53',
  },
  nginx: {
    highlighter: 'nginx',
    latestVersion: '1.16.0',
  },
  openssl: {
    latestVersion: '1.1.1b',
  }
};


module.exports = profiles;