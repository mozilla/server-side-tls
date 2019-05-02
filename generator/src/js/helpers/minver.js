import normalizever from './normalizever.js';
import { gte } from 'semver';

export default (minimumver, curver) => {
  return gte(normalizever(curver), normalizever(minimumver));
};
