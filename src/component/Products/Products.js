

const Products = (props) => {

    const productCard = props.productList.map((item, index) => {
        return (
            <div className="w-full p-4 md:w-1/2 lg:w-1/4" key={index}>
                <a className="relative block h-48 overflow-hidden rounded">
                    <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src={`/img/${item.prodname}.jpg`} />
                </a>
                <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">價格：{item.price}</h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">{item.prodname}</h2>
                    <p className="mt-1">數量：{item.quantity}</p>
                </div>
            </div>
        );
    });

    return (
        <section className="min-h-screen body-font text-gray-600 ">
            <div className="container mx-auto px-5 py-10">
                <div className="-m-4 flex flex-wrap">
                    {productCard}
                </div>
            </div>
        </section>
    );
};

export default Products;