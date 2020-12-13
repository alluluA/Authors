import React,{ useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Form = props => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

    const create = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/new',{
            name
        })
        .then(res => {
            console.log('Response: ',res)
            if(res.data.error){
                setErrors(res.data.error.errors)
            }else{
                home();
            }
        })
        .catch(err => {
            console.log('Error: ',err)}) 
    }
    const home = ()=>{
        setName('');
        navigate('/');
    }


    return (
        <div className="container col-7"> 
        <div className='card '>
            <div className="card-body">
                <form onSubmit={create}>
                <div className="form-group row">
                    <label className="col-4 col-form-label">Name: </label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control"  onChange={ e => setName( e.target.value ) } value={ name }/>
                        <p className='text-danger'>{errors.name? errors.name.message : ''}</p>
                </div>
                </div>
                <div className="form-group row">
        <p className="col-3"></p>
                    <div className="col-sm-7 d-flex justify-content-between">
                        <button className="btn btn-outline-dark m-1" onClick={ e => home() }>Cancel</button>
                        <input className="btn btn-outline-dark m-1" type="submit" value="Submit" />
                    </div>
                </div>
                </form>
            </div>
            
        </div>
        </div>
    )
}

export default Form;
