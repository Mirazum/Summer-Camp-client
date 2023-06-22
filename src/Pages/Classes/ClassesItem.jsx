import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useOrder from "../../hooks/UseClasses/useOrder";

const ClassesItem = ({ item, onSuccessSelect }) => {
  const navigate = useNavigate();
  const [, refetch] = useOrder();
  const {
    class_name,
    class_image,
    instructor_name,
    available_seats,
    price,
    _id,
  } = item;
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const isDisabled = available_seats === 0 || isAdmin || isInstructor;

  const handleOnSelectCourse = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = {
        classItemId: _id,
        class_name,
        class_image,
        price,
        email: user?.email,
        paymentStatus: 0, //unpaid
      };
      fetch("https://summer-camp-school-server-mirazum.vercel.app/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            onSuccessSelect();
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "classes added ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warninhg",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div
      className="card card-compact w-96 bg-base-100  shadow-xl"
      style={{ backgroundColor: !available_seats > 0 && "red" }}
    >
      <figure>
        <img src={class_image} alt="Shoes"  style={{height:'200px', width:'300px'}} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{class_name}</h2>
        <p className="font-semibold">Instructor: {instructor_name}</p>
        <p>Available seats:{available_seats}</p>
        <p>Price:{price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            disabled={isDisabled}
            onClick={() => handleOnSelectCourse(item)}
          >
            Select
          </button>
        </div>
      </div>
      l
    </div>
  );
};

export default ClassesItem;
