import UseClasses from "../../hooks/UseClasses/UseClasses";
import Instructor from "../Instructor/Instructor";

const PopularInstructors = () => {
  const [classes] = UseClasses();
  
  const uniqueInstructors = classes
    .filter((classItem, index, self) => {
      return (
        self.findIndex(
          (c) => c.instructor_name === classItem.instructor_name
        ) === index
      );
    })

  // console.log(uniqueInstructors, "unique-instructor");

  return (
    <div>
      <div className="bg-slate-300 rounded-2xl shadow-xl">
        <h2 className="text-center font-extrabold text-4xl m-3 p-6">
          Popular Instructors
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {uniqueInstructors?.slice(0, 6).map((item) => (
          <Instructor key={item._id} item={item}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
