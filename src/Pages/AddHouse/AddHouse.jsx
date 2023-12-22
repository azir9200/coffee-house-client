import { toast } from 'react-hot-toast';


const AddHouse = () => {

  const handleAddHouse = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const type = form.type.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const newHouse = { name, type, location, photo };
    console.log(newHouse);

    fetch('http://localhost:5000/house', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newHouse)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Successfully toasted!')
        }
      })
  }


  return (
    <div className=" px-24 py-6 m-12 bg-[#ae9090] gap-6" >
      <h2 className=" text-center text-red-600 text-3xl">Add <span className="text-green-700">more </span> House <span className="text-green-700">here </span> </h2>

      <form onSubmit={handleAddHouse}>
        <div className=" md:flex  gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="name" name="name" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Type</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="type" name="type" className="input input-bordered" />
            </label>
          </div>
        </div>
        <div className=" md:flex gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">House Location</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="location" name="location" className="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="photo" placeholder="photo url" name="photo" className="input input-bordered" />
            </label>
          </div>
        </div>
        <input type="Submit" value="Add House" className="btn btn-block" />
      </form>

    </div>
  );
};

export default AddHouse;