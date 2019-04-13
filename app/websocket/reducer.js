import Immutable from 'seamless-immutable';

// Action types pushed over socket
export const HYDRATE_CHANNELS = 'HYDRATE_CHANNELS';
export const START_UPDATE = 'START_UPDATE';
export const ODDS_UPDATE = 'ODDS_UPDATE';
export const GAME_PERCENT_UPDATE = 'GAME_PERCENT_UPDATE';
export const RESULT_UPDATE = 'RESULT_UPDATE';
export const ROUND_UPDATE = 'ROUND_UPDATE';

export const hydrateAction = data => ({
  type: HYDRATE_CHANNELS,
  data,
});

const initialState = Immutable({
  hydrateChannels: [], // Channels collected in the server render phase to be subscribed in the client
  roundUpdates: {},
  startUpdates: {},
  resultUpdates: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_CHANNELS:
      return state.setIn(['hydrateChannels'], action.data);
    case START_UPDATE:
    case ODDS_UPDATE:
    case GAME_PERCENT_UPDATE: {
      const path = [
        'startUpdates',
        action.type === START_UPDATE ? action.data.id : action.data.start_id,
      ];
      const current = state.getIn(path);
      const change = [action];
      return state.setIn(
        path,
        current != null ? current.concat(change) : change,
      );
    }

    case RESULT_UPDATE: {
      const path = ['resultUpdates', action.data.id];
      const current = state.getIn(path);
      const change = [action];
      return state.setIn(
        path,
        current != null ? current.concat(change) : change,
      );
    }

    case ROUND_UPDATE:
      return state.setIn(['roundUpdates', action.data.id], action.data);

    default:
      return state;
  }
};

export const hydrateSelector = state => state.updates.hydrateChannels;
export const roundUpdatesSelector = state => state.updates.roundUpdates;
export const startUpdatesSelector = state => state.updates.startUpdates;
export const resultUpdatesSelector = state => state.updates.resultUpdates;