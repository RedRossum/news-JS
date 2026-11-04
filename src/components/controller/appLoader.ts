import Loader from './loader';

import { RequestOptions } from './loader';

class AppLoader extends Loader {
    constructor() {

        const apiLink: string = process.env.API_URL || 'https://onrender.com';

        const apiOptions: RequestOptions = {
            apiKey: process.env.API_KEY || '',
        };

        super(apiLink, apiOptions);
    }
}

export default AppLoader;
