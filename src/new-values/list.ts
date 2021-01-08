const list = [
  {
    type: "paragraph",
    children: [
      {
        text: "There is an unordered list below this paragraph.",
      },
    ],
  },
  {
    type: "unordered-list",
    children: [
      {
        type: "list-item",
        children: [
          {
            type: "list-text",
            children: [
              {
                text: "Item 1",
              },
              {
                type: "list-item",
                children: [
                  {
                    type: "list-text",
                    children: [
                      {
                        text: "Subitem 1",
                      },
                    ],
                  },
                  {
                    type: "list-text",
                    children: [
                      {
                        text: "Subitem 2",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "list-item",
        children: [
          {
            text: "Item 2",
          },
        ],
      },
    ],
  },
]

export default list
