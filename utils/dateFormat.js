const day = require('dayjs');

const dateFormat = function(date) {
    return `${day(date).format('MMM D, YYYY')} at ${day(date).format('h:mm a')}`;
} 

module.exports = dateFormat;