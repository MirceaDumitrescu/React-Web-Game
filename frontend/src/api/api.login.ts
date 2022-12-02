interface UserModel {
  email: string
  password: string
}

export const loginUsername = async (client: UserModel): Promise<any> => {
  const userData = {
    email: client.email,
    password: client.password,
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }
  try {
    const response = await fetch('http://localhost:5050/api/auth/login', options)
    const data = await response.json()
    return data
  } catch (error: any) {
    console.error(error)
  }
}
