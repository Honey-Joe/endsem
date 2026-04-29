import ProductCard from './ProductCard'


const Product = ()=>{
 
    const dataProd = 123

    const dataProd2 = 'hello'

    const dataProd3 = 'joe'
    return(
        <>
            <p>Hello Product Page</p>

            <ProductCard data={dataProd} data2={dataProd2} data3={dataProd3}></ProductCard>
        </>
    )
}

export default Product;