

const Class = ({item}) => {
    // console.log(item)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="my-2 p-2 rounded-sm shadow-xl"  src={item.class_image} alt="" style={{height:'200px', width:'300px'}} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.class_name}
            <div className="badge badge-secondary">Highly Demand</div>
          </h2>
         <p>Enrolled: {item.enrolled}</p>
         </div>
      </div>
    );
};

export default Class;
