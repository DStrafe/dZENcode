import React, {useEffect} from 'react';
import MainContainer from "./MainContainer";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {actions as productsActions} from "@/slices/productsSlice";
import ProductCard from "@/components/card/ProductCard";
import {actions as ordersActions} from "@/slices/ordersSlice";

const Products = ({products}:any) => {
    const categories = useAppSelector(state => state.categories.categoriesList);
    const dispatch = useAppDispatch();
    const currentProducts = useAppSelector(state => state.products.currentProducts);



    useEffect(()=>{
        try {
            dispatch(productsActions.updateProducts(products.products))
        }
        catch (e) {
            console.log(e);
        }
    },[])


    const handleSelectChange = (e:any)=>{
        try{
            const selectedValue = e.target.value
            dispatch(productsActions.chooseCategory(selectedValue));
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <MainContainer>
            <main className="main d-flex">
                <div className="setting__form position-absolute d-flex align-items-center justify-content-around w-25">
                    <h3 className="orders__count">Продукты / {currentProducts.length}</h3>
                    <div className="type__select d-flex flex-row w-50 justify-content-around align-items-center">
                        <span className="type">Тип:</span>
                        <select className="form-select form-select-sm ms-2" aria-label="Выбрать тип" onChange={handleSelectChange}>
                            {categories.map((el) => (
                                <option key={el.key} value={el.key}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="products__list position-absolute card-body ">
                    <div className="position-relative">
                        {currentProducts.map((product: any, index: number) => (
                            <ProductCard key={index} product={product}/>
                        ))}
                    </div>
                </div>
            </main>
        </MainContainer>
    );
};

export default Products;

export async function getStaticProps(context: any) {
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json();
    return {
        props: { products },
    };
}