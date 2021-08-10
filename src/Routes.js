import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { Main, Result, Filters } from './pages'
import Nav from 'components/Nav/Nav'
import store from './store'
import ROUTES from 'utils/routerPath'

function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className="absolute w-full" style={props}>
      <Nav />
      <Switch location={location}>
        <Route exact path={ROUTES.HOME} component={Main} />
        <Route exact path={ROUTES.RESULT} component={Result} />
        <Route exact path={ROUTES.FILTERS} component={Filters} />
        <Redirect path="*" to="/" />
      </Switch>
    </animated.div>
  ))
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.wrapper}>
          <Routes />
        </div>
      </Router>
    </Provider>
  )
}

const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto'
}

export default App
