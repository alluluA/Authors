import React,{ useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Form = props => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState({});

    const home = ()=>{
        setName('');
        navigate('/');
    }
    const getAuthor =()=>{
        axios.get(`http://localhost:8000/${props.id}`)
            .then(res => {setAuthor(res.data.author) 
                setName(res.data.author.name);
                console.log('res: ', res);
            })
            .catch(err => console.log('Error: ', err))
    }
    
        useEffect(()=>{
                getAuthor();
        },[]);

    const update= e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/edit/${ props.id }`,{
            name,
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
    return (
        <div className="container col-7"> 
        <div className='card '>
            <div className="card-body">
                <form onSubmit={ update }>
                <div className="form-group row">
                    <label className="col-4 col-form-label">Name: </label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control"  onChange={ e => setName( e.target.value ) } value={ name }/>
                        <p className='text-danger'>{errors.name ? errors.name.message : ''}</p>
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
