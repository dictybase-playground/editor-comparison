import React from "react"
import { createEditor, Node } from "slate"
import { Slate, Editable, withReact } from "slate-react"
import JSONPretty from "react-json-pretty"

const EditorNew = () => {
  const editor = React.useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = React.useState<Node[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ])

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}>
        <Editable />
      </Slate>
      <div>
        <JSONPretty id="json-pretty" data={value} />
      </div>
    </div>
  )
}

export default EditorNew
