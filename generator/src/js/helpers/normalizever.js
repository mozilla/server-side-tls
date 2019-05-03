import { coerce } from 'semver';

export default (version) => {
  const letterRE = /([abcdefghijlmnopqrstuvwxyz]+$)/;
  let prerelease = '';

  // convert to string, just in case
  version = String(version);

  // if we have a four digit version, e.g. 1.1.1.1
  if (version.split('.').length > 3) {
    prerelease = `-${version.split('.').splice(3).join('.')}`;
  } else {
    prerelease = version.match(letterRE) !== null ? `-${version.match(letterRE)[0]}` : '';
  }

  // return version;
  return `${coerce(version).version}${prerelease}`;
};
