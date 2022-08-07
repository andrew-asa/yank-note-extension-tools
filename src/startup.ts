import insert_template from './insert_template'
import fast_operation from '@/fast_operation'
import { installGhost } from '@/utils/ghost_utils'
import ocr_operation from '@/ocr_operation'



export default function () {
  fast_operation()
  ocr_operation()
  insert_template()
  installGhost()
}
