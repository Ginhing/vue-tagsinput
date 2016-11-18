export const KEY_CODE = {
  LEFT: 37,
  RIGHT: 39,
  TAB: 9,
  BACKSPACE: 8
}

//inner event name parser
export function _E(str, ...vals) {
  return `__${E(...arguments)}__`
}

//public event name parser
export function E(str, ...vals) {
  return `${str[0]}.vue-tagsinput`
}

export const klass = {
  container: 'tags-input',
  input: 'input',
  gap: 'gap',
  tag: 'tag',
  placeholder: 'placeholder'
}