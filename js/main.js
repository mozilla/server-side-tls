var captureJson;
$.getJSON("https://fr0zenbits.github.io/server-side-tls/json/server-side-tls-conf-4.0.json").done(fucntion(x){ captureJson = x; });

var json = captureJson.configurations;

var versions = {
    apache: ["1.3","2.0.1","2.0.2","2.0.3","2.0.4","2.0.5","2.0.6","2.0.7","2.0.8","2.0.9","2.0.10","2.0.11","2.0.12","2.0.13","2.0.14","2.0.15","2.0.16","2.0.17","2.0.18","2.0.19","2.0.20","2.0.21","2.0.22","2.0.23","2.0.24","2.0.25","2.0.26","2.0.27","2.0.28","2.0.29","2.0.30","2.0.31","2.0.32","2.0.33","2.0.34","2.0.35","2.0.36","2.0.37","2.0.38","2.0.39","2.0.40","2.0.41","2.0.42","2.0.43","2.0.44","2.0.45","2.0.46","2.0.47","2.0.48","2.0.49","2.0.50","2.0.51","2.0.52","2.0.53","2.0.54","2.0.55","2.0.56","2.0.57","2.0.58","2.0.59","2.0.60","2.0.61","2.0.62","2.0.63","2.0.64","2.0.65","2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.6","2.1.7","2.1.8","2.1.9","2.1.10","2.2.0","2.2.1","2.2.2","2.2.3","2.2.4","2.2.5","2.2.6","2.2.7","2.2.8","2.2.9","2.2.10","2.2.11","2.2.12","2.2.13","2.2.14","2.2.15","2.2.16","2.2.17","2.2.18","2.2.19","2.2.20","2.2.21","2.2.22","2.2.23","2.2.24","2.2.25","2.2.26","2.2.27","2.2.28","2.2.29","2.2.30","2.2.31","2.2.32","2.2.34","2.3.0","2.3.1","2.3.2","2.3.3","2.3.4","2.3.5","2.3.6","2.3.7","2.3.8","2.3.9","2.3.10","2.3.11","2.3.12","2.3.13","2.3.14","2.3.15","2.3.16","2.4.0","2.4.1","2.4.2","2.4.3","2.4.4","2.4.5","2.4.6","2.4.7","2.4.8","2.4.9","2.4.10","2.4.11","2.4.12","2.4.13","2.4.14","2.4.15","2.4.16","2.4.17","2.4.18","2.4.20","2.4.23","2.4.25","2.4.26","2.4.27","2.4.28"],
    nginx: ["0.1.0","0.1.1","0.1.2","0.1.3","0.1.4","0.1.5","0.1.6","0.1.7","0.1.8","0.1.9","0.1.10","0.1.11","0.1.12","0.1.13","0.1.14","0.1.15","0.1.16","0.1.17","0.1.18","0.1.19","0.1.20","0.1.21","0.1.22","0.1.23","0.1.24","0.1.25","0.1.26","0.1.27","0.1.28","0.1.29","0.1.30","0.1.31","0.1.32","0.1.33","0.1.34","0.1.35","0.1.36","0.1.37","0.1.38","0.1.39","0.1.40","0.1.41","0.1.42","0.1.43","0.1.44","0.1.45","0.2.0","0.2.1","0.2.2","0.2.3","0.2.4","0.2.5","0.2.6","0.3.0","0.3.1","0.3.2","0.3.3","0.3.4","0.3.5","0.3.6","0.3.7","0.3.8","0.3.9","0.3.10","0.3.11","0.3.12","0.3.13","0.3.14","0.3.15","0.3.16","0.3.17","0.3.18","0.3.19","0.3.20","0.3.21","0.3.22","0.3.23","0.3.24","0.3.25","0.3.26","0.3.27","0.3.28","0.3.29","0.3.30","0.3.31","0.3.32","0.3.33","0.3.34","0.3.35","0.3.36","0.3.37","0.3.38","0.3.39","0.3.40","0.3.41","0.3.42","0.3.43","0.3.44","0.3.45","0.3.46","0.3.47","0.3.48","0.3.49","0.3.50","0.3.51","0.3.52","0.3.53","0.3.54","0.3.55","0.3.56","0.3.57","0.3.58","0.3.59","0.3.60","0.3.61","0.4.0","0.4.1","0.4.2","0.4.3","0.4.4","0.4.5","0.4.6","0.4.7","0.4.8","0.4.9","0.4.10","0.4.11","0.4.12","0.4.13","0.4.14","0.5.0","0.5.1","0.5.2","0.5.3","0.5.4","0.5.5","0.5.6","0.5.7","0.5.8","0.5.9","0.5.10","0.5.11","0.5.12","0.5.13","0.5.14","0.5.15","0.5.16","0.5.17","0.5.18","0.5.19","0.5.20","0.5.21","0.5.22","0.5.23","0.5.24","0.5.25","0.5.26","0.5.27","0.5.28","0.5.29","0.5.30","0.5.31","0.5.32","0.5.33","0.5.34","0.5.35","0.5.36","0.5.37","0.5.38","0.6.0","0.6.1","0.6.2","0.6.3","0.6.4","0.6.5","0.6.6","0.6.7","0.6.8","0.6.9","0.6.10","0.6.11","0.6.12","0.6.13","0.6.14","0.6.15","0.6.16","0.6.17","0.6.18","0.6.19","0.6.20","0.6.21","0.6.22","0.6.23","0.6.24","0.6.25","0.6.26","0.6.27","0.6.28","0.6.29","0.6.30","0.6.31","0.6.32","0.6.33","0.6.34","0.6.35","0.6.36","0.6.37","0.6.38","0.6.39","0.7.0","0.7.1","0.7.2","0.7.3","0.7.4","0.7.5","0.7.6","0.7.7","0.7.8","0.7.9","0.7.10","0.7.11","0.7.12","0.7.13","0.7.14","0.7.15","0.7.16","0.7.17","0.7.18","0.7.19","0.7.20","0.7.21","0.7.22","0.7.23","0.7.24","0.7.25","0.7.26","0.7.27","0.7.28","0.7.29","0.7.30","0.7.31","0.7.32","0.7.33","0.7.34","0.7.35","0.7.36","0.7.37","0.7.38","0.7.39","0.7.40","0.7.41","0.7.42","0.7.43","0.7.44","0.7.45","0.7.46","0.7.47","0.7.48","0.7.49","0.7.50","0.7.51","0.7.52","0.7.53","0.7.54","0.7.55","0.7.56","0.7.57","0.7.58","0.7.59","0.7.60","0.7.61","0.7.62","0.7.63","0.7.64","0.7.65","0.7.66","0.7.67","0.7.68","0.7.69","0.8.0","0.8.1","0.8.2","0.8.3","0.8.4","0.8.5","0.8.6","0.8.7","0.8.8","0.8.9","0.8.10","0.8.11","0.8.12","0.8.13","0.8.14","0.8.15","0.8.16","0.8.17","0.8.18","0.8.19","0.8.20","0.8.21","0.8.22","0.8.23","0.8.24","0.8.25","0.8.26","0.8.27","0.8.28","0.8.29","0.8.30","0.8.31","0.8.32","0.8.33","0.8.34","0.8.35","0.8.36","0.8.37","0.8.38","0.8.39","0.8.40","0.8.41","0.8.42","0.8.43","0.8.44","0.8.45","0.8.46","0.8.47","0.8.48","0.8.49","0.8.50","0.8.51","0.8.52","0.8.53","0.8.54","0.8.55","0.9.0","0.9.1","0.9.2","0.9.3","0.9.4","0.9.5","0.9.6","0.9.7","1.0.0","1.0.1","1.0.2","1.0.3","1.0.4","1.0.5","1.0.6","1.0.7","1.0.8","1.0.9","1.0.10","1.0.11","1.0.12","1.0.13","1.0.14","1.0.15","1.1.0","1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.1.6","1.1.7","1.1.8","1.1.9","1.1.10","1.1.11","1.1.12","1.1.13","1.1.14","1.1.15","1.1.16","1.1.17","1.1.18","1.1.19","1.2.0","1.2.1","1.2.2","1.2.3","1.2.4","1.2.5","1.2.6","1.2.7","1.2.8","1.2.9","1.3.0","1.3.1","1.3.2","1.3.3","1.3.4","1.3.5","1.3.6","1.3.7","1.3.8","1.3.9","1.3.10","1.3.11","1.3.12","1.3.13","1.3.14","1.3.15","1.3.16","1.4.0","1.4.1","1.4.2","1.4.3","1.4.4","1.4.5","1.4.6","1.4.7","1.5.0","1.5.1","1.5.2","1.5.3","1.5.4","1.5.5","1.5.6","1.5.7","1.5.8","1.5.9","1.5.10","1.5.11","1.5.12","1.5.13","1.6.0","1.6.1","1.6.2","1.6.3","1.7.0","1.7.1","1.7.2","1.7.3","1.7.4","1.7.5","1.7.6","1.7.7","1.7.8","1.7.9","1.7.10","1.7.11","1.7.12","1.8.0","1.8.1","1.9.0","1.9.1","1.9.2","1.9.3","1.9.4","1.9.5","1.9.6","1.9.7","1.9.8","1.9.9","1.9.10","1.9.11","1.9.12","1.9.13","1.9.14","1.9.15","1.10.0","1.10.1","1.10.2","1.10.3"],
    lighttpd: ["1.4.29","1.4.30","1.4.31","1.4.32","1.4.33","1.4.34","1.4.35","1.4.36","1.4.37","1.4.38","1.4.39","1.4.40","1.4.41","1.4.42"],
    haproxy: ["1.0.0","1.0.1","1.0.2","1.1.0","1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.1.6","1.1.7","1.1.8","1.1.9","1.1.10","1.1.11","1.1.12","1.1.13","1.1.14","1.1.15","1.1.16","1.1.17","1.1.18","1.1.19","1.1.20","1.1.21","1.1.22","1.1.23","1.1.24","1.1.25","1.1.26","1.1.27","1.2.0","1.2.1","1.2.2","1.2.3-pre1","1.2.3","1.2.4","1.2.5-pre1","1.2.5-pre2","1.2.5-pre3","1.2.5-pre4","1.2.5","1.2.5.1","1.2.5.2","1.2.6-pre1","1.2.6-pre2","1.2.6-pre3","1.2.6-pre4","1.2.6-pre5","1.2.6","1.2.7rc","1.2.7","1.2.7.1","1.2.8","1.2.9","1.2.10","1.2.10.1","1.2.11","1.2.11.1","1.2.12","1.2.13","1.2.13.1","1.2.14","1.3.0","1.3.1","1.3.2","1.3.3","1.3.4","1.3.5","1.3.6","1.3.6.1","1.3.7","1.3.8","1.3.8.1","1.3.8.2","1.3.9","1.3.10","1.3.10.1","1.3.10.2","1.3.11","1.3.11.1","1.3.11.2","1.3.11.3","1.3.11.4","1.3.12","1.3.12.1","1.3.12.2","1.3.12.3","1.3.13","1.3.14","1.3.15","1.3.16-rc1","1.3.16-rc2","1.3.16","1.3.17","1.3.18","1.4-dev0","1.4-dev1","1.4-dev2","1.4-dev3","1.4-dev4","1.4-dev5","1.4-dev6","1.4-dev7","1.4-dev8","1.4-rc1","1.4.0","1.4.1","1.4.2","1.4.3","1.4.4","1.4.5","1.4.6","1.4.7","1.4.8","1.4.9","1.4.10","1.4.11","1.4.12","1.4.13","1.4.14","1.4.15","1.4.16","1.4.17","1.4.18","1.4.19","1.4.20","1.4.21","1.4.22","1.4.23","1.4.24","1.4.25","1.4.26","1.5-dev1","1.5-dev2","1.5-dev3","1.5-dev4","1.5-dev5","1.5-dev6","1.5-dev7","1.5-dev8","1.5-dev9","1.5-dev10","1.5-dev11","1.5-dev12","1.5-dev13","1.5-dev14","1.5-dev15","1.5-dev16","1.5-dev17","1.5-dev18","1.5-dev19","1.5-dev20","1.5-dev21","1.5-dev22","1.5-dev23","1.5-dev24","1.5-dev25","1.5-dev26","1.5.0","1.5.1","1.5.2","1.5.3","1.5.4","1.5.5","1.5.6","1.5.7","1.5.8","1.5.9","1.5.10","1.5.11","1.5.12","1.5.13","1.5.14","1.5.15","1.5.16","1.5.17","1.5.18","1.5.19","1.6.0","1.6.1","1.6.2","1.6.3","1.6.4","1.6.5","1.6.6","1.6.7","1.6.8","1.6.9","1.6.10","1.6.11","1.6.12","1.6.13","1.7.0","1.7.1","1.7.2","1.7.3","1.7.4","1.7.5","1.7.6","1.7.7","1.7.8","1.7.9"],
    openssl:["0.9.0b","0.9.1b","0.9.1c","0.9.2b","0.9.3","0.9.3a","0.9.4","0.9.5","0.9.5a","0.9.6","0.9.6a","0.9.6b","0.9.6c","0.9.6d","0.9.6e","0.9.6f","0.9.6g","0.9.6h","0.9.6i","0.9.6j","0.9.6k","0.9.6l","0.9.6h","0.9.7","0.9.7a","0.9.7b","0.9.7c","0.9.7d","0.9.7e","0.9.7f","0.9.7g","0.9.7h","0.9.7i","0.9.7j","0.9.7k","0.9.7l","0.9.7h","0.9.8","0.9.8a","0.9.8b","0.9.8c","0.9.8d","0.9.8e","0.9.8f","0.9.8g","0.9.8h","0.9.8i","0.9.8j","0.9.8k","0.9.8l","0.9.8m","0.9.8n","0.9.8o","0.9.8p","0.9.8q","0.9.8r","0.9.8s","0.9.8t","0.9.8u","0.9.8v","0.9.8w","0.9.8x","0.9.8y","0.9.8z","0.9.8za","0.9.8zb","0.9.8zc","0.9.8zd","0.9.8ze","0.9.8zf","0.9.8zg","1.0.0","1.0.0a","1.0.0b","1.0.0c","1.0.0d","1.0.0e","1.0.0f","1.0.0g","1.0.0h","1.0.0i","1.0.0j","1.0.0k","1.0.0l","1.0.0m","1.0.0n","1.0.0o","1.0.0p","1.0.0q","1.0.0r","1.0.0s","1.0.1","1.0.1a","1.0.1b","1.0.1c","1.0.1d","1.0.1e","1.0.1f","1.0.1g","1.0.1h","1.0.1i","1.0.1j","1.0.1k","1.0.1l","1.0.1m","1.0.1n","1.0.1o","1.0.1p","1.0.1q","1.0.1r","1.0.1s","1.0.1t","1.0.1u","1.0.2","1.0.2a","1.0.2b","1.0.2c","1.0.2d","1.0.2e","1.0.2f","1.0.2g","1.0.2h","1.0.2i","1.0.2j","1.0.2k","1.0.2l","1.1.0a","1.1.0b","1.1.0c","1.1.0d","1.1.0e"]
};

