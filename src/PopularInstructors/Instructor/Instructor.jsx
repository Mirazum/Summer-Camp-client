

const Instructor = ({item}) => {
    const {class_image,instructor_name}= item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="my-2 p-2 rounded-sm shadow-xl"  src={class_image} alt="" style={{height:'200px', width:'300px'}} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.class_name}
          
          </h2>
         <p>Instructor: {instructor_name}</p>
         </div>
      </div>
    );
};

export default Instructor;

