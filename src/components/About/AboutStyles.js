import styled, { keyframes} from 'styled-components';

export const LeftSection = styled.div`
  width: 69%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`
export const Img = styled.img`
    width: 300px;
    height: 250px;
    position: relative;
    top: -24px;
    left: -30px;
    object-fit: scale-down;
`
const changeBG = keyframes`
0% {
  background: #1388c7;
}
50% {
  background: #B133FF;
}
100% {
  background: #1388c7;
}
`

export const Divi = styled.div`
    position: absolute;
    right : 40px;
    top: 185px;
    width: 280px;
    height: 250px;
    margin: auto;
    padding: 15px 10px;
    zindex: -1;

    @media ${(props) => props.theme.breakpoints.sm} {
        visibility: hidden;
      }
    @media ${(props) => props.theme.breakpoints.md} {
        visibility: hidden;
      }
    @media ${(props) => props.theme.breakpoints.lg}{
        visibility: hidden;
    }
    animation: ${changeBG} 5s ease infinite;
`;
