/**
 *
 * Asynchronously loads the component for GridTest
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
