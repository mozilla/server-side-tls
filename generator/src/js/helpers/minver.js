import normalizever from './normalizever.js';
import { diff, gte, parse } from 'semver';

export default (minimumver, curver) => {
  // normalize the versions
  minimumver = parse(normalizever(minimumver));
  curver = parse(normalizever(curver));

  // we do "prerelease" comparisons a bit differently than semver does
  if (diff(minimumver, curver) === 'prerelease') {
    // if the minimum version doesn't have a prerelease tag, we simply return true,
    // e.g. 0.9.8h is always greater than 0.9.8
    if (minimumver.prerelease.length === 0) {
      return true;
    }

    // if it's a number, we compare numbers
    if (parseInt(minimumver.prerelease[0]) && parseInt(curver.prerelease[0])) {
      return parseInt(curver.prerelease[0]) > parseInt(minimumver.prerelease[0]);
    }

    // otherwise, we just compare strings
    return curver.prerelease[0] > minimumver.prerelease[0];
  }

  return gte(curver, minimumver);
};
