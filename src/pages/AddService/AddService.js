import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://ghostly-vault-43616.herokuapp.com/destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Destination successfully added!');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className="my-6 text-center text-red-400 text-2xl font-bold">Add New Destinations</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Destination Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;