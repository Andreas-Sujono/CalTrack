import { actionTypes } from '../../constants/auth/general.constant';

// state that is shared by every features
const initialState = {
  username: '',
  email: '',
  token: '',

  // message that is shared across the features, shows like a notif
  message: {
    type: '', // success, warning, or error
    isShown: false,
    text: '',
  },
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET:
      return { ...state, [action.payload.key]: action.payload.value };
    case actionTypes.RESET:
      return initialState;
    case actionTypes.RESET_SET:
      return { ...initialState, ...action.payload.updatedState };
    default:
      return state;
  }
};

export default reducer