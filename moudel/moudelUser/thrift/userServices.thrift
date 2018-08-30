struct User{
1: string username,
2: string password,
3: string sex,
4: string age
}
    service UserService{
     void register(1: User user),
     User login(1: string username, 2: string password),
     void logout(1: username)
    }


