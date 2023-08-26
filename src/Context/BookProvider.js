import React,{useState,useEffect} from "react";
import BookContext from "./BookContext";
import axios from "axios";

const BookProvider = ({children})=>{
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const fetchData = async ()=>{
        try {
            const harryPotter = await axios.get("https://www.googleapis.com/books/v1/volumes",{
                params:{
                    q: "harry+potter"
                } 
            });
            
            const sherlockHolmes = await axios.get("https://www.googleapis.com/books/v1/volumes",{
                params:{
                    q: "sherlock+holmes"
                }
            });
            const combined = [...harryPotter.data.items, ...sherlockHolmes.data.items];
            setBooks(combined);
        }catch (error) {
            console.error('Error fetching data:', error);
        }finally {
            setLoading(false); // Set loading to false after fetching, whether successful or not
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    if (loading) {
        return <div>Loading...</div>;
    }
    return(
        <BookContext.Provider value={
            {
                books:books,
                setBooks:setBooks
            }
        }>

            {children}
        </BookContext.Provider>
    );
}

export default BookProvider;


