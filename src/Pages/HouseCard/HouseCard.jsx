import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from 'react-hot-toast';

const HouseCard = ({ houses, ahouses, setAhouses }) => {

  const { _id, name, type, location, photo } = houses;

  const handleDelete = _id => {
    // console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    fetch(`http://localhost:5000/house/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Successfully toasted!')

          const remaining = ahouses.filter(home => home._id !== _id);
          setAhouses(remaining);
        }
      })
  }



  return (
    <div className="card card-compact border border-sky-400  bg-base-100  mx-auto my-6 shadow-xl">
      <figure><img src={photo} alt="picture" className="h-72" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <p> {type} </p>
        <div className=" justify-between">
          <button className="btn btn-primary">Buy House</button>
          <Link to={`/updateHouse/${_id}`} >
            <button className="btn btn-info">Update House</button> </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete House</button>
        </div>
      </div>
    </div>
  )
};

export default HouseCard;