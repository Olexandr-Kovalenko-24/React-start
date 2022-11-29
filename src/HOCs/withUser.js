import UserContext from "../contexts/UserContext"

export const withUser = (Component) => (props) => (
    <UserContext.Consumer>
        {([user, setUser]) => {
            return <Component user={user} setUser={setUser} {...props} />
        }}
    </UserContext.Consumer>
);
