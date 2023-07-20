import React, {Suspense, useState} from 'react';
import {Spinner} from "react-bootstrap";
import Dot from "@/components/svg/dot";
import DeleteModal from "@/components/DeleteModal";
import Arrow from "@/components/svg/arrow";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {actions as ordersActions} from "@/slices/ordersSlice";

const OrdersCard = ({order}:any) => {

    const isChecked = useAppSelector(state => state.orders.orders[order.id].checked)

    const dispatch = useAppDispatch()

    const toggleShow = () => {
        dispatch(ordersActions.setChecked({
            id:order.id,
        }));
    };

    const renderOrderInfo = () => {

        return (
            <div className={`col-md-8 w-100 align-items-center d-flex flex-row`}>
                <div className="card-body d-flex flex-row align-items-center justify-content-around w-100">
                    <div className="title d-flex w-100 ">
                        <h5 className="card-title">{order.title}</h5>
                    </div>
                    <div className="groups d-flex w-100 justify-content-around align-items-center">
                        <div>
                            <nav className={`navbar`}>
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                            aria-expanded="false" aria-label="Toggle navigation"
                                            onClick={toggleShow}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                            <span>{order.number}</span>
                            <span>Продуктов</span>
                        </div>
                        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                            <p>{order.date}</p>
                        </div>
                        <div className="price d-flex flex-column w-100">
                            <p className="card-text text-success">{order.price + '$'}</p>
                            <p className="card-text text-success-emphasis">{Math.round(order.price * 37) + ' UAH'}</p>
                        </div>
                        <div className="delete__post w-100">
                            <button className={`position-absolute trash bg-transparent border-0 ${isChecked ?'opacity-0 z-0' : 'opacity-100 z-1'}`}>
                                <DeleteModal product={order} func={ordersActions.deleteOrder}/>
                            </button>
                        </div>

                    </div>

                </div>
                <div className={`arrow position-relative bg-dark-subtle d-flex ${isChecked ?'opacity-100 z-1' : 'opacity-0 z-0'} align-items-center justify-content-center rounded-end-1`}>
                    <Arrow color='grey'/>
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
                        <Dot color={order.id % 2 ? 'black' : '#CDDC39'} />
                    </div>
                    {renderOrderInfo()}
                </Suspense>
            </div>
        </div>
    );
};

export default OrdersCard;