import {
  faBold, faItalic, faUnderline, faStrikethrough, faPencil, faHeading, faRulerHorizontal
  , faListUl, faListOl, faListCheck,
  faList, faListSquares, faUndo, faUndoAlt,
  faLink, faImage, faCode, faFileCode, faTable,
  faPercent, faFill, faAngleDown, faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import {
  bold, code, embedCode, formula,
  horizontal, insertTable,
  italic, link, linkImg, listCheck, listCheckLine, listUnCheck, ol,
  quote,
  strikethrough,
  ul,
  underline,
  underlineText
} from '@/utils/ghost_base_toolbar'
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
  popupPane: "Heading",
  popupPaneCls: 'heading-popup',
  fn: () => {
  },
}, {
  name: 'faRulerHorizontal',
  tooltipMsg: '水平线',
  icon: faRulerHorizontal,
  fn: horizontal,
}, {
  name: 'faAngleRight',
  tooltipMsg: '引用',
  icon: faAngleRight,
  fn: quote,
},{
  name: 'faListUl',
  tooltipMsg: '无序列表',
  icon: faListUl,
  fn: ul,
}, {
  name: 'faListOl',
  tooltipMsg: '有序列表',
  icon: faListOl,
  fn: ol,
}, {
  name: 'faListCheck',
  tooltipMsg: '已完成任务',
  icon: faListCheck,
  fn: listCheck,
}, {
  name: 'faListSquares',
  tooltipMsg: '未完成的任务',
  icon: faUndo,
  fn: listUnCheck,
}, {
  name: 'faLink',
  tooltipMsg: '链接',
  icon: faLink,
  fn: link,
}, {
  name: 'faImage',
  tooltipMsg: '图片',
  icon: faImage,
  fn: linkImg,
}, {
  name: 'faCode',
  tooltipMsg: '内嵌代码',
  icon: faCode,
  fn: embedCode,
}, {
  name: 'faFileCode',
  tooltipMsg: '代码块',
  icon: faFileCode,
  fn:code,
}, {
  name: 'faTable',
  tooltipMsg: '表格',
  icon: faTable,
  fn: insertTable,
}, {
  name: 'faPercent',
  tooltipMsg: '公式',
  icon: faPercent,
  fn: formula,
}, {
  name: 'faFill',
  tooltipMsg: '背景颜色',
  icon: faFill,
  popupUp: true,
  popupPane: "BackgroundPick",
  fn: () => {
  },
}]

