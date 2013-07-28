var push = (function(module) {
    module.do = function(resultObject) {
        resultObject.prepend(Date() + '<br/>');
    };
    return module;
}(push || {}))