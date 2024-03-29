import { Link } from "react-router-dom"

import "../styles/carts.css"
import "../styles/index.css"
import "../styles/App.css"

export default function Carts() {
  return (
    <div className="container">
        <section className="box">
            <h1>Carts</h1>
            <div className="filter">
                <div className="title">
                    <h2>Filters</h2>
                </div>
                    <div className="inputs">
                    <div className="single-filter">
                        <label htmlFor="restaurant-input">
                            <h4>Restaurant:</h4>
                        </label>
                        <input type="text" id="restaurant-input"/>
                    </div>
                    <div className="single-filter">
                        <label htmlFor="organization-input">
                            <h4>Organization:</h4>
                        </label>
                        <input type="text" id="organization-input"/>
                    </div>
                    <button>Filter</button>
                </div>
            </div>

            <div className="list">
                <table>
                    <thead>
                        <th>Col1</th>
                        <th>Col2</th>
                        <th>Col3</th>
                        <th>Col4</th>
                        <th>Col5</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>
                                <Link to={`details/${1}`}>
                                    <i className="fa-solid fa-info"></i>
                                </Link>
                                <Link to={`edit/${1}`}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>
                                <Link to={`details/${2}`}>
                                    <i className="fa-solid fa-info"></i>
                                </Link>
                                <Link to={`edit/${2}`}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>32</td>
                            <td>33</td>
                            <td>34</td>
                            <td>35</td>
                            <td>
                                <Link to={`details/${3}`}>
                                    <i className="fa-solid fa-info"></i>
                                </Link>
                                <Link to={`edit/${3}`}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>42</td>
                            <td>43</td>
                            <td>44</td>
                            <td>45</td>
                            <td>
                                <Link to={`details/${4}`}>
                                    <i className="fa-solid fa-info"></i>
                                </Link>
                                <Link to={`edit/${4}`}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td>52</td>
                            <td>53</td>
                            <td>54</td>
                            <td>55</td>
                            <td>
                                <Link to={`details/${5}`}>
                                    <i className="fa-solid fa-info"></i>
                                </Link>
                                <Link to={`edit/${5}`}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}