var messageTypes = {
    oldOpenSSL: 'TLS v1.1 and v1.2 support is only present in OpenSSL 1.0.1 and newer',
    oldApache: 'TLS v1.1 and v1.2 support is only present in Apache 2.2.23 and newer'
};

$(function() {
    $( document ).tooltip();
});

function getVersionConstrainedDirectives(data) {
    switch (data.server) {
        case "nginx":
            // http://nginx.org/en/docs/http/ngx_http_core_module.html
            if (isSemVer(data.serverVersion, ">=0.7.2")) {
                data.dhparam = '\n    # Diffie-Hellman parameter for DHE ciphersuites, recommended 2048 bits' + '\n' +
                    '    ssl_dhparam /path/to/dhparam.pem;';
            }
            if (isSemVer(data.serverVersion, ">=1.3.7")) {
                data.ocspstapling = '\n    # OCSP Stapling ---' + '\n' +
                    '    # fetch OCSP records from URL in ssl_certificate and cache them' + '\n' +
                    '    ssl_stapling on;' + '\n' +
                    '    ssl_stapling_verify on;' + '\n' +
                    '\n' +
                    '    ## verify chain of trust of OCSP response using Root CA and Intermediate certs' + '\n' +
                    '    ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;';
            }
            if (data.hstsEnabled == "true") {
                data.hsts = '\n    # HSTS (ngx_http_headers_module is required) (15768000 seconds = 6 months)' + '\n' +
                    '    add_header Strict-Transport-Security max-age=15768000;';
            }
            if (isSemVer(data.serverVersion, ">=1.9.5")) {
                data.listen = '    listen 443 ssl http2;\n' +
                    '    listen [::]:443 ssl http2;';
            } else if (isSemVer(data.serverVersion, ">=0.7.14")) {
                data.listen = '    listen 443 ssl;\n' +
                    '    listen [::]:443 ssl;';
            } else {
                data.listen = '    listen 443;' + '\n' +
                    '    listen [::]:443;\n' +
                    '    ssl on;';
            }
            if (isOpenSSLSemVer(data.opensslVersion, ">=0.9.8f") && isSemVer(data.serverVersion, '>=1.5.9')) {
                data.sslSessionTickets = '    ssl_session_tickets off;'
            }
            break;
        case "apache":
            // https://httpd.apache.org/docs/current/mod/mod_ssl.html
            if (isOpenSSLSemVer(data.opensslVersion, ">=0.9.8")) {
                if ((/^2\.2/.test(data.serverVersion) && isSemVer(data.serverVersion, '>=2.2.24')) || isSemVer(data.serverVersion, '>=2.4.3')) {
                    data.compression = 'SSLCompression          off';
                }
            }
            if (isOpenSSLSemVer(data.opensslVersion, ">=0.9.8h") && isSemVer(data.serverVersion, '>=2.3.3')) {
                data.ocspStapling = '\n# OCSP Stapling, only in httpd 2.3.3 and later' + '\n' +
                    'SSLUseStapling          on' + '\n' +
                    'SSLStaplingResponderTimeout 5' + '\n' +
                    'SSLStaplingReturnResponderErrors off';
                data.ocspStaplingCache = 'SSLStaplingCache        shmcb:/var/run/ocsp(128000)' + '\n';

            }
            if (isOpenSSLSemVer(data.opensslVersion, ">=0.9.8f")) {
                if ((/^2\.2/.test(data.serverVersion) && isSemVer(data.serverVersion, '>=2.2.30')) || isSemVer(data.serverVersion, '>=2.4.11')) {
                    data.sslSessionTickets = 'SSLSessionTickets       off';
                }
            }
            if (isSemVer(data.serverVersion, '>=2.4.8')) {
                data.certFile = '    SSLCertificateFile      /path/to/signed_certificate_followed_by_intermediate_certs';
            } else {
                data.certFile = '    SSLCertificateFile      /path/to/signed_certificate\n' +
                    '    SSLCertificateChainFile /path/to/intermediate_certificate';
            }
            if (data.hstsEnabled == "true") {
                data.hsts = '\n    # HSTS (mod_headers is required) (15768000 seconds = 6 months)' + '\n' +
                    '    Header always set Strict-Transport-Security "max-age=15768000"';
            }
            if (isSemVer(data.serverVersion, '>=2.3.16')) {
                data.sslProtocols = data.sslProtocols.replace(' -SSLv2', '');
            }
            break;
        case "haproxy":
            // http://www.haproxy.org/download/1.5/doc/configuration.txt
            if (data.hstsEnabled == "true") {
                data.hsts = '\n    # HSTS (15768000 seconds = 6 months)' + '\n' +
                    '    http-response set-header Strict-Transport-Security max-age=15768000';
            }
            if (isSemVer(data.serverVersion, "<1.5")) {
                data.visibility = 'hidden';
                data.message = "HAProxy didn't support SSL until version 1.5 and newer";
            }
            data.dhparam = true
            break;
        case "lighttpd":
            // http://redmine.lighttpd.net/projects/1/wiki/docs_ssl
            if (data.hstsEnabled == "true") {
                data.hsts = '\n    # HSTS(15768000 seconds = 6 months)\n' +
                    '    setenv.add-response-header  = (\n' +
                    '        "Strict-Transport-Security" => "max-age=15768000;"\n' +
                    '    )';
            }
            if (isSemVer(data.serverVersion, ">=1.4.29")) {
                data.dhparam = '\n    # for DH/DHE ciphers, dhparam should be >= 2048-bit\n' +
                               '    ssl.dh-file               = "/path/to/dhparam.pem"'
            }
            break;
    }
    return data;
}

