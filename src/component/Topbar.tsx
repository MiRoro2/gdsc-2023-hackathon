import styled from "styled-components";
import Logo from "../assets/oragi_horizontal.png";
import AvatarButton from "./AvatarButton";

const TopbarWrapper = styled.div`
    display : flex;
    min-height : 100px;
    align-items : space-between;
    padding : var(--min-padding);

`;

const LogoWrapper = styled.span`
    display : inline-block;
    max-width : 100px;
    max-height : 30px;
    
    img { 
        display : inline-block;
        width : 100%;
        height : 100%;
    }
`;
const TitleWrapper = styled.span``;


export function TopbarLogo() {
    return (
        <TopbarWrapper>
            <LogoWrapper><img src={Logo}/></LogoWrapper>
        </TopbarWrapper>
    );
}

export function TopbarBackButton(props:any) {
    return (
        <TopbarWrapper>
            <AvatarButton type="back"></AvatarButton>
            <TitleWrapper>
                {props.title}
            </TitleWrapper>
        </TopbarWrapper>
    );
}