import React, { useState,useContext, useEffect } from 'react';
import {Typography, Box, Grid, Card,CardActionArea,CardMedia,CardContent } from "@mui/material"
import useStyles from "../Styles"
import BookContext from '../Context/BookContext';

const PopularBook = ()=>{
    const classes = useStyles();
    let [count, setCount] = useState(0);
    let {books,setBooks} = useContext(BookContext);
    if (!books) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return(
        <>  
            <div className={classes.popularBookCard}>
                <Grid className={classes.girdItems} container gap={6} maxWidth="xl">
                    {
                        // books.map((book)=>
                        
                        //     <Grid className={classes.gridImage} item>
                        //         <Card sx={{ maxWidth: 345 }}>
                        //             <CardActionArea>
                        //                 <CardMedia
                        //                 component="img"
                        //                 height="140"
                        //                 image={book.volumeInfo.imageLinks.thumbnail}
                        //                 alt="green iguana"
                        //                 />
                        //                 <CardContent>
                        //                 <Typography gutterBottom variant="h5" component="div">
                        //                     Lizard
                        //                 </Typography>
                        //                 <Typography variant="body2" color="text.secondary">
                        //                     Lizards are a widespread group of squamate reptiles, with over 6,000
                        //                     species, ranging across all continents except Antarctica
                        //                 </Typography>
                        //                 </CardContent>
                        //             </CardActionArea>
                        //         </Card>
                        //         <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" style={{height:"100%", width:"100%", objectFit:"center"}}/>
                        //     </Grid>
                        // )
                    }
                </Grid>
                
            </div>
        </>
    );
}

export default PopularBook;