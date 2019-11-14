export const signInSuccess = user => ({
  type: "SIGN_IN_SUCCESS",
  payload: user
  // { id: "ID", createdAt: {…}, displayName: "DN", email: "EM" }
});

export const signInFail = message => ({
  type: "SIGN_IN_FAIL",
  payload: message
});

export const googleSignInStart = () => ({
  type: "GOOGLE_SIGN_IN_START"
});

export const emailSignInStart = emailAndPassword => ({
  type: "EMAIL_SIGN_IN_START",
  payload: emailAndPassword
});

export const signOutStart = () => ({
  type: "SIGN_OUT_START"
});

export const signOutSuccess = () => ({
  type: "SIGN_OUT_SUCCESS"
});
