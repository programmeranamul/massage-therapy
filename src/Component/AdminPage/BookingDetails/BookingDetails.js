import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const BookingDetails = ({ service }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const logedInUser = JSON.parse(localStorage.getItem('user'))

    const onSubmit = (data) => { }


    const handelPayment = (paymentId) => {
        const bookingDetails = {
            name: logedInUser.displayName,
            email: logedInUser.email,
            service: service.serviceName,
            serviceDescription: service.serviceDescription,
            serviceImg: service.image,
            bookingStatus: "painding",
            paymentId,
            placeTime: new Date(),
        };

        fetch("http://localhost:8000/bookingAservice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Your order place successfully");

                }
            });
    };





    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} className="col-md-8">
                <Form.Group controlId="nameFild">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        defaultValue={logedInUser.displayName}
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                    />
                    {errors?.name?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                </Form.Group>

                <Form.Group controlId="emailFild">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={logedInUser.email}
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+\.\S+$/
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                    {errors?.email?.type === "pattern" && (
                        <p className="text-danger">Write a valid e-mail</p>
                    )}
                </Form.Group>

                <Form.Group controlId="serviceNameFild">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control
                        defaultValue={service.serviceName}
                        readOnly
                        {...register("serviceName", { required: true })} placeholder="Service Name" type="text" />

                    {errors?.serviceName?.type === "required" && (
                        <p className="text-danger">This field is required</p>
                    )}
                </Form.Group>

                <input
                    type="submit"
                    className="btn btn-success ml-auto d-block mt-3"
                    value="Submit"
                />
            </Form>
            <ProcessPayment handelPayment={handelPayment} />
            <p>Your Service charged will be ${service.serviceCharge}</p>
        </div>
    );
};

export default BookingDetails;