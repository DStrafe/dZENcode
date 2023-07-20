import React from 'react';
import MainContainer from './MainContainer';
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import Button from "react-bootstrap/Button";
import OrdersCard from "@/components/card/OrdersCard";
import {actions as ordersActions} from "@/slices/ordersSlice";
import ActiveProduct from "@/components/card/ActiveProduct";
import Cross from "@/components/svg/cross";

function Home() {

    const currentOrders = useAppSelector(state => state.orders.currentOrders);
    const isChecked = useAppSelector(state => state.orders.orders.some((order) => order.checked === true))

    const activeProducts = useAppSelector((state) => state.orders.activeProducts);

    const dispatch = useAppDispatch();

    const collapseModal = () => {
        dispatch(ordersActions.setChecked({collapse: true }));
    };


    return (
        <MainContainer>
            <main className="main d-flex">
                <div className="setting__form position-absolute d-flex align-items-center justify-content-center w-25">
                    <div className="type__select d-flex flex-row w-50 justify-content-around align-items-center">
                        <Button
                            className='d-flex bg-success border-0 rounded-circle align-items-center justify-content-center shadow-lg'>
                            +
                        </Button>
                    </div>
                    <h3 className="orders__count">Приходы / {currentOrders.length}</h3>
                </div>
                <div className={`orders__list position-absolute card-body ${isChecked ? 'w-50' : 'w-75'}`}>
                    <div className="position-relative">
                        {currentOrders.map((order: any, index: number) => (
                            <OrdersCard key={index} order={order}/>
                        ))}
                    </div>
                </div>
                <div>
                    <Button
                        onClick={collapseModal}
                        className={`rounded-circle bg-white d-flex align-items-center border-0 justify-content-center p-2 shadow z-5 position-absolute border-black cross ${isChecked ? 'opacity-100' : 'opacity-0'}`}>
                        <Cross color='grey'/>
                    </Button>
                </div>
                        <ActiveProduct activeProducts={activeProducts} isChecked={isChecked}/>

            </main>
        </MainContainer>
    );
}

export default Home;



