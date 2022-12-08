## Installation

run the following command:

```
npm install adaptable-react-modal
```

after installation you can import the modal component in your React app using:

```
import Modal from 'adaptable-react-modal'
```

## Features

The component offers the following features and tweaks:

- title --> Sets the H2 title text of the Modal
- text --> Sets the paragraph text of the Modal
- duration --> Sets a fixed amount of time the Modal is displayed and removes the close function
- customFunction --> Optional custom function that is run after the Modal auto closes (only works when a duration is set)
- customClass --> allows for custom styling of the Modal by including a llocal class name

## Props

The component uses props to set the above mentioned features. Those can be set on the component as seen in the below example:

```
<Modal
    title="Employee Added"
    text="Great news!"
    animation={true}
    duration={3000}
    customClass="custom"
/>
```

## Source code

The source code for this project can be found in a public Git repository at https://github.com/Jerune/Modal-Library.git
