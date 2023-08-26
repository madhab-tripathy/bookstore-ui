
import React, { useState,useContext, useEffect } from 'react';
import {Typography, Box, Grid, Card } from "@mui/material"
import useStyles from "../Styles"
import BookContext from '../Context/BookContext';

const Books = ()=>{
    const classes = useStyles();

    let {books,setBooks} = useContext(BookContext);
    if (!books) {
        return <div>Loading...</div>; // or any other loading indicator
    }
    
    return(
        <>  
            <Typography variant="h5" mx={4} my={4} fontWeight={600}>More Books</Typography>   
            <div className={classes.bookGrid}>
                <Grid className={classes.girdItems} container gap={6} maxWidth="xl">
                    {
                        books.map((book)=>
                            <Grid className={classes.gridImage} item>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" style={{height:"100%", width:"100%", objectFit:"center"}}/>
                            </Grid>
                        )
                    }
                </Grid>
                
            </div>
        </>
    );
}

export default Books;