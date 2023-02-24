import React, { FC } from 'react';

import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

import {
  PageTotals,
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
      <BsChevronDoubleLeft
        onClick={() => handlePaginationAction('first')}
      />
      <BsChevronLeft
        onClick={() => handlePaginationAction('previous')}
      />
      <PaginationInfo>
        <PaginationSeparator>Page</PaginationSeparator>
        <PaginationValue>{pageNumber}</PaginationValue>
        <PaginationSeparator>of</PaginationSeparator>
        <PaginationValue>{numOfPages}</PaginationValue>
      </PaginationInfo>
      <BsChevronRight
        onClick={() => handlePaginationAction('next')}
      />
      <BsChevronDoubleRight
        onClick={() => handlePaginationAction('last')}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
