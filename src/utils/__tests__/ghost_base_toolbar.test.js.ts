import {
  buildBackgroundColorText,
  checkPrefix,
  createCheckContent,
  createUnCheckContent,
  headingText, isInnerBackgroundColorText, parseTdContent,
  uncheckPrefix
} from '@/utils/ghost_base_toolbar'

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

test('parseTdContent', () => {
  expect(parseTdContent('abc')).toStrictEqual('')
  expect(parseTdContent('<td>aaaa</td>')).toStrictEqual('aaaa')
  expect(parseTdContent('<td1>aaaa</td1>')).toStrictEqual('')
})

test('parseTdContent', () => {
  // expect(buildBackgroundColorText('sss',"green")).toStrictEqual('<td bgcolor="green">sss</td>')
})
