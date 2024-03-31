import { useState } from "react"
import { Link } from "react-router-dom"

import "../../styles/carts.css"
import "../../styles/index.css"
import "../../styles/App.css"

export default function Carts() {

    const [sorting, setSorting] = useState(["col1", 0])

    const [carts, setCarts] = useState([
        {
            "id" : 1,
            "minPrice": 19.99,
            "totalCartPrice" : 19.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 1"
            },
            "restaurant" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 2,
            "minPrice": 29.99,
            "totalCartPrice" : 29.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 2"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 3,
            "minPrice": 39.99,
            "totalCartPrice" : 39.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 3"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 4,
            "minPrice": 49.99,
            "totalCartPrice" : 49.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 4"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 5,
            "minPrice": 59.99,
            "totalCartPrice" : 59.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 5"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 6,
            "minPrice": 69.99,
            "totalCartPrice" : 69.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 6"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 7,
            "minPrice": 79.99,
            "totalCartPrice" : 79.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 7"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 8,
            "minPrice": 89.99,
            "totalCartPrice" : 89.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 8"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 9,
            "minPrice": 99.99,
            "totalCartPrice" : 99.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 9"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
        {
            "id" : 10,
            "minPrice": 109.99,
            "totalCartPrice" : 109.99,
            "deliveryPrice" : 0.00,
            "organization" : {
                "name" : "Organization 10"
            },
            "restaurantId" : {
                "name" : "McDonald's"
            }
        },
    ])

    function sortTable(column) {
        setSorting(prev => {
            if (prev[0] === column && prev[1] === 0) return [column, 1]
            return [column, 0]
        })
    }

    function generateTableHeader() {
        return (
            <thead>
                <tr>
                    <th onClick={() => sortTable("col1")}>
                        {
                            sorting[0] == "col1" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Col1
                    </th>
                    <th onClick={() => sortTable("col2")}>
                        {
                            sorting[0] == "col2" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Col1
                    </th>
                    <th onClick={() => sortTable("col3")}>
                        {
                            sorting[0] == "col3" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Col1
                    </th>
                    <th onClick={() => sortTable("col4")}>
                        {
                            sorting[0] == "col4" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Col1
                    </th>
                    <th onClick={() => sortTable("col5")}>
                        {
                            sorting[0] == "col5" &&
                            (
                                sorting[1] === 0
                                ? <i className="fa-solid fa-arrow-down-a-z"></i>
                                : <i className="fa-solid fa-arrow-up-a-z"></i>
                            )
                        }
                        Col1
                    </th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    
    function generateTableBody() {
        return (
            <tbody>
               
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    
                </tr>
                <tr>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>
                        <Link to={`details/${2}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${2}`} className="edit">
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
                        <Link to={`details/${3}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${3}`} className="edit">
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
                        <Link to={`details/${4}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${4}`} className="edit">
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
                        <Link to={`details/${5}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${5}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>61</td>
                    <td>62</td>
                    <td>63</td>
                    <td>64</td>
                    <td>65</td>
                    <td>
                        <Link to={`details/${6}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${6}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>71</td>
                    <td>72</td>
                    <td>73</td>
                    <td>74</td>
                    <td>75</td>
                    <td>
                        <Link to={`details/${7}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${7}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>81</td>
                    <td>82</td>
                    <td>83</td>
                    <td>84</td>
                    <td>85</td>
                    <td>
                        <Link to={`details/${8}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${8}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>91</td>
                    <td>92</td>
                    <td>93</td>
                    <td>94</td>
                    <td>95</td>
                    <td>
                        <Link to={`details/${9}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${9}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>101</td>
                    <td>102</td>
                    <td>103</td>
                    <td>104</td>
                    <td>105</td>
                    <td>
                        <Link to={`details/${10}`} className="details">
                            <i className="fa-solid fa-info"></i>
                        </Link>
                        <Link to={`edit/${10}`} className="edit">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                    </td>
                </tr>
            </tbody>
        )
    }

    return (
        <div className="container">
            <section className="box">
                <h1>Carts</h1>
                <div className="filter">
                    <div className="add-new">
                        <Link to="new"className="button">New cart</Link>
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
                        { generateTableHeader() }
                        { generateTableBody() }
                    </table>
                    <div className="pagination">
                        <ul>
                            <li className="clickable"><i className="fa-solid fa-caret-left"></i></li>
                            <li className="clickable">1</li>
                            <li>...</li>

                            <li className="clickable">10</li>
                            <li className="clickable">11</li>
                            <li className="clickable">12</li>
                            <li className="clickable">13</li>
                            <li className="clickable">14</li>

                            <li>...</li>
                            <li className="clickable">67</li>
                            <li className="clickable"><i className="fa-solid fa-caret-right"></i></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
