import React from "react"
import Grid from "@material-ui/core/Grid"
import JSONPretty from "react-json-pretty"
import { Node } from "slate"

type Props = {
  newValue: Node[]
  oldValue: object
}

const CodeDisplay = ({ oldValue, newValue }: Props) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <strong>Old Value:</strong>
        <JSONPretty data={oldValue} />
      </Grid>
      <Grid item xs={6}>
        <strong>New Value:</strong>
        <JSONPretty data={newValue} />
      </Grid>
    </Grid>
  )
}

export default CodeDisplay
