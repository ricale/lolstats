import { Schema } from './types';
import factoryUrlGetter from './factoryUrlGetter';

const API_HOST = 'http://localhost:8030/v1/';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
const f = (method: RequestMethod, url: string): Schema => ({
    method,
    urlGetter: factoryUrlGetter(`${API_HOST}${url}`),
});

const p = (name: string) => `<%= ${name} %>`;
const qs = (...names: string[]) => `<%= q(${names.join(',')}) %>`;

const schema = {
    GET_SUMMONER:       f('GET', `summoners/${p('username')}`),
    GET_SUMMONER_ENTRY: f('GET', `summoners/entries/${p('userId')}`),

    GET_SUMMONER_STATISTICS: f('GET', `statistics/${p('accountId')}${qs('queue')}`),
};

export default schema;