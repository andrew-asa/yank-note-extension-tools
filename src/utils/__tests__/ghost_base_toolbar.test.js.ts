import {
  buildBackgroundColorText,
  checkPrefix,
  createCheckContent,
  createUnCheckContent,
  headingText, isInnerBackgroundColorText, parseTdContent,
  uncheckPrefix
} from '@/utils/ghost_base_toolbar'
import { isNoNegativeInteger } from '@/utils/StringUtils'

test('heading', () => {
  expect(headingText('#', '2')).toStrictEqual('# 2')
  expect(headingText('#', '')).toStrictEqual('# ')
  expect(headingText('#',"## 2")).toStrictEqual("# 2")
  expect(headingText('#',"## 2")).toStrictEqual("# 2")
  expect(headingText('#',"## abc##")).toStrictEqual("# abc##")
  expect(headingText('##',"# abc##")).toStrictEqual("## abc##")
})

test('createCheckContent', () => {
  expect(createCheckContent('#')).toStrictEqual(checkPrefix+'#')
  expect(createCheckContent('- [ ] #')).toStrictEqual(checkPrefix+'#')
  expect(createCheckContent('- [x] #')).toStrictEqual(checkPrefix+'- [x] #')
})

test('createUnCheckContent', () => {
  expect(createUnCheckContent('#')).toStrictEqual(uncheckPrefix+'#')
  expect(createUnCheckContent('- [ ] #')).toStrictEqual(uncheckPrefix+'- [ ] #')
  expect(createUnCheckContent('- [x] #')).toStrictEqual(uncheckPrefix+'#')
})

test('isInnerBackgroundColorText', () => {
  expect(isInnerBackgroundColorText('abc')).toBe(false)
  expect(isInnerBackgroundColorText('<td bgcolor="green">\n' +
    'sss\n' +
    '</td>  ')).toBe(true)
  expect(isInnerBackgroundColorText('<td bgcolor="green">sss</td> ')).toBe(true)
  expect(isInnerBackgroundColorText('<td1 bgcolor="green">sss</td1> ')).toBe(false)
  expect(isInnerBackgroundColorText('<td bgcolor="green">>sss</td> ')).toBe(true)
  expect(isInnerBackgroundColorText('<s bgcolor="green">>sss</s> ')).toBe(false)
})


test('isNoNegativeInteger', () => {
  expect(isNoNegativeInteger('sss')).toBe(false)
  expect(isNoNegativeInteger('0')).toBe(true)
  expect(isNoNegativeInteger('1')).toBe(true)
  expect(isNoNegativeInteger('11')).toBe(true)
  expect(isNoNegativeInteger('101')).toBe(true)
  expect(isNoNegativeInteger('-101')).toBe(false)
  expect(isNoNegativeInteger('1.1')).toBe(false)
})
