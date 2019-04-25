import { connect } from 'react-redux'
import { Home } from '../pages'
import { routerActions, paths } from '@shared/router'
import { apiDataSelectors } from '@shared/apiData'

const mapStateToProps = state => ({
  profileId: apiDataSelectors.auth.getId(state),
})

const mapDispatchToProps = dispatch => ({
  goProfileFlow: () => dispatch(routerActions.pushTrigger({ path: paths.profile.signIn })),
})

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
