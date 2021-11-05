import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import m from "./Body.module.css"
import Madal from "./modal";



function Body() {
    return (
        <div class="container">
            <h1 class="pt-3 pb-3">Танки X уровня вселенной World of Tanks</h1>
            <div class="row">
                <div class="card mb-3 col-sm-12 col-md-6 col-lg-4 ">
                    <div class="row g-0">
                        <div class="col-4">
                            <Image style={{ height: "105px" }} src="https://avatars.mds.yandex.net/get-zen_doc/28845/pub_5e4e6120386b1c555647e3cd_5e4e634da37e4678c176a650/scale_1200" />
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title" className={m.cardtitle}>ИС-7</h5>
                                <Madal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


function Cards() {
    return (
        <Body />
    )
}

export default Cards;