import { heading } from '@/utils/ghost_base_toolbar'

test('heading', () => {
  expect(heading('#', '2')).toStrictEqual('# 2')
})
