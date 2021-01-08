const convertNode = (node: any) => {
  const { object, type, data, nodes, ...rest } = node
  // We drop `object`, pull up data, convert `nodes` to children and copy the rest across
  const element = {
    type,
    ...data,
    ...(nodes ? { children: nodes.map(convertNode) } : {}),
    ...rest,
  }

  // non-text blocks must have children
  if (element.type && !element.children) {
    element.children = [
      {
        text: "",
      },
    ]
  }

  return element
}

const convertSlate = (object: any) => {
  const { nodes } = object.document

  return nodes.map(convertNode)
}

export default convertSlate
