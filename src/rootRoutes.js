import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { paths } from '@shared/router'
import { HomeContainer } from '@features/home'
import {
  SignInContainer,
  SignUpContainer,
  ConfirmContainer,
} from '@features/profile'

export const RootRoutes = () => (
  <Switch>
    <Route component={HomeContainer} path={paths.home} exact />
    <Route component={SignInContainer} path={paths.profile.signIn} exact />
    <Route component={SignUpContainer} path={paths.profile.signUp} exact />
    <Route component={ConfirmContainer} path={paths.profile.confirm} exact />
  </Switch>
)
