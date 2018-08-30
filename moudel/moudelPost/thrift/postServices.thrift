struct Post{
1: string title,
2: string content,
3: string tag
}
    service PostService{
     void addPost(1: string title, 2: string content, 3: string tag),
     Post getPost(1: string title),
     void delPost(1: string title)
}

