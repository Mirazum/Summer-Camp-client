import UseClasses from "../../hooks/UseClasses/UseClasses";
import InstructorsDetails from "./InstructorsDetails";


const Instructors = () => {
    const[classes]= UseClasses()

    return (
        <div className="mt-10" >
        
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {
            classes?.map((item)=><InstructorsDetails
            key={item._id}
            item={item}></InstructorsDetails>)
        }
    </div>
    </div>
    );
};

export default Instructors;