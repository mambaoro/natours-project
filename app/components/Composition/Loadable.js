/**
 *
 * Asynchronously loads the component for Composition
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
