import React, { useEffect,useState } from 'react';
import toast, { Toast } from 'react-hot-toast';
// import UpdateUser from './UpdateUser';

const PodcastManage = () => {

    const [userList,setUserList] = useState([]);
    const [showForm, setshowForm] = useState(false);
    const [updateFormdata, setUpdateFormdata] = useState(null)

    const getDataFromBackend = async () =>{

        const response = await fetch('http://localhost:5000/podcast/getall');

        const data = await response.json();
        console.log(data);
        setUserList(data);
    };

    const deleteUser = async (id) => {
        console.log(id);
        const response = await fetch('http://localhost:5000/podcast/delete/'+id,{
            method : 'delete'
        })
        console.log(response.status);
        getDataFromBackend();
        toast.success('user delete 😎');

    }
    // const editUser = (id) => { 

    //  }
   
    

    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayUsers = () => {
        return <table className='table table-sriped table-primary'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Upload File</th>
                    <th>upload Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (user)=>(
                        <tr>
                            <td>{user.title}</td>
                            <td>{user.description}</td>
                            <td>{user.uploadFile}</td>
                            <td>{user.uploadImage}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteUser(user._id)}}>
                                   <i className="fas fa-trash"></i>

                                </button>
                            </td>
                            {/* <td>
                                <button className='btn btn-primary' onClick={() => { updateUser(user)}}>
                                   <i className="fas fa-pen"></i>

                                </button>
                            </td> */}
                            
                        </tr>

                    ))
                }
            </tbody>
        </table>


    }
    

  return (
    <div className='container'>
        <h1 className='text-center'> MANAGE PODCAST </h1>
        <hr />
        {displayUsers()};
        
    </div>
  )
}

export default PodcastManage