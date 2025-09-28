import React from "react";
import {Spin} from "antd";
import "./Loading.scss";

export default function Loading() {
    return (
        <div className="loading">
            <Spin size="large" />
            <h5>Cargando...</h5>
        </div>
    );
}