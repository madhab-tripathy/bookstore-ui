import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    navbar:{
        backgroundColor: "#292828",
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    
    navbarLogo:{
        height:"50px",
        width:"70px",
        marginRight:"10px"
    },
    logoSubtitle:{
        fontSize:"14px !important",
        fontFamily:"Segoe UI Emoji !important",
        fontWeight:"100",
    },
    navbarInner:{
        display:"flex",
        alignItems:"flex-end"
    },
    searchContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    searchButton:{
        display:"flex",
        justifyContent:"center",
    },
    button:{
        borderRadius:"0 !important",
        fontWeight:"100 !important",
        color:"#E7E2E2CF !important",
        flexGrow:"0.5",
        border:"1px solid #E7E2E2CF"
    },
    navicons:{
        display:"flex",
        alignItems:"center",
    },
    navicon:{
        display:"flex",
        cursor:"pointer",
        color:"#E7E2E2CF"
    },
    navProfile:{
        height:"40px",
        width:"40px",
        borderRadius:"100%",
        cursor:"pointer",
        border:"2px solid #E7E2E2CF"
    },
    bookGrid:{
        padding:"0 2rem",
        // width:"100%"
    },
    girdItems:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    gridImage:{
        height:"250px",
        width:"180px",
        padding: "0 !important",
        cursor:"pointer",
    },
    popularBookCard:{
        display:"flex",
    }

}));
export default useStyles;