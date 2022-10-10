
let defaultState = {
    inputStatus: false
};

const reducer = (state = defaultState, action) => {
    const { type, data } = action;
    switch (type) {
        case "UPDATE_INPUT_STATUS_ACTION":
            return {
                ...state,
                inputStatus: data
            };
        default:
            break;
    }
}

export default reducer;

