struct User{
1: string username,
2: string password,
3: string sex,
4: string age
}
    service UserService{
     void registUser(1: string username, 2: string password, 3: string sex, 4: string age),
     User login(1: string username, 2: string password),
     void logout(1: string username)
    }


