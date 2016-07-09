const initialState = {
  loading: false,
  data: [],
};

function networks(state = initialState, action) {
  switch (action.type) {
    case 'NETWORKS_FETCH_REQUESTED':
      return {
        loading: true,
        data: state.data,
      }
    case 'NETWORKS_FETCH_SUCCEEDED':
      return {
        loading: false,
        data: action.networks,
      };
    case 'NETWORKS_FETCH_FAILED':
      return {
        loading: false,
        data: [],
      };
    default:
      return state;
  }
}

export default networks;
