# Volpe Observer

### Install
`npm i @volpe/milestone`
`yarn add @volpe/milestone`

### Usage
```js
import { Event } from '@volpe/milestone

// Create the event
const onclick = new Event()

// Add listeners
const handleOnClick = (e) => console.log('Click!')
onclick.listen(handleOnClick)

// Invoke event
window.addEventListener('click', onclick.invoke)

// Remove listener
onclick.remove(handleOnClick)
```

