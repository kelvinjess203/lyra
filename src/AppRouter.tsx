import React, { lazy, useEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import PageLoader from "./components/PageLoader";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import { ROUTES } from "./config/routes";
import ModalsProvider from "./contexts/Modals";

const MainLayout = lazy(() => import("./layouts/MainLayout"));

const Trade = lazy(() => import("./views/Trade"));
const TradeDetails = lazy(() => import("./views/TradeDetails"));
const Portfolio = lazy(() => import("./views/Portfolio"));

const TradeRewards = lazy(() => import("./views/TradeRewards"));
const History = lazy(() => import("./views/History"));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <HistoryEvent />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <RouteWithLayout path={`/`} component={MainRouter} layout={null} />
          </Switch>
        </SuspenseWithChunkError>
      </ModalsProvider>
    </BrowserRouter>
  );
};

const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        <RouteWithLayout
          exact
          path={`${ROUTES.TRADE}`}
          component={Trade}
          layout={MainLayout}
        />

        <RouteWithLayout
          exact
          path={`${ROUTES.TRADE}/btc/call`}
          component={TradeDetails}
          layout={MainLayout}
        />

        <RouteWithLayout
          exact
          path={`${ROUTES.TRADE_POSITIONS}`}
          component={Portfolio}
          layout={MainLayout}
        />

        <RouteWithLayout
          exact
          path={`${ROUTES.TRADE_REWARDS}`}
          component={TradeRewards}
          layout={MainLayout}
        />

        <RouteWithLayout
          exact
          path={`${ROUTES.TRADE_HISTORY}`}
          component={History}
          layout={MainLayout}
        />

        <Route path="/">
          <Redirect to={ROUTES.TRADE} />
        </Route>
      </Switch>
    </>
  );
};

const RouteWithLayout = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (Layout) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const HistoryEvent = withRouter(({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
});

export default AppRouter;
