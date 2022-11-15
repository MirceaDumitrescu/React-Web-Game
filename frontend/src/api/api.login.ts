interface UserModel {
  email: string
  password: string
}

export const logUser = async (client: UserModel): Promise<any> => {
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
  console.log(client)
  try {
    const response = await fetch('http://localhost:5050/api/auth/login', options)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error: any) {
    console.error(error)
  }
}
