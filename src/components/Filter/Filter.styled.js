import { InputGroup } from 'react-bootstrap';
import { styled } from 'styled-components';


export const StyledFilterWrap = styled.div`
  display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 12px;
    gap: 8px;
`;

export const StyledFilterLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin: auto;
`;

export const StyledFilterInputForm = styled(InputGroup)`
  width: 300px;
`;