// import { Link } from "react-router-dom";
import UseClasses from "../../hooks/UseClasses/UseClasses";
import ClassesItem from "./ClassesItem";

const Classes = () => {
  const [classes, , refetch] = UseClasses();
  const onSuccessSelect = () => {
    refetch();
  };
  const status = classes.filter((item) => item.status === "approved");
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {status.map((item) => (
          <ClassesItem
            key={item._id}
            item={item}
            onSuccessSelect={onSuccessSelect}
          ></ClassesItem>
        ))}
      </div>
    </div>
  );
};

export default Classes;
