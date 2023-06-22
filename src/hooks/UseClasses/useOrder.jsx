import { useContext } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProviders";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useOrder = (paymentStatus) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const isPaid = paymentStatus === "paid" ? 1 : 0;
  const { refetch, data: order = [] } = useQuery({
    queryKey: ["orders", user?.email],

    enabled: !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure(
        `/orders?email=${user?.email}&&paymentStatus=${isPaid}`
      );
      console.log("res from order", res);
      return res.data;
    },
  });
  return [order, refetch];
};

export default useOrder;
