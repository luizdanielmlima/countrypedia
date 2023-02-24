import React from 'react';

import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

import {
  PaginationInfo,
  PaginationSeparator,
  PaginationValue,
  PaginationWrapper,
} from './Pagination.styled';

const Pagination = () => {
  return (
    <PaginationWrapper>
      <BsChevronLeft />
      <BsChevronDoubleLeft />
      <PaginationInfo>
        <PaginationSeparator>Page</PaginationSeparator>
        <PaginationValue>1</PaginationValue>
        <PaginationSeparator>of</PaginationSeparator>
        <PaginationValue>5</PaginationValue>
      </PaginationInfo>
      <BsChevronRight />
      <BsChevronDoubleRight />
    </PaginationWrapper>
  );
};

export default Pagination;
