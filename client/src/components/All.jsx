import React,{ useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const All = props => {

    const [authors, setAuthors]  = useState([]);
    
    
    
    const getAll = () =>{
        axios.get('http://localhost:8000/')
    .then(res => { console.log('res: ', res)
    setAuthors(res.data.Authors);
})
    .catch(err => console.log('Error: ', err))
    }
    useEffect( ()=>{
        getAll();
        
    },[]);
    console.log("authors ",authors);
    const del = id =>{
        console.log('clicked');
        axios.delete(`http://localhost:8000/delete/${ id }`)
        .then(res => {
            console.log('res: ', res)
            getAll();
        })
        .catch(err => console.log('Error: ', err))
    }
    return (
        <div>
        <div className='card  m-2'>
            <a href="/new">add an author</a>
            <h4>We have quotes by:</h4>
            </div>
            <table className='table table-hover'>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
                {
                authors.map((author, i) =>{
                    return(
                    <tr key = { i }>
                        <td> { author.name }</td>
                        <td className='col d-flex justify-content-between'>
                            <button className='btn btn-outline-danger btn-block' onClick={ e => navigate(`/edit/${author._id}`) }>Edit</button>
                            <button className='btn btn-outline-danger btn-block' onClick={ e => del(author._id) }>Delete</button>
                        </td>
                    </tr>
                    )
                
                }) }
            </table>
        
        </div>
    )
}

export default All;
