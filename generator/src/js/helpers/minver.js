import normalizever from './normalizever.js';
import { gte } from 'semver';

export default (minver, curver) => {
  return gte(normalizever(curver), normalizever(minver));
};
