import { headingText } from '@/utils/ghost_base_toolbar'
import { isEmpty, startWith } from '@/utils/StringUtils'

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
