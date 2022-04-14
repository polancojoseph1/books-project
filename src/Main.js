import MediaCard from "./Card";
import { useState, useEffect } from 'react';
import { axios } from 'axios';
export default function () {
  let [allBooks, setAllBooks] = useState([[]]);
  // useEffect(async () => {
  //   // let data = await axios.get("https://myfavaritebook.herokuapp.com/books");
  //   fetch("https://myfavaritebook.herokuapp.com/books")
  //     .then(res => res.json())
  //   .then(data => console.log(data))
  //   // console.log(data)
  // }, [])
  useEffect(() => {
    fetch("https://myfavaritebook.herokuapp.com/books")
    .then(res => res.json())
    .then(data => setAllBooks(data));
  }, [])
  
  console.log(allBooks)
  return (
    <div className="main">
      {allBooks.map((book) => <MediaCard book={ book }/>)}
    </div>
  )
}