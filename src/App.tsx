import React from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import EditorNew from "./EditorNew"
import useApolloClient from "./hooks/useApolloClient"

const theme = createMuiTheme({})

const App = () => {
  const apolloClient = useApolloClient()

  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <EditorNew />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App
