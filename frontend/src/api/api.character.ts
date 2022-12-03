export const getAllCharData = async (data: any) => {
  try {
    const response = await fetch('http://localhost:5050/api/character/ ')
    const data = await response.json()
    return data
  } catch (error: any) {
    console.error(error)
  }
}

interface IcharData {
  name: string
  class: string
  attack: number
  defense: number
  health: number
  mana: number
  intelligence: number
  userId: 'userId'
}

export const createCharacter = async (charData: IcharData) => {
  const response = await fetch('http://localhost:5050/api/character/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(charData),
  })
  const data = await response.json()
  console.log(data)
}

export const getCharacter = async (userId: string) => {
  const response = await fetch(`http://localhost:5050/api/character/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  console.log(data)
}

export const updateCharacter = async (userId: string, updatedData: any) => {
  const response = await fetch(`http://localhost:5050/api/character/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
  const data = await response.json()
  console.log(data)
}

export const deleteCharacter = async (userId: string) => {
  const response = await fetch(`http://localhost:5050/api/character/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
}
