const sstls = require('../../../json/server-side-tls-conf.json');


const profiles = {
  apache: {
    highlighter: 'apache',
    latestVersion: '2.4.39',
    modern: {
      protocols: 'all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1',
    },
    intermediate: {
      protocols: 'all -SSLv2 -SSLv3',
    },
    old: {
      protocols: 'all -SSLv2',
    }
  },
  haproxy: {
    latestVersion: '1.9.7',
  },
  lighttpd: {
    latestVersion: '1.4.53',
  },
  nginx: {
    highlighter: 'nginx',
    latestVersion: '1.16.0',
    modern: {
      protocols: 'TLSv1.2',
    },
    intermediate: {
      protocols: 'TLSv1 TLSv1.1 TLSv1.2',
    },
    old: {
      protocols: 'SSLv3 TLSv1 TLSv1.1 TLSv1.2',
    }
  },
  openssl: {
    latestVersion: '1.1.1b',
  }
};


module.exports = profiles;