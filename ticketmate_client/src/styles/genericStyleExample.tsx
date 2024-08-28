import { StyleSheet } from "../CustomTypesAndInterfaces/types";


/**...
 * 
 * This is meant as example of how to create a generic style object that can be used in a component.    
 * 
 * Creating an individual style object for each route or large component set is the best practice.
 * 
 * 
 */




export const genericStyleExample: StyleSheet = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "lightblue",
    },
    button: {
        padding: "10px",
        margin: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    heading: {
        fontSize: "2rem",
        color: "black",
    },
    input: {
        padding: "10px",
        margin: "10px",
        width: "200px",
    },
};