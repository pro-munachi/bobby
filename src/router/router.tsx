import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/skills';
import NoMatch from './noMatch';
import ScrollToTop from './scrollToTop';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route component={NoMatch} />
                        </Switch>
                </ScrollToTop>
            </React.Fragment>
        );
    }
}

export default ReactRouter;