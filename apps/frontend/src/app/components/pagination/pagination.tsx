import styled from 'styled-components';
import i18n from '@tech-assessment/i18n';
import { PaginationItem } from './pagination-item';
import { PageSizeSelector } from './page-size-selector';
import { getPageNumbers } from './helpers/get-page-numbers';

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  pageSize: number;
  totalPages: number;
}

export const Pagination = ({
  count,
  page,
  onPageChange,
  pageSize,
  setPageSize,
  totalPages,
}: Props) => {
  return (
    <Wrapper>
      <div className="count">{i18n.t('count_results', { count })}</div>

      <div className="pagination">
        <PaginationItem
          isActive={false}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          isDisabled={page === 1}
        >
          {'<'}
        </PaginationItem>

        {getPageNumbers(page, totalPages).map((pageNumber, idx) =>
          pageNumber === '...' ? (
            <span key={`dots-${idx}`} style={{ padding: '0 4px' }}>
              ...
            </span>
          ) : (
            <PaginationItem
              key={pageNumber}
              isActive={pageNumber === page}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </PaginationItem>
          )
        )}

        <PaginationItem
          isActive={false}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          isDisabled={page === totalPages}
        >
          {'>'}
        </PaginationItem>
      </div>

      <PageSizeSelector
        onChange={(e) => setPageSize(Number(e.target.value))}
        pageSize={pageSize}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .count {
    font-size: 14px;
  }

  .pagination {
    display: flex;
    gap: 2px;
  }
`;
