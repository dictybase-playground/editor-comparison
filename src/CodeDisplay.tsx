import React from "react"
import Grid from "@material-ui/core/Grid"
import convertSlate from "./convert"

type Props = {
  newValue: object[]
  oldValue: object
}

const CodeDisplay = ({ oldValue, newValue }: Props) => {
  const convertedValue = convertSlate(oldValue)

  return (
    <Grid container>
      <Grid item xs={6}>
        <strong>Old Value:</strong>
        <pre style={{ overflowWrap: "break-word" }}>
          {JSON.stringify(oldValue, null, 2)}
        </pre>
      </Grid>
      <Grid item xs={6}>
        <strong>New Value:</strong>
        <pre style={{ overflowWrap: "break-word" }}>
          {JSON.stringify(newValue, null, 2)}
        </pre>
      </Grid>
      <Grid item xs={6}>
        <strong>Converted Value:</strong>
        <pre style={{ overflowWrap: "break-word" }}>
          {JSON.stringify(convertedValue, null, 2)}
        </pre>
      </Grid>
    </Grid>
  )
}

export default CodeDisplay
