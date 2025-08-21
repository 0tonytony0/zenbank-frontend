import React from "react";
import styled from "styled-components";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPlusSlashMinus } from "react-icons/bs";
import { CiBank, CiSquareChevRight } from "react-icons/ci";
import CardSimImg from "../../assets/cardsimply.jpg";

function CardSimplify() {
    const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    background-color: #0D0D2B;
    padding: 40px 20px;
  `;

    const CardMidsec = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    }
  `;

    const CardMidBox = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 0px 0;
      justify-content: space-between;
      gap: 30px;
    }
  `;

    const CardMidBox2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;
    justify-content: space-between;
    gap: 30px;

    
     @media (max-width: 768px) {
      
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 30px 0;
      justify-content: space-between;
      gap: 30px;
    }
  `;

    const CardHead1 = styled.h1`
    color: white;
    font-size: 40px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `;

    const Cardtxt1 = styled.p`
    color: white;
    font-size: 20px;
    max-width: 700px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

    const CardHead2 = styled.div`
    flex: 1;
    display: flex;
    color: white;
    justify-content: center;
  `;

    const TextBox1 = styled.div`
    max-width: 500px;
    color: white;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
    }
  `;

    const Cardtxt2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    color: white;
    align-items: flex-start;
  `;

    const CardIconBox = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 20px;
    max-width: 500px;
  `;

    const CardBoxPoints = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px;
    border-bottom: 2px solid black;
    font-size: 18px;
    color: white;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 16px 10px;
    }
  `;

    const LinkLineP = styled.p`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font-weight: 500;
    cursor: pointer;
  `;

    return (
        <CardContainer>
            <CardMidsec>
                <CardMidBox>
                    <CardHead1>Spend with peace of mind.</CardHead1>
                    <Cardtxt1>Manage your Syzyky Card in real time with just a few taps.</Cardtxt1>
                </CardMidBox>

                <CardMidBox2>
                    <CardHead2>
                        <TextBox1>
                            <img src={CardSimImg} alt="AI Key Card" />
                        </TextBox1>
                    </CardHead2>

                    <Cardtxt2>
                        <CardIconBox>
                            <CardBoxPoints>
                                <HiOutlineDocumentText size={30} />
                                Import your Syzyky transaction history.
                            </CardBoxPoints>
                            <CardBoxPoints>
                                <BsPlusSlashMinus size={30} />
                                Manage your balances and limits instantly.
                            </CardBoxPoints>
                            <CardBoxPoints>
                                <CiBank size={30} />
                                Connect your Syzyky to your bank accounts.
                            </CardBoxPoints>

                            <LinkLineP>
                                Learn more about Syzyky's top-tier infrastructure
                                <CiSquareChevRight />
                            </LinkLineP>
                        </CardIconBox>
                    </Cardtxt2>
                </CardMidBox2>
            </CardMidsec>
        </CardContainer>
    );
}

export default CardSimplify;
