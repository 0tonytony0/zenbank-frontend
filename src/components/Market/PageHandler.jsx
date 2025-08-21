// Pagination.js
import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationContainer = styled.div`
  margin: 0px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #b0bac4;
  font-family: Arial, sans-serif;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#0f0f0f" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#4c566a")};
  border: ${(props) => (props.active ? "1px solid #c0c0c0" : "none")};
  border-radius: 6px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    color: #fff;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #5eead4;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  gap: 4px;

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;

const Ellipsis = styled.span`
  color: #4c566a;
`;

const Pagehandler = ({ currentPage = 1, totalPages = 9, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i <= 3 || i === totalPages || i === currentPage || i === currentPage + 1 || i === currentPage - 1) {
      pageNumbers.push(i);
    } else if (
      (i === 4 && currentPage > 4) ||
      (i === totalPages - 1 && currentPage < totalPages - 3)
    ) {
      pageNumbers.push("...");
    }
  }

  const handleClick = (page) => {
    if (page !== "..." && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <PaginationContainer>
      <NavButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <FaChevronLeft size={12} />
        Previous
      </NavButton>
      {pageNumbers.map((num, idx) =>
        num === "..." ? (
          <Ellipsis key={idx}>...</Ellipsis>
        ) : (
          <PageButton key={num} active={num === currentPage} onClick={() => handleClick(num)}>
            {num}
          </PageButton>
        )
      )}
      <NavButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Next
        <FaChevronRight size={12} />
      </NavButton>
    </PaginationContainer>
  );
};


export default Pagehandler;
