import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteUsers } from '../store/slices/UserSlice';
import { deleteUsers } from '../store/actions';
import { MdDeleteForever } from 'react-icons/md';

const DeleteAllUser = () => {
    const dispatch = useDispatch();
    const deleteAllUsers = () => {
        dispatch(deleteUsers())
    }
  return (
    <div>
            <button 
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
                onClick={() => deleteAllUsers()}
            >
                <MdDeleteForever /> Clear Users
            </button>
        </div>
  )
}

export default DeleteAllUser;
