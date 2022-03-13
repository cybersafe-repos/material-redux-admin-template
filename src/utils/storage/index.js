// Session  ============================================================================================================
export function setSession(session) {
  removeSession()
  localStorage.setItem('session', JSON.stringify(session))
}

export function getSession() {
  let session = localStorage.getItem('session')
  return session ? JSON.parse(session) : session
}

export function removeSession() {
  localStorage.removeItem('session')
}
// /Session  ===========================================================================================================
