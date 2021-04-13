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

const AppRouter = () => {
    return (
        <>
            <Container>
                <Router>
                    <Route
                        path='/summoners/:username'
                        component={pages.SummonerPageBase}
                        />
                    <Route
                        path='/summoners/:username/most'
                        component={pages.SummonerMostPage}
                        />
                </Router>
            </Container>
            {/* LoadingIndicatorOverlay */}
        </>
    );
}

export default AppRouter;
