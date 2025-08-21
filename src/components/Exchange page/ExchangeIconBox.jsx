import React from 'react';
import styled from 'styled-components';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



// React Component
const ExchangeIconbox = () => {

    const ExchangeIconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0px;
`;
    const Miniiconbox = styled.div`
  display: flex;
  justify-content: center;
  \begin{align*}
  width: 100%;
`;
    const Iconbox = styled.div`
    display: flex;
    gap: 10px;
    margin: 0px 20px; 
    padding: 0px 20px; 
    justify-content: start;
    flex-direction: column;
    border-left: 1px solid black; 

`;
    const MyIcon1 = styled(FaArrowUpRightFromSquare)`
    padding: 8px; 
    margin: 20px 0px;
    font-size: 50px;
    color: #333;
`;
    const MyIcon2 = styled(FaArrowUpRightFromSquare)`
    padding: 8px; 
    margin: 20px 0px;
    font-size: 50px;
    color: #333;
`;
    const Myparagraph = styled.p`
    padding: 8px; 
    font-size: 30px;
    color: #333;
`;

    return (
        <>
            <ExchangeIconBox>
                <Miniiconbox>
                    <Iconbox>
                        <MyIcon1 />
                        <Myparagraph>
                            <p>Earn interest on assets in active orders while awaiting execution.</p>
                        </Myparagraph>
                    </Iconbox>
                    <Iconbox>
                        <MyIcon2 />
                        <Myparagraph>
                            <p>Your order will be executed in full at the exact price you’ve set.</p>
                        </Myparagraph>

                    </Iconbox>
                </Miniiconbox>
            </ExchangeIconBox>
             
        </>
    );
};

export default ExchangeIconbox;
