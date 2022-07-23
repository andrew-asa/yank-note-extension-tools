import { headingText } from '@/utils/ghost_base_toolbar'
import { COLOR_REG, COLOR_REG_STR, isEmpty, startWith, testStr } from '@/utils/StringUtils'

test('isEmpty', () => {
  expect(isEmpty('#')).toBe(false)
  expect(isEmpty('')).toBe(true)
  expect(isEmpty(null)).toBe(true)
})

test('startWith', () => {
  expect(startWith('#aa',"#")).toBe(true)
  expect(startWith('- [x] aaa',"- [x] ")).toBe(true)
  expect(startWith('- [x]aaa',"- [x] ")).toBe(false)
  expect(startWith('- [] aaa',"- [] ")).toBe(true)
  expect(startWith('- []aaa',"- [] ")).toBe(false)
  expect(startWith('- [] aaa',"- [x] ")).toBe(false)
})

test('testStr', () => {
  expect(testStr('#aa',COLOR_REG_STR)).toBe(false)
  expect(testStr('#aaa',COLOR_REG_STR)).toBe(false)
  expect(testStr('#aa3333',COLOR_REG_STR)).toBe(true)
  expect(testStr('#aa3333',COLOR_REG)).toBe(true)
  expect(testStr('#abcdef',COLOR_REG)).toBe(true)
})
