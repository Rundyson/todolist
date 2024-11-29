import React from 'react';
import FormTodo from './FormTodo';
import ListTodo from './ListTodo';

const App = () => {

  const [showFormTodo, setShowFormTodo] = React.useState(false);
  const [listTodo, setListTodo] = React.useState([]);


  return (
    <>
      <section className="min-h-screen bg-black flex justify-center items-center text-white">
        <div className="max-w-[500px] w-full bg-white rounded-md p-4 ">

          <FormTodo
          setShowFormTodo={setShowFormTodo}
          setListTodo={setListTodo}
          listTodo={listTodo}/>
          <ListTodo listTodo={listTodo}/>

        </div>
      </section>
    </>
  )
}

export default App  