const moment = require.requireActual('moment')//Requiring the actual module

export default (timestamp = 0) => {
    return moment(timestamp);
}