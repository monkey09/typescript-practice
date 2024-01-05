interface myCompProps<T> {
  items: T[]
  action: (items: T[]) => JSX.Element[]
}

const MyComponent = <T,>(props: myCompProps<T>) => props.action(props.items)

const CompTest = () => {
  return (
    <div>
      <MyComponent 
        items={[5, 'hashim']}
        action={(items) => items.map(item => <span>{item}</span>)}
      />
    </div>
  )
}