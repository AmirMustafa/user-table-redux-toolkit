import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => { // state = complete state access in src/store/index.jsx
        return state.users;
    });

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    return (
        <Wrapper>
        <table>
            <thead>
            <tr>
                <th>User Name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.map((user, index) => (
                <tr key={index}>
                <td>{user}</td>
                <td>
                    <button className=" btn-delete" onClick={() => deleteUser(index)}>
                        <MdDeleteForever className="delete-icon" />
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 12px 16px;
    text-align: left;
  }

  th {
    background-color: #8254ff;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  td {
    font-size: 16px;
    color: #333;
  }

  button {
    background-color: #f9f9f9;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 768px) {
    th, td {
      padding: 8px 12px;
      font-size: 14px;
    }
  }
`;

export default DisplayUsers
