import React, {useState} from 'react';
import {useAppDispatch} from "@/hooks/hooks";
import Modal from "react-bootstrap/Modal";
import Dot from "@/components/svg/dot";
import {ProductImage} from "@/components/ProductImage";
import Button from "react-bootstrap/Button";
import Trashcan from "@/components/svg/trashcan";
import OrdersCard from "@/components/card/OrdersCard";

const BurgerButton = ({className, order}:any) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    console.log(order)
    return (
        <>
            <nav className={`navbar ${className}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation"
                            onClick={handleShow}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{order.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal__wrapper">
                        {order.products.map((el: any, index: number) => (
                            <div className="modal__container d-flex flex-row mb-5">
                                <div className="dot position-relative d-flex align-items-center justify-content-center w-25 ">
                                    <Dot color={el.id % 2 ? 'black' : '#CDDC39'} />
                                </div>
                                {
                                    el.image
                                        ? <ProductImage imageUrl={el.image} className='h-50'/>
                                        : null
                                }

                                <div className="title d-flex w-100">
                                    <h5 className="card-title">{el.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-success'>
                    <Button className='bg-transparent border-0' variant="secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button className='bg-white d-flex text-success border-0 rounded-5 px-4 align-items-center justify-content-center' variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default BurgerButton;