import styled from 'styled-components';

const FlexWrapper = styled.div`
display: flex;
flex-direction: ${props => props.column ? "column" : "row"};
flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
justify-content: ${props => props.justify};
align-items: ${props => props.align};
align-content: ${props => props.content};
`

export default FlexWrapper;

