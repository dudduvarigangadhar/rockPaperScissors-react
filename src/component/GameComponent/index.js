import {ImgTag} from './styledComponents'

const GameComponent = props => {
  const {details, generateGame} = props
  const {id, imageUrl} = details

  const onGenerateGame = () => {
    generateGame(id)
  }
  return (
    <>
      <ImgTag src={imageUrl} onClick={onGenerateGame} />
    </>
  )
}

export default GameComponent
