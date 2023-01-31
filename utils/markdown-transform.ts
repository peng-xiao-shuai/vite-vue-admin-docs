import { id } from 'element-plus/es/locale'
import path from 'path'
import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'element-plus-md-transform',
    enforce: 'pre',
    async transform(code, id) {

      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')
      const pattern = '/zh-CN/component'

      if (id.indexOf(pattern) == -1) return

      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
        ],
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[]
) => {
  /* 查询md文件中是否存在 ---
    例如：
    ---
    titleTemplate: PowerfulTable
    outline: [1, 4]
    ---

    将会被匹配，特别注意加上\n\n 则会匹配最后一个。注意保证代码规范如果只有一个\n 将不会被匹配
  */
  // console.log(code.split('\n'), 'code');

  // 特别注意如果行尾序号是CRLF的情况则是\r,LF的情况下才是\n
  const frontmatterEnds = code.search(/---\n\n/) + 4
  // 查找是否存在 \n##, 如果有则截取0到当前查询到的下标
  const firstSubheader = code.search(/\n##\s/)
  // 获取截取下标
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}
