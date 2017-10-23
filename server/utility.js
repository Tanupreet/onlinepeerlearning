//requiring api for compiling and running the code
const vm = require('vm');

//method to compile and run the code
function add(script) {

    const scriptCode = new vm.Script(script);
    const context = new vm.createContext();
    return scriptCode.runInContext(context);

}

//exporting the module
module.exports = {
    add: add
};