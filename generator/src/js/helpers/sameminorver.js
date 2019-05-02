import normalizever from './normalizever.js';
import { diff } from 'semver';

export default (minorver, curver) => {
  // add a fake patch level to the minor version, and then send to the normalizer
  minorver = normalizever(minorver);
  curver = normalizever(curver);

  const versionDiff = diff(minorver, curver);

  if (versionDiff === 'patch' || versionDiff === null) {
    return true;
  }

  return false;
};
