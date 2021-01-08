import React from "react"
import { createEditor, Node } from "slate"
import { Slate, Editable, withReact } from "slate-react"
import JSONPretty from "react-json-pretty"

type Props = {
  value: Node[]
  setValue: (arg0: Node[]) => void
}

const EditorNew = ({ value, setValue }: Props) => {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}>
        <Editable />
      </Slate>
      <br />
      <p>
        The only requirement for elements is to include the{" "}
        <code>children</code> property.
      </p>
      <div>
        <JSONPretty id="json-pretty" data={value} />
      </div>
    </div>
  )
}

export default EditorNew
