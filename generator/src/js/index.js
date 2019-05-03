import $ from 'jquery';
import 'bootstrap';

// TODO: only import necessary highlight.js modules
import hljs from 'highlight.js';

import '../css/index.scss';

import profiles from './profiles.js';
import state from './state.js';



// TODO: have webpack do this based on directory contents
const templates = {
  apache: require('../templates/partials/apache.hbs'),
  header: require('../templates/partials/header.hbs'),
  nginx: require('../templates/partials/nginx.hbs'),
};


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
});