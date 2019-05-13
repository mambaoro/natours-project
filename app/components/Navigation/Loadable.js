/**
 *
 * Asynchronously loads the component for Navigation
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
