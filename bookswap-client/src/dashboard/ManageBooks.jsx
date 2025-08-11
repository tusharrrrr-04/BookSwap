import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  
  //delete a book
  const handleDelete =(id) =>{
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      alert("Book Deleted Successfully!!")
      // setAllBooks(data)
    })
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

      {/* table for book data */}
      <Table className="lg:w-[1180px]">
        <TableHead>
          <TableRow>
            <TableHeadCell>No.</TableHeadCell>
            <TableHeadCell>Book name</TableHeadCell>
            <TableHeadCell>Author name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Prices</TableHeadCell>
            <TableHeadCell>
              <span>Edit or Manage</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        {allBooks.map((book, index) => (
          <TableBody className="divide-y" key={book._id}>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </TableCell>
              <TableCell>{book.authorName}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>$10.00</TableCell>
              <TableCell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 mr-5"
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-600 py-2 px-4 rounded font-semibold text-white hover:bg-sky-600">Delete</button>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooks;
