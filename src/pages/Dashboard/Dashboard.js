import React from "react";
import AppMenu from "./../../components/Skeleton/AppMenu";
import {connect} from react-redux;
import * as actions from '../../redux/actions/index';

const mapDispatchToProps = dispatch =>{
  return{
    onSingInUp: () => dispatch(actions.authCheckState())
  };
};

function Dashboard() {
  useEffect(() => {
    props.onSignInUp()
        
    }, []);

  return (
    <div>
      <AppMenu />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Dashboard);
