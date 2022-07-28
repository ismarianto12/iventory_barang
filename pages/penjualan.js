import Head from "next/head"
import Template from "../components/template/template"
import Card from 'react-bootstrap/Card';
import Cpenjualan from "../components/penjualan";
import { useState } from "react";


const Penjualan = () => {
    // const
    const [show, setShow] = useState(false)
    const [barang, setBarang] = useState([])


    return (<Template container={
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Cpenjualan show={show} barang={barang} />

        </>

    } />)
}

export default Penjualan