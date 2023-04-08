// import React from "react";
// import styles from "./product.module.css";
// const ProductCard = ({ image, title, old_price, price, discount, rating }) => {
//   return (
//     <div className={styles.productCard}>
//       <img className={styles.card_img} src={image} alt={title} />
//       <p className={styles.title}>{title}</p>
//       <div className={styles.priceclass}>
//         <p className={styles.old_price}>Rs.{old_price}</p>
//         <p className={styles.price}>Rs.{price}</p>
//         <p className={styles.discount}>{discount}</p>
//       </div>
//       <p className={styles.rating}> {rating}</p>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react'
import styles from "./product.module.css";
// import { useNavigate } from 'react-router-dom';
import { Box, Badge,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
export const ProductCard = ({image, title, old_price, price, discount, rating}) => {
    // const navigate = useNavigate();
  return (
    <Box
    className={styles.productCard}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      border={"1px solid rgb(223, 223, 223)"}
      cursor={"pointer"}
      // onClick={() => {
      //  navigate(`/${category}/${_id}`);
      // }}
    >
      <Image src={image} alt="error" height={"232px"} margin={"auto"} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box fontSize="xl">
        ₹{price}
          <Box as="span" color="gray.600" fontSize="sm">
            /onwards
          </Box>
        </Box>
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="gray"
          mt={"10px"}
          h={"20px"}
          alignItems={"center"}
        >
          Free Delivery
        </Badge>
        <br />
        <Badge
          mt={"15px"}
          borderRadius="full"
          px="2"
          fontSize="md"
          color={"white"}
          // bgColor={
          //   rating >= 4
          //     ? "rgb(3, 141, 99)"
          //     : rating > 2
          //     ? "rgb(244, 182, 25)"
          //     : "red"
          // }
        >
          {rating}
          {/* <StarIcon color={"white"} height={"10px"} /> */}
        </Badge>
        <Box display="flex" mt="2" alignItems="center">
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
        ₹{old_price}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
          <Badge>{discount}</Badge>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
