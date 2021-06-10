import { useEffect } from "react";
import SensorCardlay from "../ContentContainer/Sensors";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';
import Spinner from '../assets/Spinner/Spinner';
import Grid from "@material-ui/core/Grid";

const mapStateToProps = state => {
    return {
      sensorsdata: state.sense.sensor,
      loading: state.sense.loading,
      token: state.auth.idToken
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchsensor: (token) =>
        dispatch(actions.sen(token))
    };
  };

const SensorData = props => {
    useEffect(() => {
    props.onFetchsensor(props.token)
        
    }, []);

    let SensorData = <Spinner/>;
    if(!props.loading){
        SensorData = props.sensorsdata.map(sensors => (
            <Grid container spacing={3}>
             <SensorCardlay data={sensors}/>
            </Grid>
           
        ));
    }

    return <div>{SensorData}</div>

};
export default connect(mapStateToProps,mapDispatchToProps)(SensorData)

