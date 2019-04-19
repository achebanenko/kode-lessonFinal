export const getUdid = state => state.apiData.auth.udid
export const getToken = state => state.apiData.auth.token
export const getRefreshToken = state => state.apiData.auth.refresh_token
export const getLastUpdate = state => state.apiData.auth.lastUpdate
export const getIsNeedUpdate = state => state.apiData.auth.lastUpdate === null
