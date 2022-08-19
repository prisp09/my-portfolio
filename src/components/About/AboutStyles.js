import styled from 'styled-components';

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

export const Divi = styled.div`
    position: absolute;
    right : 40px;
    top: 185px;
    width: 280px;
    height: 250px;
    background: #1388c7;
    margin: auto;
    padding: 15px 10px;

    @media ${(props) => props.theme.breakpoints.sm} {
        visibility: hidden;
      }
    @media ${(props) => props.theme.breakpoints.md} {
        visibility: hidden;
      }
    @media ${(props) => props.theme.breakpoints.lg}{
        z-index: -2;
    }
`;
