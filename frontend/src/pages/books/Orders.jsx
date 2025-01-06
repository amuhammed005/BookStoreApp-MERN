import { useAuth } from "../../../context/AuthContext";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";

const Orders = () => {
  const { currentUser } = useAuth();
  console.log("Current User: ", currentUser);
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email);
  console.log("Orders data:", orders);
  console.log("Current user email", currentUser.email);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching orders</div>;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold m3-2">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No orders found</div>
      ) : (
        <div className="gap-4">
          {orders.map((order, index) => (
            <div key={index}>
              <p className="mt-2 mb-1 bg-secondary text-white w-8 p-1 font-semibold rounded-md">
                #{index + 1}
              </p>
              <h3 className="font-semibold text-lg mb-2">
                OrderId: {order?._id}
              </h3>
              <p className="mb-2 text-small text-gray-700">
                Name: {order?.name}
              </p>
              <p className="mb-2 text-small  text-gray-700">
                Email: {order?.email}
              </p>
              <p className="mb-2 text-small text-gray-700">
                Phone: {order?.phone}
              </p>
              <p className="mb-2 text-small text-gray-700">
                Total Price: {order?.totalPrice}
              </p>
              <div className="mb-2">
                <p className="font-semibold text-md">Address:</p>
                <p className=" text-gray-700">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <div className="mb-2">
                <p className="font-semibold text-md">Product ID:</p>
                {order.productIds.map((productId) => (
                  <li className="list-none text-gray-700" key={productId}>
                    {productId}
                  </li>
                ))}
              </div>
              <div className="w-full h-[1px] bg-slate-200 my-4"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