function includesDHEcipherSuites(suites) {
    function isDHE(suite) {
        return /^DHE/.test(suite);
    }
    return suites.filter(isDHE).length > 0
}

$(document).ready(function() {
    function loadFromQueryString() {
        // http://stackoverflow.com/a/10834119/837015
        var defaults = {
            "server": "apache-2.2.15",
            "openssl": "1.0.1e",
            "hsts": "yes",
            "profile": "intermediate"
        };
        var queries = defaults;
        var search = document.location.search.trim();

        $.each(search.substr(1).split('&'), function(c, q) {
            var i = q.split('=');
            queries[i[0].toString()] = i.length == 2 ? i[1].toString() : "true";
        });

        var server = queries["server"].split("-");

        $("#server-version").val(server[1]);
        $("#openssl-version").val(queries["openssl"]);
        $("input#hsts-enabled").attr("checked", queries["hsts"] === "yes");
        $("div#server-list input#" + server[0]).attr("checked", true);
        $("div#security-profile-list input#" + queries["profile"]).attr("checked", true);
    }

    function toggleProfileAvailability(disableProfileTest, currentProfile, targetProfile, message) {
        profileOrder = ["modern", "intermediate", "old"];
        result = currentProfile;
        if (disableProfileTest) {
            if ($.inArray(message, json[targetProfile].messages) == -1) {
                json[targetProfile].messages.push(message);
            }
            if ($("#security-profile-list input#" + targetProfile).prop("disabled") == false) {
                $("#security-profile-list input#" + targetProfile).prop("disabled", true);
                if (currentProfile == targetProfile) {
                    fallbackProfile = profileOrder[(profileOrder.indexOf(targetProfile) + 1 < profileOrder.length ?
                        profileOrder.indexOf(targetProfile) + 1 :
                        0)];
                    $("#security-profile-list input#" + fallbackProfile).prop("checked", true);
                    result = fallbackProfile;
                }
            }
        } else {
            if ($.inArray(message, json[targetProfile].messages) != -1) {
                json[targetProfile].messages.splice(json[targetProfile].messages.indexOf(message), 1);
            }
        }
        if (json[targetProfile].messages.length == 0) {
            $("#security-profile-list input#" + targetProfile).prop("disabled", false);
            $("#security-profile-list label[for=" + targetProfile + "]").removeAttr("title");
        } else {
            $("#security-profile-list label[for=" + targetProfile + "]").attr("title", json[targetProfile].messages.join(" "));
        }
        return result;
    }

    function renderConfig(change_software) {
        // Update Server version input w/ latest version in versions[] array when changing software
        var software = $("div#server-list input:radio:checked").val();
        if (change_software === true && typeof versions[software] !== "undefined") {
            $("#server-version").val(versions[software][versions[software].length-1]);
        }

        var data = {
            serverVersion: $("#server-version").val(),
            opensslVersion: $("#openssl-version").val(),
            hstsEnabled: $("input#hsts-enabled:checkbox:checked").val(),
            server: software,
            securityProfile: $("div#security-profile-list input:radio:checked").val()
        };

        var source = $("#" + data.server + "-template").html();
        var template = Handlebars.compile(source);
        data.visibility = "visible";

        // define profile dependent values
        jQuery.extend(data, {
            sslProtocols: json[data.securityProfile].tls_versions,
            cipherSuites: json[data.securityProfile].ciphersuites,
            maxDHKeySize: json[data.securityProfile].dh_param_size,
            clientList: json[data.securityProfile].oldest_clients
        });

        // define version dependent values
        jQuery.extend(data, getVersionConstrainedDirectives(data));

        // define server dependent values
        data["elbJson"] = "Fetching JSON...";
        if (data.server == "elb") {
            $.getJSON("blank-elb-cloudformation-template.json")
            .done( function( elbTemplate ) {
                var elbMozillaPolicyVersion = "2015-03";
                var elbPolicyName = "Mozilla-" + data.securityProfile + "-" + elbMozillaPolicyVersion;
                elbTemplate["Description"] = "Example ELB with Mozilla recommended ciphersuite";
                elbTemplate["Resources"]["ExampleELB"]["Properties"]["Listeners"][0]["PolicyNames"] = [
                    elbPolicyName
                ];
                elbTemplate["Resources"]["ExampleELB"]["Properties"]["Policies"] = [
                    {
                      "PolicyName": elbPolicyName,
                      "PolicyType": "SSLNegotiationPolicyType",
                      "Attributes": $.map( json[data.securityProfile]["elbPolicy"], function (n) {
                          return {"Name": n,"Value":true };
                      })
                    }
                ];
                data["elbJson"] = JSON.stringify(elbTemplate, undefined, 4);
                $("#server-config-text").html(template(data));
            })
            .fail( function( elbTemplate) {
                console.log("JSON fetch failed: " + JSON.stringify(elbTemplate));
            });
        }

        // clear the dhparam config for server configs not using DHE
        if (!includesDHEcipherSuites(data.cipherSuites)) {
            data.dhparam = ''
        }

        // catch invalid version profile combinations
        data.securityProfile = toggleProfileAvailability(
            isOpenSSLSemVer(data.opensslVersion, "<1.0.1") && data.server != "elb",
            data.securityProfile,
            "modern",
            messageTypes.oldOpenSSL);

        data.securityProfile = toggleProfileAvailability(
            data.server == "apache" && isSemVer(data.serverVersion, "<2.2.23"),
            data.securityProfile,
            "modern",
            messageTypes.oldApache);

        $( "#server-version" ).autocomplete({
            source: versions[data.server]
        });

        // create a permalink
        jQuery.extend(data, {
            queryString: $.param({
                server: data.server + "-" + data.serverVersion,
                openssl: data.opensslVersion,
                hsts: data.hstsEnabled ? "yes" : "no",
                profile: data.securityProfile
            })
        });

        $("#server-config-text").html(template(data));
    }

    $("ul#security-profile-list li button").click(function() {
        securityProfile = $(this).text();
        renderConfig(false);
    });
    $("input:radio").change(function() {
        renderConfig(true);
    });
    $("input:checkbox, input:text").change(function() {
        renderConfig(false);
    });
    $( "#openssl-version" ).autocomplete({
        source: versions["openssl"]
    });
    loadFromQueryString();
    renderConfig(false);
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-66267220-1', 'auto');
    ga('send', 'pageview');
