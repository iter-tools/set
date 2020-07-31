const Set = require('../set.cjs');

function* wrap(array) {
  yield* array;
}

describe('Set', () => {
  it('is iterable', () => {
    expect([...new Set()]).toEqual([]);
  });

  it('can be constructed with initial values', () => {
    expect([...new Set(wrap([1, 2, 3]))]).toEqual([1, 2, 3]);
  });

  it('has a size property', () => {
    expect(new Set(wrap([1, 2, 3])).size).toBe(3);
  });

  it('can clear values', () => {
    const s = new Set([1, 2, 3]);
    s.clear();
    expect([...s]).toEqual([]);
  });

  it('can add values', () => {
    const s = new Set(['foo']);
    s.add('bar');
    expect([...s]).toEqual(['foo', 'bar']);
  });

  it('can haz values', () => {
    expect(new Set(['foo']).has('foo')).toBe(true);
  });

  it('can delete values', () => {
    const s = new Set(['foo']);
    s.delete('foo');
    expect([...s]).toEqual([]);
  });

  it('has a forEach method', () => {
    const cb = jest.fn();

    const s = new Set([1, 2, 3]);

    s.forEach(cb);

    expect(cb.mock.calls).toEqual([
      [1, 1, s],
      [2, 2, s],
      [3, 3, s],
    ]);
  });

  it('forEach may receive a thisArg for cb', () => {
    const thisArg = {};
    const makeCb = (thisArg) =>
      function cb() {
        expect(this).toBe(thisArg);
      };

    new Set([null]).forEach(makeCb(thisArg), thisArg);
    new Set([null]).forEach(makeCb(window), null);
    new Set([null]).forEach(makeCb(window), undefined);

    expect.assertions(3);
  });

  it("flags sets using Symbol.for('@iter-tools/set')", () => {
    expect(new Set()[Symbol.for('@iter-tools/set')]).toBe(true);
  });

  it('can detect sets with isSet', () => {
    expect(Set.isSet(new Set())).toBe(true);
  });

  it('has a keys iterator', () => {
    expect([...new Set([]).keys()]).toEqual([]);
    expect([...new Set([1, 2, 3]).keys()]).toEqual([1, 2, 3]);
  });

  it('has a values iterator', () => {
    expect([...new Set([]).values()]).toEqual([]);
    expect([...new Set([1, 2, 3]).values()]).toEqual([1, 2, 3]);
  });

  it('has an entries iterator', () => {
    expect([...new Set([]).entries()]).toEqual([]);
    expect([...new Set([1, 2, 3]).entries()]).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
  });
});
