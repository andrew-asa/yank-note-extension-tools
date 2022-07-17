import {
  faBold, faItalic, faUnderline, faStrikethrough, faPencil, faHeading, faRulerHorizontal
  , faListUl, faListOl, faListCheck,
  faList, faListSquares, faUndo, faUndoAlt,
  faLink, faImage, faCode, faFileCode, faTable,
  faPercent, faFill,faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { bold, italic, strikethrough, underline, underlineText } from '@/utils/ghost_base_toolbar'
import Heading from '@/components/eidt/Heading.vue'

let operation = {
  bold:bold,
  italic:italic,
  underline:underline,
  strikethrough:strikethrough
}

function setOperation (op) {
  operation = op
}

function seOperationFunction (name, fn) {
  operation[name] = fn
}

export const toolbar = [{
  name: 'faBold',
  tooltipMsg: '加粗',
  icon: faBold,
  fn: bold,
}, {
  name: 'faItalic',
  tooltipMsg: '斜体',
  icon: faItalic,
  fn: italic,
}, {
  name: 'faUnderline',
  tooltipMsg: '下划线',
  icon: faUnderline,
  fn: underline,
}, {
  name: 'faStrikethrough',
  tooltipMsg: '删除线',
  icon: faStrikethrough,
  fn: strikethrough,
}, {
  name: 'faPencil',
  tooltipMsg: '字体设置',
  icon: faPencil,
  fn: () => {
  },
}, {
  name: 'faHeading',
  tooltipMsg: '标题',
  icon: faHeading,
  popupUp: true,
  popupPane: Heading,
  popupPaneCls: 'heading-popup',
  fn: () => {
  },
}, {
  name: 'faRulerHorizontal',
  tooltipMsg: '水平线',
  icon: faRulerHorizontal,
  fn: () => {
  },
}, {
  name: 'faListUl',
  tooltipMsg: '无序列表',
  icon: faListUl,
  fn: () => {
  },
}, {
  name: 'faListOl',
  tooltipMsg: '有序列表',
  icon: faListOl,
  fn: () => {
  },
}, {
  name: 'faListCheck',
  tooltipMsg: '已完成任务',
  icon: faListCheck,
  fn: () => {
  },
}, {
  name: 'faListSquares',
  tooltipMsg: '未完成的任务',
  icon: faUndo,
  fn: () => {
  },
}, {
  name: 'faLink',
  tooltipMsg: '链接',
  icon: faLink,
  fn: () => {
  },
}, {
  name: 'faImage',
  tooltipMsg: '图片',
  icon: faImage,
  fn: () => {
  },
}, {
  name: 'faCode',
  tooltipMsg: '内嵌代码',
  icon: faCode,
  fn: () => {
  },
}, {
  name: 'faFileCode',
  tooltipMsg: '代码块',
  icon: faFileCode,
  fn: () => {
  },
}, {
  name: 'faTable',
  tooltipMsg: '表格',
  icon: faTable,
  fn: () => {
  },
}, {
  name: 'faPercent',
  tooltipMsg: '公式',
  icon: faPercent,
  fn: () => {
  },
}, {
  name: 'faFill',
  tooltipMsg: '颜色',
  icon: faFill,
  fn: () => {
  },
}]

