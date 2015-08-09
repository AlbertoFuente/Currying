describe('Testing curry functions', function() {
    it('Our function returns simple multiplication', function() {
        function volume(l, w, h) {
            return l * w * h;
        }
        var curried = curryFn.curry(volume);
        expect(curried(1)(2)(3)).toBe(6);
    });
});
