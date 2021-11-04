export const gistsSelector = (state) => ({
    gists: state.gists.gists,
    error: state.gists.error,
    loading: state.gists.loading,
});
