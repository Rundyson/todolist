import React from 'react'

const ListTodo = ({listTodo}) => {
  return (
    <div className="list-Todo mt-5 max-h-[200px] overflow-auto border border-black rounded-md text-black">
            <h5 className='text-center mb-3 mt-3 text-xl'>ToDo List</h5>

            <ul className='px-10'>
                {listTodo !== 0 ? (
                    listTodo.map((item, key) => (
                    <li 
                    className='p-2 border border-black mb-2'
                    key={key}>{item.description}
                    </li>
                    ))
                ) : 
                (<h3>No List</h3>)}
                
            </ul>
    
          </div>
  )
}

export default ListTodo