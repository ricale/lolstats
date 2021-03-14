import { History } from 'history';
import { connectRouter } from 'connected-react-router';

export default function getRouterReducer(history: History<{}>) {
    return connectRouter(history);
}
