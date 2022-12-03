import './character-creation.scss'
import { useEffect, useState, useMemo } from 'react'
import classes from './char_class.json'
import { createCharacter, updateCharacter, deleteCharacter } from '../../api/api.character'

type CharacterClass = {
  class: string
  attack: number
  defense: number
  health: number
  mana: number
  intelligence: number
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
    <div className='char'>
      <div className='char__container'>
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
        <button
          className='char__btn'
          onClick={() => {
            createCharacter
          }}
        >
          Create Character
        </button>
      </div>
      <div className='char__preview'>Your character here!</div>
    </div>
  )
}

export default CharacterCreation
