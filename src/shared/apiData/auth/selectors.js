export const getUdid = state => state.apiData.auth.udid
export const getToken = state => state.apiData.auth.token
export const getRefreshToken = state => state.apiData.auth.refresh_token
export const getLastUpdate = state => state.apiData.auth.lastUpdate
export const getIsNeedUpdate = state => state.apiData.auth.lastUpdate === null

export const getAttempt = state => ({
  attemptId: state.apiData.auth.attemptId, 
  login: state.apiData.auth.login,
  channel: state.apiData.auth.channel,
})
export const getId = state => state.apiData.auth.id