import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledErrorPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledErrorPageText = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;
export const StyledErrorPageParagraph = styled.div`
  text-align: center;
`;
export const StyledErrorPageHeader = styled.p`
  text-align: center;
  font-size: 80px;
  margin-bottom: 30px;
`;
export const StyledErrorPageNavigationItem = styled(Link)`
  text-align: center;
  color: #0d6efd;
  font-weight: 600;
  font-size: 30px;
  text-decoration: none;
  &:hover {
    color: #0a58ca;
  }
`;
