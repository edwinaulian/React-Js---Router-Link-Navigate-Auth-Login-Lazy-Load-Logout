import { Outlet, useSearchParams } from "react-router-dom"

export const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUser = searchParams.get('filter') === 'active';
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2> 
            <Outlet></Outlet>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active button</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUser ? <h2>Showing active users</h2> : <h2>Showing all users</h2>}
        </div>
    )
}