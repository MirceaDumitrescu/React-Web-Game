import './character-creation.scss'
import { useEffect, useState, useMemo } from 'react'
import classes from './char_class.json'

type CharacterClass = {
  id: number
  name: string
  ATK: number
  INT: number
  DEF: number
  HP: number
}

function CharacterCreation() {
  const defaultClass: CharacterClass = useMemo(() => {
    return classes.find((item: CharacterClass) => item.name === 'Mage')
  }, [classes]) as CharacterClass

  const [selectedClass, setSelectedClass] = useState(defaultClass)

  useEffect(() => {
    console.log(selectedClass)
  }, [selectedClass])

  return (
    <div className='char'>
      <div className='char__container'>
        <div>
          <input className='char__input' type='text' placeholder='Enter your character name...' />
        </div>
        <div className='char__config'>
          {classes.map((item: CharacterClass) => (
            <div key={item.id}>
              <button
                className='char__btn'
                onClick={() => {
                  setSelectedClass(item)
                }}
              >
                {item.name}
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
        <button className='char__btn'>Create Character</button>
      </div>
      <div className='char__preview'>Your character here!</div>
    </div>
  )
}

export default CharacterCreation
