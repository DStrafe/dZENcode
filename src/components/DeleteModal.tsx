import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Trashcan from "@/components/svg/trashcan";
import {useAppDispatch} from "@/hooks/hooks";
import Dot from "@/components/svg/dot";
import {ProductImage} from "@/components/ProductImage";

function DeleteModal({product, func}:any) {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = ()=>{
        setShow(false);
        dispatch(func(product.id));
    }
    return (
        <>
            <button className='bg-transparent border-0' onClick={handleShow}>
                <Trashcan />
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вы уверены, что хотите удалить этот приход?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal__wrapper">
                        <div className="modal__container d-flex flex-row">
                            <div className="dot position-relative d-flex align-items-center justify-content-center w-25 ">
                                <Dot color={product.id % 2 ? 'black' : '#CDDC39'} />
                            </div>
                            {
                                product.images
                                    ? <ProductImage imageUrl={product.images[0]} className='h-50'/>
                                    : null
                            }

                            <div className="title d-flex w-100">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-success'>
                    <Button className='bg-transparent border-0' variant="secondary" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button className='bg-white d-flex text-danger border-0 rounded-5 px-4 align-items-center justify-content-center' variant="primary" onClick={handleDelete}>
                        <Trashcan color='red'/> Удалить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;