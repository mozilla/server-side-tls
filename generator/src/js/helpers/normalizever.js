import { coerce } from 'semver';

export default (version) => {
  const letterRE = /([abcdefghijlmnopqrstuvwxyz]+$)/;

  // convert to string, just in case
  version = String(version);

  // get the prerelease tag
  const prerelease = version.match(letterRE) !== null ? `-${version.match(letterRE)[0]}` : '';

  // return version;
  return `${coerce(version).version}${prerelease}`;
};
