import { connect } from 'react-redux'
import { Home } from '../pages'
import { routerActions, paths } from '@shared/router'

const mapDispatchToProps = dispatch => ({
  goProfileFlow: () =>
    dispatch(routerActions.pushTrigger({ path: paths.profile.signIn })),
})

export const HomeContainer = connect(
  null,
  mapDispatchToProps,
)(Home)
