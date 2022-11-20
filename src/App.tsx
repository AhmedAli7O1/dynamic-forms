import React from 'react';
import './App.css';
import { Text } from './components/Text';
import { Form } from './Form/Form';
import { WrapperControl } from './WrapperControl/WrapperControl';

function App() {
  return (
    <div className="App">
      <Form 
        renderers={[
          { id: 'textbox', renderer: WrapperControl(Text) }
        ]}

        uiSchema={[
          {
            id: "1", 
            renderer: 'textbox',
            options: {
              path: 'firstName'
            }
          },
          {
            id: "2",
            renderer: 'textbox',
            options: {
              path: 'lastName'
            }
          },
          {
            id: "3",
            renderer: 'textbox',
            options: {
              path: 'age'
            }
          },
          {
            id: "4",
            renderer: 'textbox',
            options: {
              path: 'job'
            }
          }
        ]}
      />
    </div>
  );
}

export default App;
