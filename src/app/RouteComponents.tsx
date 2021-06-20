import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingLayout } from './components/atoms/LoadingLayout';
import { DefaultRedirect } from './pages/DefaultRedirect';

const Home = React.lazy(() => import('./pages/home/Home'))
const Issues = React.lazy(() => import('./pages/issues/Issues'))
const IssueDetails = React.lazy(() => import('./pages/issue-details/IssueDetails'))

export const RouteComponents = () => {
    return (
        <Suspense fallback={<LoadingLayout />}>
            <Switch>
                <Route path="/:owner/:repo/issues/:id" component={IssueDetails} />
                <Route path="/:owner/:repo/issues" component={Issues} />
                <Route path="/:owner/:repo" component={Home} />
                <Route path="/:owner" component={Home} />
                <Route path="/" exact component={DefaultRedirect} />
            </Switch>
        </Suspense>
    )
}
