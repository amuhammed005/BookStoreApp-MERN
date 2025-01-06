import Order from "./order.model.js";

export const createOrder = async (req, res) => {
  try {
    console.log("Received Order Data:", req.body); // Debugging line
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).send({
      success: true,
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error); // Log full error
    res.status(500).send({
      message: "Failed to create order",
      error: error.message,
    });
  }
};

// get user orders
export const getUserOrders = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error.message);
    res.status(500).json("Failed to fetch orders");
  }
};
