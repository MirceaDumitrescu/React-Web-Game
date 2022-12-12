import './character-creation.scss'
import { useEffect, useState, useMemo } from 'react'
import classes from './char_class.json'
import { createCharacter } from '../../api/api.character'
import assasinSprite from '../../assets/chracter-sprites/assasin/assasin-gif.gif'
import mageSprite from '../../assets/chracter-sprites/mage/mage-gif.gif'
import warriorSprite from '../../assets/chracter-sprites/warrior/warrior-gif.gif'
import rangerSprite from '../../assets/chracter-sprites/ranger/ranger-gif.gif'
import torchMenu from '../../assets/interface_elements/create_element.gif'
import mageSymbol from '../../assets/chracter-sprites/mage/mage-symbol.gif'
import warriorSymbol from '../../assets/chracter-sprites/warrior/warrior-symbol.gif'
import assasinSymbol from '../../assets/chracter-sprites/assasin/assasin-symbol.gif'
import rangerSymbol from '../../assets/chracter-sprites/ranger/ranger-symbol.gif'

interface IcharSprites {
  [key: string]: string | any
}

type CharacterClass = {
  class: string
  attack: number
  defense: number
  health: number
  mana: number
  intelligence: number
  description?: string
  sprite?: string
  alt?: string
  symbol?: string
}

const charSprites: IcharSprites = {
  mageSprite: mageSprite,
  warriorSprite: warriorSprite,
  assasinSprite: assasinSprite,
  rangerSprite: rangerSprite,
  mageSymbol: mageSymbol,
  warriorSymbol: warriorSymbol,
  assasinSymbol: assasinSymbol,
  rangerSymbol: rangerSymbol,
}

function CharacterCreation() {
  const defaultClass: CharacterClass = useMemo(() => {
    return classes.find((item: CharacterClass) => item.class === 'Mage')
  }, [classes]) as CharacterClass

  const [selectedClass, setSelectedClass] = useState(defaultClass)
  const [characterName, setCharacterName] = useState('')
  const [charData, setCharData] = useState({})

  useEffect(() => {
    setCharData({
      name: characterName,
      ...selectedClass,
      userId: 'userId',
    })
    console.log(selectedClass)
  }, [characterName, selectedClass])

  return (
    <div className='overlay'>
      <div className='char'>
        <div className='char__container'>
          <img
            className='char__container__symbol'
            src={charSprites[selectedClass.symbol as unknown as string]}
          />
          <div>
            <input
              className='char__input'
              type='text'
              value={characterName}
              onChange={(e) => {
                setCharacterName(e.target.value)
              }}
              placeholder='Enter your character name...'
            />
          </div>
          <div className='char__config'>
            {classes.map((item: CharacterClass) => (
              <div key={item.class}>
                <button
                  className='char__btn'
                  onClick={() => {
                    setSelectedClass(() => item)
                  }}
                >
                  {item.class}
                </button>
              </div>
            ))}
          </div>
          <div className='char__stats'>
            <img className='char__stats__img' src={torchMenu} />
            <div className='char__stats__container'>
              <div className='char__stats__group'>
                ATK: <span>{selectedClass.attack}</span>
              </div>
              <div className='char__stats__group'>
                INT: <span>{selectedClass.intelligence}</span>
              </div>
              <div className='char__stats__group'>
                DEF: <span>{selectedClass.defense}</span>
              </div>
              <div className='char__stats__group'>
                HP: <span>{selectedClass.health}</span>
              </div>
            </div>
            <img className='char__stats__img' src={torchMenu} />
          </div>
          <button
            className='char__btn'
            onClick={() => {
              createCharacter
            }}
          >
            Create Character
          </button>
        </div>
        <div className='char__container'>
          <input className='char__preview__name' placeholder={characterName} />
          <div className='char__preview'>
            <img
              className='char__preview__img'
              src={charSprites[selectedClass.sprite as unknown as string]}
              alt={selectedClass.alt}
            />
          </div>
          <p className='char__preview__description'>{selectedClass.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCreation
