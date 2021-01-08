import React from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import TabsDisplay from "./TabsDisplay"
import useApolloClient from "./hooks/useApolloClient"

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
    MuiTabs: {
      root: {
        backgroundColor: "#b6b6b6",
        color: "#000",
      },
      indicator: {
        backgroundColor: "#858780",
      },
    },
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "#004080",
          "&:hover": {
            color: "#001b53",
          },
        },
      },
    },
  },
})

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
            <Grid item xs={10}>
              <TabsDisplay />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App
