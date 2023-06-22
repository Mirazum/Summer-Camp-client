

const InstructorsDetails = ({item}) => {
    const {class_image,instructor_name,instructor_email,class_name}= item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="my-2 p-2 rounded-sm shadow-xl"  src={class_image} alt="" style={{height:'200px', width:'300px'}} /></figure>
        <div className="card-body">
          <h2 className="card-title">
        {class_name}
          
          </h2>
          <p>Instructor:{instructor_name}</p>
         <p>Email: {instructor_email}</p>
         </div>
      </div>
    );
};

export default InstructorsDetails;