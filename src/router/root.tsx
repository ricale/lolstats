import * as React from 'react';
import { Location } from 'history';
import {
    HashRouter as Router,
    Route,
    Switch,
    useLocation,
} from 'react-router-dom';

import * as pages from 'pages';
import styled from 'themes';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    height: 100%;

    background-color: ${p => p.theme.colors.colorBackground};
`;

const AppRouterSwitch = () => {
    // const location = useLocation<Location>();
    return (
        <Switch>
            <Route path='/summoners/:username' component={pages.SummonerDetailPage} />
        </Switch>
    )
}

const AppRouter = () => {
    return (
        <>
            <Container>
                <Router>
                    <AppRouterSwitch />
                </Router>
            </Container>
            {/* LoadingIndicatorOverlay */}
        </>
    );
}

export default AppRouter;
