import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateHouse = () => {
  const coffee = useLoaderData();
  const { _id, name, type, location, photo } = coffee;

  const handleUpdateHouse = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const updateHouse = { name, type, location, photo };
    // console.log(updateHouse);

    fetch(`http://localhost:5000/house/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateHouse)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

  }


  return (
    <div>
      <form onSubmit={handleUpdateHouse}>
        <div className=" md:flex  gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Type</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="type" name="type" defaultValue={type} className="input input-bordered" />
            </label>
          </div>
        </div>

        <div className=" md:flex gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Location</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="location" name="location" defaultValue={location} className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="photo" placeholder="photo url" name="photo" defaultValue={photo} className="input input-bordered" />
            </label>
          </div>
        </div>
        <input type="Submit" value="Update House" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateHouse;