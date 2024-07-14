import {Component, React} from 'react'
// import React from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import GameComponent from '../GameComponent'

import {
  AppContainer,
  ScoreContainer,
  Paragraph,
  ScoreViewContainer,
  ScoreCardContainer,
  ScoreHeading,
  PopContainer,
  IconButton,
  PopUpImg,
  CloseContainer,
  DivContainer,
  ImgContainer,
  ModalContainer,
  SuperAppContainer,
  PlayButtons,
  RulesButton,
  ResultContainer,
} from './styledComponents'
import {ImgTag} from '../GameComponent/styledComponents'

class RockPaperScissors extends Component {
  state = {score: 0, isGenerated: false, imageId: '', generatedId: ''}

  generateGame = id => {
    const generatedNumber = Math.floor(Math.random() * 3)
    console.log(generatedNumber, id)
    this.setState(prevState => ({
      isGenerated: !prevState.isGenerated,
      imageId: id,
      generatedId: generatedNumber,
    }))
  }

  resultView = () => {
    const {imageId, generatedId} = this.state
    const {choicesList} = this.props
    const filterImg = choicesList.filter(eachImg => eachImg.id === generatedId)
    console.log(filterImg)
    console.log(choicesList[imageId].imageUrl)
  }

  render() {
    const {choicesList} = this.props
    const {isGenerated} = this.state
    return (
      <SuperAppContainer>
        <AppContainer>
          <ScoreContainer>
            <ScoreCardContainer>
              <div>
                <Paragraph>ROCK</Paragraph>
                <Paragraph>PAPER</Paragraph>
                <Paragraph>SCISSORS</Paragraph>
              </div>
              <ScoreViewContainer>
                <ScoreHeading>Score</ScoreHeading>
              </ScoreViewContainer>
            </ScoreCardContainer>
          </ScoreContainer>
          {isGenerated === true ? (
            <ResultContainer>
              <h1>Generated</h1>
              {this.resultView()}
            </ResultContainer>
          ) : (
            <PlayButtons>
              {choicesList.map(item => (
                <GameComponent
                  details={item}
                  key={item.id}
                  generateGame={this.generateGame}
                />
              ))}
            </PlayButtons>
          )}
        </AppContainer>

        <PopContainer>
          <Popup
            trigger={<RulesButton type="button">RULES</RulesButton>}
            contentStyle={{width: '645px'}}
            modal
            nested
          >
            {close => (
              <ModalContainer>
                <DivContainer>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Mute volume"
                  >
                    <RiCloseLine />
                  </button>
                </DivContainer>

                <ImgContainer>
                  <PopUpImg src=" https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" />
                </ImgContainer>
              </ModalContainer>
            )}
          </Popup>
        </PopContainer>
      </SuperAppContainer>
    )
  }
}

export default RockPaperScissors
