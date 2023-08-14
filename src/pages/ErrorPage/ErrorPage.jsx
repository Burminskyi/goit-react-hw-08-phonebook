import {
  StyledErrorPageContainer,
  StyledErrorPageHeader,
  StyledErrorPageNavigationItem,
  StyledErrorPageParagraph,
  StyledErrorPageText,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <StyledErrorPageContainer>
      <StyledErrorPageHeader>Error 404</StyledErrorPageHeader>
      <StyledErrorPageText>
        <StyledErrorPageParagraph>
          Oops... Requested URL does not exits
        </StyledErrorPageParagraph>
        <StyledErrorPageParagraph>
          Check the correction of the URL and try again
        </StyledErrorPageParagraph>
      </StyledErrorPageText>
      <StyledErrorPageNavigationItem to="/">
          Go to Home page
        </StyledErrorPageNavigationItem>
    </StyledErrorPageContainer>
  );
};

export default ErrorPage;
