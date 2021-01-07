import React from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import EditorNew from "./EditorNew"
import useApolloClient from "./hooks/useApolloClient"

const theme = createMuiTheme({})

const useStyles = makeStyles({
  container: {
    paddingTop: "20px",
    "& a": {
      paddingRight: "15px",
    },
  },
})

const App = () => {
  const apolloClient = useApolloClient()
  const classes = useStyles()

  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Grid container justify="center" className={classes.container}>
            <Grid item>
              <EditorNew />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App
