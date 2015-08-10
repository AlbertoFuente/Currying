describe('Testing curry functions', function() {

    it('Our function returns simple string', function() {
        function formString(a, b, c) {
            return a + ' ' + b + ' ' + c;
        }
        var curried = formString.curry();

        expect(curried('Hello')('cruel')('world')).toEqual('Hello cruel world');
    });

    it('Our function returns simple multiplication', function() {
        function volume(l, w, h) {
            return l * w * h;
        }
        var curried = volume.curry();

        expect(curried(1)(2)(3)).toBe(6);
        expect(curried(0)(1)(2)).toBe(0);
        expect(curried(1)(2)(0)).toBe(0);
        expect(curried(1)(2)('hello')).toBeNaN();
    });

    it('Our function return numbers sequence betwen numbers', function() {
        function writeSeq(start, end, omit) {
            var seq = [],
                i = start;
            if (start < end) {
                for (i; i < end; ++i) {
                    if (i !== omit) {
                        seq.push(i);
                    }
                }
            } else {
                for (i; i > end; --i) {
                    if (i !== omit) {
                        seq.push(i);
                    }
                }
            }
            return seq;
        }
        var curried = writeSeq.curry();

        expect(curried(0)(10)(56)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(curried(0)(5)(3)).toEqual([0, 1, 2, 4]);
        expect(curried(7)(3)(2)).toEqual([7, 6, 5, 4]);
        expect(curried(7)(3)(5)).toEqual([7, 6, 4]);
    });

    it('Our function return a find the word function inserted in the last parameter', function() {
        function findWord(phrase, word) {
            var result = false,
                wordToFind = word || undefined;
            if (wordToFind && phrase.indexOf(word) > -1) {
                result = true;
            }
            return result;
        }
        var curried = findWord.curry();

        expect(curried('Hello cruel world')('world')).toBe(true);
        expect(curried('Hello cruel world')(undefined)).toBe(false);
    });

    it('Our function return a standard set of functions for converting units of measures', function() {
        function makeConverter(toUnit, factor, offset) {
            offset = offset || 0;
            return function(input) {
                return [((offset + input) * factor).toFixed(2), toUnit].join(' ');
            };
        }
        var milesToKm = makeConverter('km', 1.60936).curry(),
            poundsToKg = makeConverter('kg', 0.45460).curry(),
            farenheitToCelsius = makeConverter('degrees C', 0.5556, -32).curry();

        expect(milesToKm(10)).toBe('16.09 km');
        expect(poundsToKg(2.5)).toBe('1.14 kg');
        expect(farenheitToCelsius(98)).toBe('36.67 degrees C');
    });
});
