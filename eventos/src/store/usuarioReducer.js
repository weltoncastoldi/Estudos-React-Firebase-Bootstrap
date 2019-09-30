const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0
};

function usuarioReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'LOG_IN':
                return{... state, usuarioLogado = 1, usuarioEmail: action.usuarioEmail}
            break;
            case 'LOG_OUT':
                return{... state, usuarioLogado = 0, usuarioEmail: ''}
            break;
        default:
            break;
    }
}