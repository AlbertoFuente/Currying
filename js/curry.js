(function() {
    'use strict';
    var curryFn = {};
    /* First we need the curry function
        expects a function as its argument
        */
    curryFn.curry = function(fn) {
        // Variable with the arguments length
        argsLength = fn.length;

        return (function resolver() {
            // variable with the copy of the arguments received
            var argsReceived = Array.prototype.slice.call(arguments);
            // return function
            return function() {
                // argsReceived copy
                var localArgs = argsReceived.slice();
                Array.prototype.push.apply(localArgs, arguments);
                // compare the length of arguments we’ve received with the argsLength of our curried function
                var next = localArgs.length >= argsLength ? fn : resolver;
                return next.apply(null, localArgs);
            };
        }());
    };

    return curryFn;
}());
