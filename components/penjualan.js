import { Modal, Button } from 'react-bootstrap'
import * as Icon from 'react-feather'
import { PencarianBarang } from './PencarianBarang'

const Cpenjualan = ({ show, barang }) => {

    const tampilpencarian = () => {
        return (<PencarianBarang data={databarang} />)
    }
    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    setShow(false)
                }}
                size="lg"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <Icon.Box /> Data Barang
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-striped">
                        <tr>
                            <th>
                                @
                            </th>
                            <th>
                                Nama barang
                            </th>
                            <th>
                                Harga
                            </th> <th>
                                Jenis
                            </th>
                        </tr>
                        <tbody>
                            {
                                barang.map((a) => {

                                    return (<><tr>
                                        <td>
                                            {j + 1}
                                        </td>
                                        <td>
                                            {a.name}
                                        </td>
                                        <td>
                                            {a.price}
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-sm" onClick={() => {


                                            }} type="reset"><Icon.Plus></Icon.Plus> </button>
                                        </td>
                                    </tr></>)

                                })

                            }
                        </tbody>

                    </table>
                </Modal.Body>
            </Modal>
            <div className="container">
                <div className="row">
                    <div className='title' style={{
                        'margin-top': '30px',
                        'font-weight': 'bold'
                    }}>
                        <h3><Icon.Coffee /><span> Penjualan</span></h3>
                        <hr />


                    </div>
                    <div className="col-md-6">
                        <div className="cccard">
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <tr>
                                        <th>
                                            @
                                        </th>
                                        <th>
                                            Nama barang
                                        </th>
                                        <th>
                                            Harga
                                        </th> <th>
                                            Jenis
                                        </th>
                                    </tr>

                                    {/* {data.map((c, a) => {
                                        return (<><tr>
                                            <td>

                                            </td>
                                            <td>
                                                {a.harga}
                                            </td>
                                            <td>
                                                {a.name}
                                            </td>
                                            <td>
                                                {a.jenis}
                                            </td>
                                            <td>
                                                <button className="btn btn-warning col-md-4" onClick={() => {

                                                }} type="reset"><Icon.Plus></Icon.Plus> </button>
                                            </td>
                                        </tr></>)
                                    })} */}

                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="cccard">
                            <div className="card-body">

                                <form action="" className="form-horizontal" method="POST">
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Barang</b></label>
                                        <div className="col-md-7">
                                            <input type={'text'} name="barang" className="form-control" value="" onChange={tampilpencarian}></input>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Qty</b></label>
                                        <div className="col-md-3">
                                            <input type={'text'} name="qty" className="form-control col-md-3" onChange={''} value={''}></input>
                                        </div>
                                        <div className="col-md-5">
                                            <button className="btn btn-info col-md-4" onClick={{}} type="reset"><Icon.Minus /></button>
                                            <button className="btn btn-warning col-md-4" onClick={{}} type="reset"><Icon.Plus></Icon.Plus> </button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-4 form-label" style={{ 'color': '#000' }}><b>Harga Satuan</b></label>
                                        <div className="col-md-7">
                                            NULL

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <div style={{ 'text-align': 'right' }}>
                                            <b>  Total</b>

                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <div className='button-group row'>
                                            <button type="submit" className="btn btn-info col-md-5" onClick={() => {

                                            }}><Icon.Save /> Tambahkan</button>
                                            <button className="btn btn-warning col-md-6" type="reset"><Icon.RefreshCcw />  Reset</button>

                                        </div>
                                    </div>



                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Cpenjualan