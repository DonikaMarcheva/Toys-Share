const Path ={
    Home: "/",
    About:"/about",
    Add:"/add",
    Edit:"/catalog/edit/:toyId",
    Catalog:"/catalog",
    ToyDetails:`/catalog/:toyId`,
    Map:`/catalog/:toyId/:toyAddress`,
    Services:"/services",
    Login:"/login",
    Register:"/register",
    Logout:'/logout',
    NotFound:'*'
}

export default Path;