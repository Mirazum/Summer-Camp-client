import { useState } from "react";

import Swal from "sweetalert2";

import { useLoaderData } from "react-router-dom";

const UpdateClass = () => {
  const classes = useLoaderData();
  const { class_name, price, _id } = classes;


  const [loading, setLoading] = useState(false);

  const handleUpdate = event => {
    setLoading(true);
    event.preventDefault();

    const form = event.target;
    const class_name = form.class_name.value;
    const price= form.price.value


    const  data= {class_name,price}

    fetch(`https://summer-camp-school-server-mirazum.vercel.app/classes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: " Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleUpdate}>
        <div className="form-control w-full mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={class_name}
               
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            defaultValue={ price }
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <input
          className="btn btn-primary mt-4"
          type="submit"
          value={loading ? "Adding..." : "Update item"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default UpdateClass;
