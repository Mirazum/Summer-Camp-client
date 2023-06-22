

import { Link } from "react-router-dom";
import UseClasses from "../../../hooks/UseClasses/UseClasses";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes] = UseClasses();
  console.log(classes);
  console.log(user);
  // Filter unique emails
  const uniqueEmails = classes.filter(
    (item) => item.instructor_email == user?.email
  );

  return (
    <div className="w-full">
      {/* Rest of the component code */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>class Name</th>
              <th>Enrolled Students:</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {uniqueEmails.map((email, index) => {
              return (
                <tr key={email._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={email.class_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{email.class_name}</td>
                  <td className="text-center">{email.enrolled}</td>
                  <td className="text-center">{email.status}</td>
                  <td>
                    <button className="btn btn-ghost bg-yellow-500 text-white">
                      Feedback
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/updateclass/${email._id}`}>
                      <button className="btn btn-ghost bg-yellow-500 text-white">
                        Update
                      </button>
                    </Link>
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

export default MyClass;
