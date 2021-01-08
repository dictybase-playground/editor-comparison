const image = [
  {
    type: "paragraph",
    children: [
      {
        text: "This has an image.",
      },
    ],
  },
  {
    type: "image",
    url: "/sad-dicty.png",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Image is above this paragraph.",
      },
    ],
  },
]

export default image
