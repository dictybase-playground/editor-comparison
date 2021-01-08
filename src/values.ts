const values = {
  paragraphs: [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
    {
      type: "paragraph",
      children: [{ text: "A second paragraph." }],
    },
  ],
  bold: [
    {
      type: "paragraph",
      children: [
        {
          text: "There is a ",
        },
        { text: "bold", bold: true },
        {
          text: " word in this sentence.",
        },
      ],
    },
  ],
  blockquote: [
    {
      type: "block-quote",
      children: [{ text: "A wise quote." }],
    },
  ],
  link: [
    {
      type: "paragraph",
      children: [
        {
          text:
            "In addition to block nodes, you can create inline nodes, like ",
        },
        {
          type: "link",
          url: "https://en.wikipedia.org/wiki/Hypertext",
          children: [{ text: "hyperlinks" }],
        },
        {
          text: "!",
        },
      ],
    },
  ],
  video: [
    {
      type: "paragraph",
      children: [
        {
          text:
            "In addition to simple image nodes, you can actually create complex embedded nodes. For example, this one contains an input element that lets you change the video being rendered!",
        },
      ],
    },
    {
      type: "video",
      url: "https://player.vimeo.com/video/26689853",
      children: [{ text: "" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text:
            "Try it out! This editor is built to handle Vimeo embeds, but you could handle any type.",
        },
      ],
    },
  ],
  image: [
    {
      type: "paragraph",
      children: [
        {
          text:
            "In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.",
        },
      ],
    },
    {
      type: "image",
      url: "https://source.unsplash.com/kFrdX5IeQzI",
      children: [{ text: "" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text:
            "This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your keyboard and paste it anywhere in the editor!",
        },
      ],
    },
  ],
}

export default values
