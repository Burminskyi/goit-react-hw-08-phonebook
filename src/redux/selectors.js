// -------AUTH--------
export const selectIsLoadingStatus = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectUserData = state => state.auth.userData;
export const selectToken = state => state.auth.token;
export const selectAuthentificationStatus = state =>
  state.auth.isAuthentificated;
// -------CONTACTS--------
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
