import React, { FC } from 'react';

import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

import {
  PageTotals,
  PaginationButton,
  PaginationInfo,
  PaginationSeparator,
  PaginationValue,
  PaginationWrapper,
} from './Pagination.styled';

interface PaginationProps {
  pageNumber: number;
  numOfPages: number;
  pageItens: number;
  handlePaginationAction: (action: string) => void;
}

const Pagination: FC<PaginationProps> = ({
  pageNumber,
  numOfPages,
  pageItens,
  handlePaginationAction,
}) => {
  return (
    <PaginationWrapper>
      <PageTotals>
        <p>Countries:&nbsp;</p>
        <p>{pageItens}</p>
      </PageTotals>
      <PaginationButton
        type="button"
        aria-label="first page"
        onClick={() => handlePaginationAction('first')}
      >
        <BsChevronDoubleLeft />
      </PaginationButton>
      <PaginationButton
        type="button"
        aria-label="previous page"
        onClick={() => handlePaginationAction('previous')}
      >
        <BsChevronLeft />
      </PaginationButton>
      <PaginationInfo>
        <PaginationSeparator>Page</PaginationSeparator>
        <PaginationValue>{pageNumber}</PaginationValue>
        <PaginationSeparator>of</PaginationSeparator>
        <PaginationValue>{numOfPages}</PaginationValue>
      </PaginationInfo>
      <PaginationButton
        type="button"
        aria-label="next page"
        onClick={() => handlePaginationAction('next')}
      >
        <BsChevronRight />
      </PaginationButton>
      <PaginationButton
        type="button"
        aria-label="last page"
        onClick={() => handlePaginationAction('last')}
      >
        <BsChevronDoubleRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
