import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isError, isLoading } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (payload) => {
    dispatch(addToCart(payload));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error encounted while loading book info</div>;

  return (
    <section className="min-h-screen mt-2">
      <div className="w-72 md:w-96 p-4 rounded-lg shadow-md">
        <h1 className="font-bold text-xl mb-4">{book.title}</h1>
        <div className="mb-4">
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className=" w-56 h-72 rounded border p-2"
          />
        </div>
        <div>
          <p className="mb-3">
            <span className="font-bold">Author:</span> Admin
          </p>
          <p className="mb-2">
            <span className="font-bold">Published: </span>
            {new Date(book.createdAt).toLocaleDateString()}{" "}
            {new Date(book.createdAt).toLocaleTimeString()}
          </p>

          <p className="mb-3">
            <span className="font-bold">Category:</span> {book.category}
          </p>
          <p className="mb-3">
            <span className="font-bold">Description:</span> {book.description}
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(book)}
          className="mb-4 flex items-center bg-primary hover:bg-secondary hover:text-white p-1 px-2 py-2 sm:px-6 rounded-md gap-3"
        >
          <FiShoppingCart className="" />
          <span className="font-normal text-sm">Add to Cart</span>
        </button>
      </div>
    </section>
  );
};

export default SingleBook;
