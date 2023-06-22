import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", data.class_image[0]);

      const imgResponse = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const { class_name, price, available_seats, status,enrolled } = data;
        const newItem = {
          class_name,
          price: parseFloat(price),
          available_seats: parseFloat(available_seats),
          status,
          class_image: imgURL,
          instructor_name:user.displayName,
          instructor_email:user?.email,
          enrolled

        };

        const response = await axiosSecure.post("/classes", newItem);

        if (response.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="class_name"
            {...register("class_name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("class_image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="instructor">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              {...register("instructor_name", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              {...register("instructor_email", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">available_seats*</span>
          </label>
          <input
            type="number"
            {...register("available_seats", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">enrolled</span>
          </label>
          <input
            type="number"
            {...register("enrolled")}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Status*</span>
          </label>
          <input
            type="text"
            value="pending"
            {...register("status", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <input
          className="btn btn-primary mt-4"
          type="submit"
          value={loading ? "Adding..." : "Add Item"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default AddClass;
