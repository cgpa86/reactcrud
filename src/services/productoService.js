const KEYS ={
    productos:'productos',
    productoId:'productoId'
}
//Array con las categorías con sus respectivos IDs 

export const getCategoriaCollection = () => ([
{id:'1', title:'Conjunto'},
{id:'2', title:'Blusa'},
{id:'3', title:'Pantiblusa'},
{id:'4', title:'Chamarra'},
{id:'5', title:'Vestido'},
{id:'6', title:'Sueter'},
{id:'7', title:'Playera'},
{id:'8', title:'Saco'},
{id:'9', title:'Sudadera'},
{id:'10', title:'Zapato'},
{id:'11', title:'Bolsa'},
{id:'12', title:'Otro'},


])
//funcion para almacenar datos localmente

export function insertProductos(data) {
    let productos=getAllProductos();
    data['id'] = generateProductoId();
    productos.push(data)
    localStorage.setItem(KEYS.productos, JSON.stringify(productos));
}

    export function updateProducto(data) {
        let productos = getAllProductos();
        let recordIndex = productos.findIndex(x => x.id === data.id);
        productos[recordIndex] = { ...data }
        localStorage.setItem(KEYS.productos, JSON.stringify(productos));
    }


    export function deleteProducto(id) {
        let productos = getAllProductos();
        productos = productos.filter(x => x.id !== id)
        localStorage.setItem(KEYS.productos, JSON.stringify(productos));
    }
    


export function generateProductoId(){
    if(localStorage.getItem(KEYS.productoId) == null)
        localStorage.setItem(KEYS.productoId, '0')
    var id = parseInt(localStorage.getItem(KEYS.productoId))
    localStorage.setItem(KEYS.productoId, (++id).toString())
    return id;
}

export function getAllProductos(){
    if(localStorage.getItem(KEYS.productos) == null)
        localStorage.setItem(KEYS.productos, JSON.stringify([]))
  let productos =  JSON.parse(localStorage.getItem(KEYS.productos));
//mappíng categoriaId to categoria title
let categorias = getCategoriaCollection();
return productos.map(x =>({

    ...x,
    categoria : categorias[x.categoriaId-1].title
}))


}