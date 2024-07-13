import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SuperAppContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  padding: 20px;
`

export const ScoreContainer = styled.div`
  height: 160px;
  border: 2px solid #ffffff;
  width: 60%;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ScoreViewContainer = styled.div`
  height: 120px;
  width: 150px;
  border: 9px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const Paragraph = styled.p`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 600;
`
export const ScoreHeading = styled(Paragraph)`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`
export const IconButton = styled.div`
  background-image: url('${props => props.imageUrl}');
`
export const PopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
// export const
export const PopUpImg = styled.img`
  height: 600px;
  width: 600px;
`
export const CloseContainer = styled.div`
  //   height: 500px;
  //   width: 1000px;
`
export const DivContainer = styled.div`
  //   text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const ImgContainer = styled(DivContainer)`
  //   padding-left: 30px;
  //   padding-right: 30px;
  text-align: center;
  padding-top: 15px;
  padding-right: 25px;
`

export const ModalContainer = styled.div``

export const PlayButtons = styled.div`
  width: 500px;
  text-align: center;
  margin: 0;
  height: 450px;
  margin-top: 5%;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  color: #223a5f;
  height: 30px;
  width: 100px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  outline: none;
`
export const GeneratedContainer = styled.div`
  height: 450px;
`
