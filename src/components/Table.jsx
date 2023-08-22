import { useState, useEffect } from "react";

const Table = () => {

    const [users, setUsers] = useState([]);
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    function pullJson() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                setUsers(responseData)
            } )
    }

    useEffect(() => {
        pullJson()

    }, [])
  return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
          </tr>
        </thead>
         <tbody>
         {users.map((user)=> (
             <tr key={user.id}>
                 <td data-title="Name">{user.name}</td>
                 <td data-title="Email">{user.email}</td>
                 <td data-title="Phone">{user.phone}</td>
                 <td data-title="Website">{user.website}</td>
                 <td data-title="Company">{user.company.name}</td>
             </tr>
         )) }

         </tbody>
      </table>
  )
}

export default Table;