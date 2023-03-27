(()=>{
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }
  login({email: "random@email.com", password: 123445})
})()
