const table = [
  {
    type: "paragraph",
    children: [
      {
        text: "There is a table embedded below.",
      },
    ],
  },
  {
    type: "table",
    children: [
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "row 1 cell 1" }],
          },
          {
            type: "table-cell",
            children: [{ text: "row 1 cell 2" }],
          },
        ],
      },
      {
        type: "table-row",
        children: [
          {
            type: "table-cell",
            children: [{ text: "row 2 cell 1" }],
          },
          {
            type: "table-cell",
            children: [{ text: "row 2 cell 2" }],
          },
        ],
      },
    ],
  },
]

export default table
