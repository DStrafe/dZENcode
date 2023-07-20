import React from 'react';
import Dot from "@/components/svg/dot";
import {ProductImage} from "@/components/ProductImage";
import DeleteModal from "@/components/DeleteModal";
import {actions as ordersActions} from "@/slices/ordersSlice";
import {useAppSelector} from "@/hooks/hooks";
import Button from "react-bootstrap/Button";
import Cross from "@/components/svg/cross";

const ActiveProduct = ({activeProducts, isChecked}) => {

    return (
        <div
            className={`orders__products p-3 position-absolute card-body d-flex flex-column  ${isChecked ? 'opacity-100' : 'opacity-0'} bg-white border-1 rounded-2 border-black`}>
            <div>
                <h5>
                    {activeProducts.title}
                </h5>
            </div>
            <div
                className='add__product setting__form position-relative d-flex flex-row align-items-center justify-content-around h-100'>
                <div>
                    <Button
                        className='add__btn text-white rounded-circle bg-success border-0 shadow-lg d-flex flex-row align-items-center'>
                        +
                    </Button>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <span className=' me-5 text-success d-flex flex-row align-items-center'>Добавить продукт</span>
                </div>
            </div>
            <div className="position-relative">
                {activeProducts && activeProducts.products && activeProducts.products.map((product: any, index: number) => (
                    <div className='ali'>
                        <div className='d-flex flex-row my-2 border-top border-bottom border-black'>
                            <div
                                className="dot position-relative d-flex align-items-center justify-content-center w-25 ">
                                <Dot color={product.id % 2 ? 'black' : '#CDDC39'}/>
                            </div>
                            <div className="title d-flex w-100">
                                <ProductImage imageUrl={product.image}/>
                            </div>
                            <div className="title d-flex w-100">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                            <div className="title d-flex w-100">
                                <h5 className="card-title">{product.id % 2 ? <span>В ремонте</span> :
                                    <span className='text-success'>Доступно</span>}</h5>
                            </div>
                            <div className="delete__post d-flex w-50 align-items-center  justify-content-center">
                                <DeleteModal product={product} func={ordersActions.deleteActiveProduct}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            );
            };

            export default ActiveProduct;
