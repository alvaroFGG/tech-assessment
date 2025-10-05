import styled from 'styled-components';
import i18n from '@tech-assessment/i18n';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  pageSize: number;
}

export const PageSizeSelector = ({ onChange, pageSize }: Props) => {
  return (
    <Wrapper onChange={onChange} value={pageSize}>
      <option value={10}>10 / {i18n.t('page')}</option>
      <option value={25}>25 / {i18n.t('page')}</option>
      <option value={50}>50 / {i18n.t('page')}</option>
      <option value={100}>100 / {i18n.t('page')}</option>
    </Wrapper>
  );
};

const Wrapper = styled.select`
  border-radius: 5px;
  border: 1.5px solid #aab7be;
  height: 32px;
  padding: 0 8px;
  cursor: pointer;
`;
