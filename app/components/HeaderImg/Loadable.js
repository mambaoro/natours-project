/**
 *
 * Asynchronously loads the component for HeaderImg
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
