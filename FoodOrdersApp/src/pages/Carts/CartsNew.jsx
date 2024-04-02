import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CartsNew() {

    const navigate = useNavigate();

  return (
    <div className="container">
            <section className="box">
                <h1>Carts</h1>
                <div className="path">
                    <p className="path-link" onClick={() => {navigate("/carts")}}>Carts</p>
                    <p className="path-arrows">&gt;&gt;&gt;</p>
                    <p className="path-link" onClick={() => {navigate("/carts/new")}}>New cart</p>
                </div>
                <div className="form">
                    <label htmlFor="test1">Test</label>
                    <input type="text" id="test1" name="test1"/>
                    <label htmlFor="test2">Test</label>
                    <input type="text" id="test2" name="test2"/>
                    <label htmlFor="test3">Test</label>
                    <input type="text" id="test3" name="test3"/>
                    <label htmlFor="test4">Test</label>
                    <input type="text" id="test4" name="test4"/>
                </div>
                <div className="control-buttons">
                    <button>Go back</button>
                    <button>Create cart</button>
                </div>
            </section>
        </div>
  )
}
