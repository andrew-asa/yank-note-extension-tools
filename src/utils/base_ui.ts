import { ctx } from '@yank-note/runtime-api'

export function info (msg:string) {
  ctx.ui.useToast().show('info', msg)
}

export function warning (msg: string) {
  ctx.ui.useToast().show('warning', msg)
}

