import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import UseClasses from "../../../hooks/UseClasses/UseClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  console.log(user)
  const [classes, , refetch] = UseClasses();

  const handleManageClass = (eventType, _id) => {
    Swal.fire({
      title: "Please write a comment",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: (comment) => {
        const data =
          eventType !== "feedback"
            ? { status: eventType, comment: comment }
            : { comment: comment };
            console.log(data)

        return axiosSecure(`/classes/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            data: JSON.stringify(data),
          }).catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((data) => {
      console.log(data);
      if (data.isConfirmed) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: "Class Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });

    // fetch(`https://summer-camp-school-server-mirazum.vercel.app/classes/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Coffee Updated Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });
  };

  return (
    <div className="w-full">
      {/* Rest of the component code */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>class Name</th>
              <th>instructor_name</th>
              <th>instructor_email</th>
              <th>Available seats:</th>
              <th>price</th>

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => {
              const isDisabled =
                item.status === "approved" || item.status === "denied";
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.class_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                        _id
                      </div>
                    </div>
                  </td>
                  <td>{item.class_name}</td>
                  <td>{item.instructor_name}</td>
                  <td>{item.instructor_email}</td>
                  <td className="text-center">{item.available_seats}</td>
                  <td className="text-center">{item.price}</td>
                  <td className="text-center">{item.status}</td>
                  <td>
                    <button
                      className="btn btn-ghost bg-yellow-500 text-white"
                      onClick={() => {
                        handleManageClass("feedback", item._id);
                      }}
                    >
                      Feedback
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-yellow-500 text-white"
                      disabled={isDisabled}
                      onClick={() => {
                        handleManageClass("approved", item._id);
                      }}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-yellow-500 text-white"
                      onClick={() => {
                        handleManageClass("denied", item._id);
                      }}
                      disabled={isDisabled}
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
