import React from 'react';
import { toast } from 'react-toastify';
const AdminRow = ({user,refetch}) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
          if(data.modifiedCount>0){
            toast.success('Successfully Make an admin');
            refetch();
          }
            })
        }
    return (
         <tr>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-success">Make Admin</button>}</td>
        <td><button className="btn btn-danger">Remove User</button></td>
    </tr>
    );
};

export default AdminRow;