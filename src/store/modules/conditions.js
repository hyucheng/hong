export const conditions = {
  SET_QUERYCONDITIONS: (state, active) => {
    state.queryconditions = {
      ...state.queryconditions,
      ...active
    }
  }
};