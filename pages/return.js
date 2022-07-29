import React, { useState } from "react"
import Head from "next/head"
import Template from "../components/template/template"
import { Formreturn, Table } from "../components/return"
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-feather'


const Return = () => {
    const [show, setShow] = useState(false)
    const [action, setAction] = useState('add')
    const handleClose = () => {
        setShow(false)
    }
    return (<Template container={
        <>
            <Head>
                <title>Data Master Return</title>
            </Head>
            <Button className='btn btn-info btn-sm float-left' variant="primary" onClick={() =>
                setShow(true)

            } style={{
                'float': 'right',
                'color': '#fff'
            }}>
                <Icon.Plus /> Tambah
            </Button>
            <br />
            <Formreturn show={show} handleClose={handleClose} action={action} />

            <Table />
        </>

    } />)
}

export default Return