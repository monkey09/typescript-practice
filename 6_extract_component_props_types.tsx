const Component = (props: {enabled: true}) => null

type compProps<T> = T extends React.FC<infer props> ? props : never

const props: compProps<typeof Component> = {enabled: true}
