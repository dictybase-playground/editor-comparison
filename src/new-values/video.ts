const video = [
  {
    type: "paragraph",
    children: [
      {
        text: "This has a video.",
      },
    ],
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/FaHEusBG20c",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Video is embedded above this paragraph.",
      },
    ],
  },
]

export default video
