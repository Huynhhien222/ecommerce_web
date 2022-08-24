import React from "react"

const Footer = () => <footer className="page-footer font-small red pt-4" >
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <strong>CÔNG TY CỔ PHẦN MẸ VÀ BÉ.</strong>
                <p>Thành viên của Tập đoàn Con Cung</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a href="#!">Giới thiệu về Mẹ và bé</a></li>
                    <li><a href="#!">Điều khoản sử dụng</a></li>
                   
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li><a href="#!">Hỗ trợ khách hàng</a></li>
                    <li><a href="#!">Kết nối với chúng tôi</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
</footer>

export default Footer