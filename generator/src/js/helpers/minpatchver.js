import minver from './minver.js';
import sameminorver from './sameminorver.js';
import normalizever from './normalizever.js';

// returns true if it means the minimum patch version *and* is the same minor version (e.g. 2.2)
export default (minimumver, curver) => {
  // normalize the versions prior to comparison
  minimumver = normalizever(minimumver);
  curver = normalizever(curver);

  if (sameminorver(minimumver, curver) && minver(minimumver, curver)) {
    return true;
  }

  return false;
};
