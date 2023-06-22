
import UseClasses from "../../../hooks/UseClasses/UseClasses";
import Class from "./Class/Class";



const PopularClass = () => {

    const [classes]= UseClasses()
    // console.log(classes)
    return (
        <div >
            <div className="bg-slate-300 rounded-2xl shadow-xl">
            <h2 className='text-center font-extrabold text-4xl m-3 p-6'>Popular Classes</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                classes?.slice(0,6).map((item)=><Class
                key={item._id}
                item={item}></Class>)
            }
        </div>
        </div>
    );
};

export default PopularClass;

