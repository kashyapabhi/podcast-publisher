import React, { useEffect, useState } from 'react'
// import react  from 'react';

const Listpodcast = () => {
    const [Listpodcast, setListpodcast] = useState([]);
    const getDataFromBackend=async()=>{
      const response=await fetch('http://localhost:5000/Listpodcast/getall')
      const data=await response.json();
      console.log(data);
      setListpodcast(data)
      console.log('request sent');
    }
         useEffect(()=>{
          getDataFromBackend();
         },[])
         const showUsers=()=>{
          return <table className='table table-white table-striped'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                {/* <th>Title</th> */}
                <th>CreatedBy</th>
                <th>CreatedAt</th>
              </tr>
            </thead>
            <tbody>
              {Listpodcast.map((Listpodcast,index)=>(
                <tr key={index}>
                  <td>{Listpodcast.title}</td>
                  <td>{Listpodcast.description}</td>
                  <td>{Listpodcast.createdby}</td>
                  <td>{Listpodcast.createdat}</td>
                </tr>
              ))}
            </tbody>
          </table>
         }
  return (
    <div className='container'>
      <h1 className='text-center'>Listpodcast</h1>
      <div className="row"></div>
      <div className="col-md"></div>
      {showUsers()}
    </div>
  )
}

export default Listpodcast

