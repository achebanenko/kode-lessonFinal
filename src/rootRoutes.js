import * as React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { paths } from '@shared/router'
import { HomeContainer } from '@features/home'
import {
  SignInContainer,
  SignUpContainer,
  ConfirmContainer,
} from '@features/profile'

export const RootRoutes = withRouter(({ location }) => {
  const { key } = location
  const timeout = { enter: 300, exit: 200 }

  return (
    <TransitionGroup>
      <CSSTransition 
        key={key} 
        timeout={timeout} 
        classNames="route-slide"
      >
        <div className="layout-fixed">
          <Switch location={location}>
            <Route component={HomeContainer} path={paths.home} exact />
            <Route component={SignInContainer} path={paths.profile.signIn} exact />

            <Route component={SignUpContainer} path={paths.profile.signUp} exact />
            <Route component={ConfirmContainer} path={paths.profile.confirm} exact />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )}
)