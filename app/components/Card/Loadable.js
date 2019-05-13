/**
 *
 * Asynchronously loads the component for Card
 *
 */

import loadable from '@loadable/component';

export default loadable(() => import('./index'));
