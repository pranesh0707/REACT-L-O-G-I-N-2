import ReactDOM from 'react-dom/client';
import "./index.css";
import Footer from './footer';

const books = [
  { id: 1, title: "The Hidden Legacy", author: "Liam Walker", price: "$12.99", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 2, title: "Echoes of Destiny", author: "Sophia Carter", price: "$15.49", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
  { id: 3, title: "The Enchanted Hour", author: "Noah Bennett", price: "$9.99", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765" },
  { id: 4, title: "Whispers of the Unknown", author: "Olivia Martinez", price: "$11.75", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353" },
  { id: 5, title: "Shattered Illusions", author: "Daniel Reynolds", price: "$14.89", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f" },
  { id: 6, title: "Lost Between Worlds", author: "Ava Mitchell", price: "$13.59", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d" },
  { id: 7, title: "Chronicles of Time", author: "Elijah Parker", price: "$16.29", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377" },
  { id: 8, title: "The Eternal Secret", author: "Isabella Morgan", price: "$18.99", image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec" },
  { id: 9, title: "Mysteries of the Forgotten", author: "Benjamin Harrison", price: "$10.49", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 10, title: "Beyond the Edge", author: "Charlotte Williams", price: "$19.99", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353" },
  { id: 11, title: "Mysteries of the Forgotten", author: "Benjamin Harrison", price: "$10.49", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 12, title: "Beyond the Edge", author: "Charlotte Williams", price: "$19.99", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353" }
];

const BookList = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-6">📚 Explore Our Book Collection</h1>

      <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        {books.map((book) => (
          <div key={book.id} className="rounded-lg shadow-lg bg-white hover:shadow-xl hover:scale-105 duration-300 p-4 flex flex-col justify-between items-center w-[280px] mx-auto border border-gray-200">
            <img src={book.image} alt={book.title} className="h-44 w-full object-cover rounded-md" />
            <div className="flex flex-col items-center mt-3 text-center">
              <p className="font-bold text-lg">{book.title}</p>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-green-600 font-semibold text-lg mt-2">{book.price}</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
        <br></br>
        <br></br>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
