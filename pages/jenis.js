import React, { useState } from "react"
import Head from "next/head"
import Template from "../components/template/template"
import { Formjenis, Table } from "../components/jenis"
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-feather'


const Jenis = () => {
    const [show, setShow] = useState(false)
    const [action, setAction] = useState('add')
    const handleClose = () => {
        setShow(false)
    }
    return (<Template container={
        <>
            <Button className='btn btn-info btn-sm float-left' variant="primary" onClick={() =>
                setShow(true)

            } style={{
                'float': 'right',
                'color': '#fff'
            }}>
                <Icon.Plus /> Tambah jenis
            </Button>
            <br />
            <Formjenis show={show} handleClose={handleClose} action={action} />

            <Table />
        </>

    } />)
}

export default Jenis