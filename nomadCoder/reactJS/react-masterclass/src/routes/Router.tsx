import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'; //switch는한번의 하나의 route를 렌더링할수있는방법

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId' />
        <Coins />
        </Route>
        <Route path='/' >
          <Coins />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
