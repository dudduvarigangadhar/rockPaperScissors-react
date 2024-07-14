import {ImgTag, GameOptionButton, OptionsList} from './styledComponents'

const GameComponent = props => {
  const {details, generateGame} = props
  const {id, imageUrl} = details

  const onGenerateGame = () => {
    generateGame(id)
  }
  return (
    <OptionsList>
      <GameOptionButton type="button" onClick={onGenerateGame}>
        <ImgTag src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionsList>
  )
}

export default GameComponent
