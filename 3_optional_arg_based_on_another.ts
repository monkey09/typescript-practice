type Action = {
  type: 'sign_in',
  payload: { user: string }
} | {
  type: 'sign_out'
}

interface Method {
  <T extends Action['type']>(
    ...args: Extract<Action, {type: T}> extends {payload: infer P}
    ? [T, P] : [T]
  ): void
}

const method: Method = (...args) => {}

method("sign_in", {user: 'hashim'})