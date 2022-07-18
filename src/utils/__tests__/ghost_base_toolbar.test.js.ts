import { headingText } from '@/utils/ghost_base_toolbar'

test('heading', () => {
  expect(headingText('#', '2')).toStrictEqual('# 2')
  expect(headingText('#', '')).toStrictEqual('# ')
  expect(headingText('#',"## 2")).toStrictEqual("# 2")
  expect(headingText('#',"## 2")).toStrictEqual("# 2")
  expect(headingText('#',"## abc##")).toStrictEqual("# abc##")
  expect(headingText('##',"# abc##")).toStrictEqual("## abc##")
})
