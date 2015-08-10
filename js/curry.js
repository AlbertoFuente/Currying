    /**
     * First we need the curry function inside the prototype of Function Class
     * @return {[type]} [description]
     */
    Function.prototype.curry = function() {
        // Variable with the arguments length
        var argsLength = this.length,
            self = this;

        return (function resolver() {
            // variable with the copy of the arguments received
            var argsReceived = Array.prototype.slice.call(arguments);
            // return function
            return function() {
                // argsReceived copy
                var localArgs = argsReceived.slice();
                Array.prototype.push.apply(localArgs, arguments);
                // compare the length of arguments we’ve received with the argsLength of our curried function
                var next = localArgs.length >= argsLength ? self : resolver;
                return next.apply(null, localArgs);
            };
        }());
    };
