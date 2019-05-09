import $ from 'jquery';
import 'bootstrap';
import ClipboardJS from 'clipboard';
import { sep } from 'path';

// Import only the used highlights from highlight.js (saves about 1MB)
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/highlight';
import apache from 'highlight.js/lib/languages/apache';
import json from 'highlight.js/lib/languages/json';
import nginx from 'highlight.js/lib/languages/nginx';
hljs.registerLanguage('apache', apache);
hljs.registerLanguage('json', json);
hljs.registerLanguage('nginx', nginx);

import '../css/index.scss';

import profiles from './profiles.js';
import state from './state.js';
import { sleep } from './utils.js';


// import all the templates by name, e.g. apache --> require(apache.hbs)
const templates = {};
const templateContext = require.context('../templates/partials', true, /\.hbs$/);
templateContext.keys().forEach(key => {
  templates[key.split(sep).slice(-1)[0].split('.')[0]] = templateContext(key);
});


const render = async () => {
  const _state = await state();

  // render the output header
  document.getElementById('output-header').innerHTML = templates.header(_state);

  // and the config file for whichever server software we're using
  const renderedTemplate = templates[_state.form.server](_state);
  
  // syntax highlight and enter into the page
  const highlighter = profiles[_state.form.server].highlighter;

  document.getElementById('output-config').innerHTML = hljs.highlight(highlighter, renderedTemplate, true).value;
};



// set a listen on the form to update the state
$().ready(() => {
  // update the global state with the default values
  render();

  // update state anytime the form is changed
  $('#form-config, #form-environment').on('change', async () => {
    render();
  });

  // anytime the server changes, so does the server version
  $('#form-server').on('change', async () => {
    const _state = await state();
    $('#server-version').val(_state.output.latestVersion);
    render();
  });

  // instantiate tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // instantiate clipboard thingie
  const clipboard = new ClipboardJS('#copy');
  clipboard.on('success', async e => {
    $('#copy').tooltip('show');
    e.clearSelection();
    await sleep(750);
    $('#copy').tooltip('hide');
  });
});