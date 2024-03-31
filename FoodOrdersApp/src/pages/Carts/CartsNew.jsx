import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CartsNew() {

    const navigate = useNavigate();

  return (
    <div className="container">
            <section className="box">
                <h1>Carts</h1>
                <div className="path">
                    <p onClick={() => {navigate("/carts")}}>Carts</p>
                    <p>&gt;&gt;&gt;</p>
                    <p onClick={() => {navigate("/carts/new")}}>New cart</p>
                </div>
            </section>
        </div>
  )
}
