const fs = require('fs');
const lessToJs = require('less-vars-to-js');

function lessVarsToJs(filename) {
    if (!fs.existsSync(filename)) return {};
    const content = fs.readFileSync(filename, 'utf8');
    return lessToJs(content);
}

module.exports = {
    lessVarsToJs,
};
