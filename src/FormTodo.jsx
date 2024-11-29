import React from 'react';

const FormTodo = ({ setListTodo, listTodo}) => {

    const refDescription = React.useRef(null);
    const handleAddTodo = () => {
        setListTodo([
            ...listTodo,
            {
                description: refDescription.current.value,
            }
        ]);
        refDescription.current.value = " "
    };

  return (
    <div className="form-Todo p-4 rounded-md  w-3/4 mx-auto ">
            <form action="">
              <label htmlFor="" 
              className="block text-center mb-3 text-3xl font-semibold text-black">Add ToDo
              </label>
              <input type="text" 
              className="px-2 py-1 rounded-md border border-black text-black w-full outline-none h-[45px] mb-5" 
              ref={refDescription}/>
            </form>

                <button 
                className="px-3 py-2 rounded-md bg-black text-white w-full mt-5" 
                type='button'
                onClick={() => handleAddTodo()}>Add To Do
                </button>
  

          </div>
  )
}

export default FormTodo