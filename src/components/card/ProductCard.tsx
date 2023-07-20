import React, { Suspense, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Dot from '@/components/svg/dot';
import {useAppDispatch} from "@/hooks/hooks";
import {actions as productsActions} from "@/slices/productsSlice";
import {ProductImage} from "@/components/ProductImage";
import DeleteModal from "@/components/DeleteModal";




const ProductAvailability = ({ product }: any) => {
    const renderInRepair = () => (
        <div className="d-flex flex-row align-items-center justify-content-around w-100">
            <div className="w-50">
                <p className="text-black fw-semibold">В ремонте</p>
            </div>
            <div className="w-50">
                <p>
                    с <span className="fw-semibold">06/04/2017</span>
                </p>
                <p>
                    по <span className="fw-semibold">06/04/2025</span>
                </p>
            </div>
            <div className="w-50 d-flex align-items-center justify-content-center">
                <p>Б/У</p>
            </div>
        </div>
    );

    const renderAvailable = () => (
        <div className="d-flex flex-row align-items-center justify-content-around w-100">
            <div className="w-50">
                <p className="text-success fw-semibold">Свободен</p>
            </div>
            <div className="w-75">
                <p>
                    с <span className="fw-semibold">06/04/2017</span>
                </p>
                <p>
                    по <span className="fw-semibold">06/04/2025</span>
                </p>
            </div>
            <div className="w-50 d-flex align-items-center justify-content-center">
                <p>Новый</p>
            </div>
        </div>
    );

    return (
        <div className="available d-flex align-items-center">
            {product.id % 2 ? renderInRepair() : renderAvailable()}
        </div>
    );
};

const ProductCard = ({ product }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useAppDispatch();

    const renderProductInfo = () => {
        if (!isVisible) {
            return null;
        }

        return (
            <div className="col-md-8 w-100 align-items-center">
                <div className="card-body d-flex flex-row align-items-center justify-content-around w-100">
                    <div className="title d-flex">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    <ProductAvailability product={product} />
                    <div className="price d-flex flex-column">
                        <p className="card-text text-success">{product.price + '$'}</p>
                        <p className="card-text text-success-emphasis">{Math.round(product.price * 37) + ' UAH'}</p>
                    </div>
                    <div className="groups d-flex w-75 justify-content-around align-items-center">
                        <p className="w-25">Длинное предлинное длиннючее название группы</p>
                        <p className="w-50">Христорождественский Александр</p>
                        <p className="w-25">Длинное предлинное длиннючее название прихода</p>
                        <div className="w-25 d-flex flex-column align-items-center justify-content-center">
                            <p>06/ 12</p>
                            <p>06/ Сен / 2017</p>
                        </div>
                        <div className="delete__post w-50">
                            <DeleteModal product={product} func={productsActions.deleteProduct}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`card mb-3 h-25 overflow-hidden`} id="collapseWidthExample">
            <div className="cards__container">
                <Suspense
                    fallback={
                        <Spinner animation="border" role="status" className="text-green">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                >
                    <div className="dot position-relative d-flex align-items-center justify-content-center w-25 ">
                        <Dot color={product.id % 2 ? 'black' : '#CDDC39'} />
                    </div>
                    <ProductImage imageUrl={product.images[0]} className='d-flex flex-row col-md-4 card__image align-items-center justify-content-center'/>
                    {renderProductInfo()}
                </Suspense>
            </div>
        </div>
    );
};

export default ProductCard;