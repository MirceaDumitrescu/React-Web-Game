interface UserModel {
  uuid?: string
  username: string
  email: string
  password: string
  permissions?: object
  date?: string
}

export const registerUser = async (client: UserModel): Promise<any> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  }
  try {
    const response = await fetch('http://localhost:5050/api/auth/register', options)
    const data = await response.json()
    return data
  } catch (error: any) {
    console.error(error)
  }
}
