import { isDevelopment } from './node_env';

export const apiHost = isDevelopment ? 'https://localhost:44386/' : document.location.origin + '/';