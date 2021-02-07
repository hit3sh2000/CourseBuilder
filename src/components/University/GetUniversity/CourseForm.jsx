import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Form } from "react-bootstrap";
import './Card.css';
import { useForm } from 'react-hook-form';
import axios from "../../../axios";
import { Link } from 'react-router-dom';

function CourseForm({ match }) {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        data.category = match.params.id
        data.course_avatar = course_avatar
        console.log(data);
        axios.post(`/course/university/${localStorage.getItem('university')}`, data)
        .then(res=>{
            window.location.replace('/university')
        })
    };

    const [course_avatar, setCourse_Avatar] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        UploadFile(file);
        setCourse_Avatar(e.target.id);
    };

    const UploadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setCourse_Avatar(reader.result)
        };
    };
    const input = {
        C_name: "",
        C_desc: "",
        C_duration: "",
        C_price: "",
        category: match.params.id,
    }
    const [educator, setEducator] = useState()
    useEffect(() => {
        fetchEducator()
            .then(res => {
                console.log(res.data);
                setEducator(res.data)
            });
    }, [])

    async function fetchEducator() {
        const Edu = await axios.get("/educator")
        return Edu
    }



    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Add Course</h3>
                    <div className="form-group">
                        <label>Upload Course Picture</label>
                        <input type="file" className="form-control" name="C_img" onChange={handleFileInputChange} ref={register({ required: true })} />
                        {errors.C_img && 'This field is required.'}
                    </div>
                    <div className="form-group">
                        <label>Course name</label>
                        <input type="text" className="form-control" placeholder="Enter Course name..." name="C_name" ref={register({ required: true })} />
                        {errors.C_name && 'This field is required.'}
                    </div>
                    <div className="form-group">
                        <label>Course description</label>
                        <input type="text" className="form-control" placeholder="Enter description..." name="C_desc" ref={register({ required: true })} />
                        {errors.C_desc && 'This field is required.'}
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" className="form-control" placeholder="Enter Course Duration..." name="C_duration" ref={register({ required: true })} />
                        {errors.C_duration && 'This field is required.'}
                    </div>
                    <div className="form-group">
                        <label>Course Price</label>
                        <input type="text" className="form-control" placeholder="Enter Course Price" name="C_price" ref={register({ required: true })} />
                        {errors.C_price && 'This field is required.'}
                    </div>
                    <label>Educator :- </label>
                    <select name='educatorinfo' ref={register({ required: true })}>
                        {errors.educatorinfo && 'This field is required.'}
                        <option >Educator is Not Selected</option >
                        {educator && educator.map(item => {
                            return <option id={item._id} value={item.E_name}  >{item.E_name}</option >
                        })}
                    </select >
                    <br></br>
                    <br></br>
                    <Button type="submit" className="btn btn-primary btn-block" variant='primary' > Add Course</Button>
                    {/* <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='primary' onClick={handleFinalChange}>Add</Button> </Link> */}
                    <Link to={'/university'}><Button className="btn btn-primary btn-block" variant='danger' >Cancel</Button> </Link>
                </div>
            </div>
        </form>
    )
}

export default CourseForm
