import {
  checkPrefix,
  createCheckContent,
  createUnCheckContent,
  headingText,
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
