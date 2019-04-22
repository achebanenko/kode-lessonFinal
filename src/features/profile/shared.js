export const formatPhone = (input, name) => {
  if (!input) return ''
  
  input = name === 'phone' ? input.replace(/[^0-9]/g, '') : input

  if (/^[0-9]+$/.test(input)) {
    if (input.length >= 10) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7,9)}-${input.slice(9)}`
    if (input.length > 8 && input.length < 10) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7)}`
    if (input.length === 8) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7)}`
    if (input.length > 5 && input.length < 8) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4)}`
    if (input.length === 5) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4)}`
    if (input.length > 1 && input.length < 5) return `+${input.slice(0,1)} ${input.slice(1)}`
    return `+${input.slice(0,1)}`
  }
  
  return input
}

export const normalizePhone = value => {
  return value.replace(/\+|\s+|\(|\)|-/g, '')
}


export const validEmail = (value) => {
  if (!/^[0-9]+$/.test(value)) {
    return (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      ? 'Поле заполнено неверно'
      : undefined
  }
}

export const validPhone = (value, allValues, props, name) => {
  if (/^[0-9]+$/.test(value) || name === 'phone') {
    return (!value || value.length !== 11)
      ? 'Поле заполнено неверно'
      : undefined
  }
}