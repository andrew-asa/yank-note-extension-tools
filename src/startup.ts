import insert_template from './insert_template'
import fast_operation from '@/fast_operation'
import { installGhost } from '@/utils/ghost_utils'
import image_operation from '@/image_operation'



export default function () {
  fast_operation()
  image_operation()
  insert_template()
  installGhost()
}
