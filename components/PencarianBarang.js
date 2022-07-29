import { Modal, Button } from 'react-bootstrap'
import * as Icon from 'react-feather'

export const PencarianBarang = ({ show, hide }) => {
    return (<>
        <Modal
            show={show}
            onHide={hide}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <Icon.Box /> Data Barang
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


            </Modal.Body>
        </Modal>

    </>)
}
