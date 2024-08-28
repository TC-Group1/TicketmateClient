import { Box, Typography } from "@mui/material";
import { genericStyleExample } from "./styles/genericStyleExample";
/** 
 * 
 * Example of using a generic style object in a component by passing through the style object with specified property
 *  reference to the sx prop.
 *  
 */
export const ThrowThisAwaySoon = () => {

    const styles = genericStyleExample;



  return (
    <Box>
      <Typography sx={styles.container}>Throw this away soon</Typography>
    </Box>
  );
}