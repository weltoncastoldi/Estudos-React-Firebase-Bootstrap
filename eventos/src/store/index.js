import { createStore  } from 'react-redux';
import UsuarioReducer from './usuarioReducer';

const store = createStore(usuarioReducer);

export default store;