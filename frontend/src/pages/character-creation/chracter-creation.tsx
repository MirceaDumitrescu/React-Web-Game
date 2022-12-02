import './character-creation.scss'
import { useEffect, useState, useMemo, useRef } from 'react'
import classes from './char_class.json'

type CharacterClass = {
  class: string
  ATK: number
  INT: number
  DEF: number
  HP: number
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
      selectedClass,
    })
  }, [characterName, selectedClass])

  const createCharacter = () => {
    console.log(charData)
  }

  const getCharData = async (data: any) => {
    try {
      const response = await fetch('http://localhost:5050/api/character/ ')
      const data = await response.json()
      return data
    } catch (error: any) {
      console.error(error)
    }
  }

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
            // ref={inputRef}
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
            ATK: <span>{selectedClass.ATK}</span>
          </div>
          <div className='char__stats__group'>
            INT: <span>{selectedClass.INT}</span>
          </div>
          <div className='char__stats__group'>
            DEF: <span>{selectedClass.DEF}</span>
          </div>
          <div className='char__stats__group'>
            HP: <span>{selectedClass.HP}</span>
          </div>
        </div>
        <button className='char__btn' onClick={createCharacter}>
          Create Character
        </button>
      </div>
      <div className='char__preview'>Your character here!</div>
    </div>
  )
}

export default CharacterCreation
