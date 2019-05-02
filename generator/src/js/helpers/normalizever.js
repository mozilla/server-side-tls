import { coerce } from 'semver';

export default (version) => {
  const letterRE = /([abcdefghijlmnopqrstuvwxyz]+$)/;

  // convert to string, just in case
  version = String(version);

  // get the prerelease tag
  const prerelease = version.match(letterRE) !== null ? `-${version.match(letterRE)[0]}` : '';

  // no
  // get the 
  // get the number of subversions, e.g. 1.0.1 = 2
  // const subversions = version.match(/\./g) === null ? 0 : version.match(/\./g).length;

  // // normalize based on the number of subversions
  // if (subversions === 0) {
  //   version = `${version}.0.0`;  // 1 --> 1.0.0
  // } else if (subversions === 1) {
  //   version = `${version.split('.')[0]}.0.${version.split('.')[1]}`;  // 1.1e --> 1.0.1e
  // }

  // // replace letter versions with semantic version, eg 1.0.1e --> 1.0.1-e
  // version = version.split(letterRE, 2).join('-');

  // return version;
  return `${coerce(version).version}${prerelease}`;
};
