import { Route,  } from "react-router-dom";


export default function ProtectedRoute({ component: Component, ...rest }: any) {
  // const history = useHistory();
  // let user = JSON.stringify(localStorage.getItem('userName'));
  //    if ((history.action === 'POP' && history.location.pathname === '/')) {
  //     history.push('/');
  //     localStorage.removeItem("userName");
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('tokenExpiry');
  //     localStorage.removeItem('refresh_token');
  //    }
  //   else if((history.action === 'POP' && JSON.parse(user) === null)) {
  //       history.push('/');
  //    } 
     
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       return user ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  //       )
  //     }}
  //   >
  //   </Route>
  // );
}
