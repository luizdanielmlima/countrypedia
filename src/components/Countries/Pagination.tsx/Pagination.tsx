import React, { FC, useMemo, useState } from 'react';

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

interface PaginationProps {
  pageSize: number;
  totalItens: number;
  handleChangePage: (pageNum: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  pageSize,
  totalItens,
  handleChangePage,
}) => {
  const [curPage, setcurPage] = useState(1);

  const numOfPages = useMemo(() => {
    const pages = Math.floor(totalItens / pageSize);
    console.log('pages: ', pages);

    return pages;
  }, [pageSize, totalItens]);

  const goToFirst = () => {
    setcurPage(1);
  };
  const goToPrevious = () => {
    if (curPage !== 1) {
      setcurPage((prevState) => prevState - 1);
    }
  };
  const goToNext = () => {
    if (curPage !== numOfPages) {
      setcurPage((prevState) => prevState + 1);
    }
  };
  const goToLast = () => {
    setcurPage(numOfPages);
  };

  return (
    <PaginationWrapper>
      <BsChevronDoubleLeft onClick={goToFirst} />
      <BsChevronLeft onClick={goToPrevious} />
      <PaginationInfo>
        <PaginationSeparator>Page</PaginationSeparator>
        <PaginationValue>{curPage}</PaginationValue>
        <PaginationSeparator>of</PaginationSeparator>
        <PaginationValue>{numOfPages}</PaginationValue>
      </PaginationInfo>
      <BsChevronRight onClick={goToNext} />
      <BsChevronDoubleRight onClick={goToLast} />
    </PaginationWrapper>
  );
};

export default Pagination;
