import React, { useEffect } from "react";
import styled from "styled-components";
import { removeUser } from "../ReduxGlobal/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import StarRateIcon from '@mui/icons-material/StarRate';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Page = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [orders, setOrders] = React.useState([]);

  const logOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  const showOrders = async () => {
    console.log(user);

    if (user.isAdmin) {
      const mainURL = "https://ojaserver.herokuapp.com";
      const url = `${mainURL}/api/user/${user._id}/food`;
      await axios.get(url).then((res) => {
        console.log(res);
        const arr = res.data.data;
        setOrders(arr);
        console.log(orders);
      });
    } else {
      const mainURL = "https://ojaserver.herokuapp.com";
      const url = `${mainURL}/api/user/${user._id}/food/orders`;
      await axios.get(url).then((res) => {
        console.log(res);
        const arr = res.data.data.orders;
        setOrders(arr);
        console.log(orders);
      });
    }
  };

  useEffect(() => {
    showOrders();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header>
          <LogoHold>
            <Logo src="/assets/logo.png" alt="logo" />
          </LogoHold>
          <NavHold>
            <span>Buy Food</span>
            <span>Search</span>
          </NavHold>
          <CartHold>
            <Nav
              onClick={logOut}
              style={{
                color: "var(--dark",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Logout
            </Nav>
            <Avatar src={user.avatar} />
          </CartHold>
        </Header>

        <CardHold>
          {orders ? (
            orders?.map((props) => (
              <Card key={props.id}>
                <Div1>
                  <img src={props.image} />
                </Div1>
                <Mid>
                  <div
                    style={{
                      width: "90%",
                      // backgroundColor:"red",
                      lineHeight: "20px",
                    }}
                  >
                    <Title>{props.title}</Title>
                    <Price>#{props.price}</Price>
                    <Qty>Quantity: {props.qty}</Qty>
                  </div>
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{props.description}</p>
                  </div>
                </Mid>
                <Button>Add To Cart</Button>
              </Card>
            ))
          ) : (
            <h1>Your Orders appeare here...</h1>
          )}
        </CardHold>

        <Link to="/order">
          <Buy />
        </Link>
      </Wrapper>
    </Container>
  );
};
export default Page;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  /* background-color: orangered; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Div = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("/burger.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 768px) {
    height: 300px;
    /* margin-top: 200px; */
  }
`;

const Div2 = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("/cookie.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 768px) {
    height: 300px;
    /* margin-bottom: 100px; */
    /* margin-top: 200px; */
  }
`;
const Header = styled.div`
  width: 90%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    /* float: none; */

    /* text-align: right; */
  }
`;
const LogoHold = styled.div`
  cursor: pointer;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  height: 32px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const NavHold = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: gray;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;
const Nav = styled.h5`
  color: gray;
  font-weight: bold;
`;
const CartHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 18px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 20px;
`;
const CardHold = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 100px; */
  }
`;
const Card = styled.div`
  width: 350px;
  min-height: 300px;
  /* background-color: olivedrab; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  @media (max-width: 768px) {
    width: 80%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
  }
`;

const Div1 = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
    /* margin-top: 200px; */
  }
`;
const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
const Price = styled.span`
  color: green;
`;

const Qty = styled.div``;

const Buy = styled(RiAddCircleFill)`
  color: var(--dark);
  font-size: 50px;
  // padding: 20px;
  // width: 30px;
  // height: 30px;
  // border-radius: 100%;
  // background-color: var(--dark);
  position: fixed;
  // color: white;
  font-weight: 700;
  // font-size: 18px;
  bottom: 5%;
  right: 3%;
`;
// const Rate = styled.div``;
const Button = styled.div`
  width: 100%;
  height: 67px;
  background-color: #f54748;
  border-radius: 10px;
  /* display: flex; */
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-top: 25px;
`;
// const Footer = styled.div``;
// const Desc = styled.div``;

// <div
// style={{
//   width: "150px",
//   display: "flex",
//   justifyContent: "space-between",
// }}
// >
// <StarRateIcon
//   style={{
//     color: "#FFCE32",
//   }}
// />
// <StarRateIcon
//   style={{
//     color: "#FFCE32",
//   }}
// />
// <StarRateIcon
//   style={{
//     color: "#FFCE32",
//   }}
// />
// <StarRateIcon
//   style={{
//     color: "#FFCE32",
//   }}
// />
// <StarRateIcon
//   style={{
//     color: "#FFCE32",
//   }}
// />
// </div>

// <AddShoppingCartIcon />
