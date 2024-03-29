export default function Carts() {
  return (
    <div className="container">
        <section className="container">
            <h1>Carts</h1>
            <div className="filter">
                <h3>Filters</h3>
                <div className="restaurant-filter">
                    <label htmlFor="restaurant-input">
                        <h5>Restaurant:</h5>
                    </label>
                    <input type="text" id="restaurant-input"/>
                </div>
                <div className="organization-filter">
                    <label htmlFor="organization-input">
                        <h5>Organization:</h5>
                    </label>
                    <input type="text" id="organization-input"/>
                </div>
                <button>Filter</button>
            </div>
        </section>
    </div>
  )
}
