import { strLocal } from '../src'

test('storage  single set & get', () => {
  // boolean
  strLocal.set('flg', true)
  expect(strLocal.get('flg')).toBe(true)

  // number
  strLocal.set('num', 1)
  expect(strLocal.get('num')).toBe(1)

  // array
  strLocal.set('arr', [1, true, 'str', null, [1, 2], { a: 1 }])
  expect(strLocal.get('arr')).toStrictEqual([
    1,
    true,
    'str',
    null,
    [1, 2],
    { a: 1 }
  ])

  // object
  strLocal.set('obj', {
    a: 1,
    b: false,
    c: 'str',
    d: null,
    e: [1, 2, true],
    f: { a: 1 }
  })
  expect(strLocal.get('obj')).toStrictEqual({
    a: 1,
    b: false,
    c: 'str',
    d: null,
    e: [1, 2, true],
    f: { a: 1 }
  })
})

test('storage  undefined get key', () => {
  expect(strLocal.get('data')).toBe(null)
})

test('storage  set pipe', () => {
  strLocal.set('data', [1, 2, 3]).set('flg', false)

  expect(strLocal.get('data')).toStrictEqual([1, 2, 3])
  expect(strLocal.get('flg')).toBe(false)
})

test('storage  remove item', () => {
  strLocal.set('data', 1)
  strLocal.remove('data')

  expect(strLocal.get('data')).toBe(null)
})

test('storage  remove item pipe', () => {
  strLocal.set('data', { a: 1 }).set('flg', false)
  strLocal.remove('data').remove('flg')

  expect(strLocal.get('data')).toBe(null)
  expect(strLocal.get('flg')).toBe(null)
})

test('storage  remove & set pipe', () => {
  strLocal
    .set('data', { a: 1 })
    .remove('data')
    .set('data', 'str')

  expect(strLocal.get('data')).toBe('str')
})

test('storage  all clear', () => {
  strLocal
    .set('num', 1)
    .set('flg', true)
    .set('data', 'data')
  strLocal.clear()

  expect(strLocal.get('num')).toBe(null)
  expect(strLocal.get('flg')).toBe(null)
  expect(strLocal.get('data')).toBe(null)
})
