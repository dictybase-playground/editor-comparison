import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import CodeDisplay from "./CodeDisplay"

import newParagraphs from "./new-values/paragraphs"
import oldParagraphs from "./old-values/paragraphs.json"
import newBlockquote from "./new-values/blockquote"
import oldBlockquote from "./old-values/blockquote.json"
import newBold from "./new-values/bold"
import oldBold from "./old-values/bold.json"
import newImage from "./new-values/image"
import oldImage from "./old-values/image.json"
import newLink from "./new-values/link"
import oldLink from "./old-values/link.json"
import newVideo from "./new-values/video"
import oldVideo from "./old-values/video.json"
import newList from "./new-values/list"
import oldList from "./old-values/list.json"
import newTable from "./new-values/table"
import oldTable from "./old-values/table.json"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const TabsDisplay = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="example tabs">
          <Tab label="Paragraphs" />
          <Tab label="Bold" />
          <Tab label="Blockquote" />
          <Tab label="Link" />
          <Tab label="Image" />
          <Tab label="Video" />
          <Tab label="List" />
          <Tab label="Table" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CodeDisplay oldValue={oldParagraphs} newValue={newParagraphs} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeDisplay oldValue={oldBold} newValue={newBold} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CodeDisplay oldValue={oldBlockquote} newValue={newBlockquote} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CodeDisplay oldValue={oldLink} newValue={newLink} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CodeDisplay oldValue={oldImage} newValue={newImage} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CodeDisplay oldValue={oldVideo} newValue={newVideo} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <CodeDisplay oldValue={oldList} newValue={newList} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <CodeDisplay oldValue={oldTable} newValue={newTable} />
      </TabPanel>
    </div>
  )
}

export default TabsDisplay
